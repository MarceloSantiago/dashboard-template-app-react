#!/usr/bin/env node

/**
 * Dark Mode Validation Script
 *
 * This script scans .tsx files for Tailwind CSS classes that are missing
 * dark: variants. It checks for color-related classes like text-*, bg-*, border-*
 * that should have corresponding dark: variants.
 *
 * Usage: node scripts/validate-dark-mode.cjs
 */

const fs = require('fs');
const path = require('path');

// Color-related Tailwind prefixes that should have dark: variants
const COLOR_PATTERNS = {
  'text-': 'text',
  'bg-': 'bg',
  'border-': 'border',
  'placeholder-': 'placeholder',
  'fill-': 'fill',
  'stroke-': 'stroke',
  'shadow-': 'shadow',
};

// Colors that are typically light-mode specific
const LIGHT_MODE_COLORS = [
  'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300',
  'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900',
  'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'indigo',
  'cyan', 'teal', 'emerald', 'lime', 'amber', 'violet', 'fuchsia',
  'rose', 'sky', 'neutral', 'stone', 'zinc', 'inherit', 'current', 'transparent'
];

// Dark mode specific colors
const DARK_MODE_COLORS = [
  'dark', 'dark-gray', 'dark:bg-gray-900', 'dark:bg-gray-800'
];

function scanForDarkModeIssues(dir, extensions = ['.tsx', '.ts']) {
  const issues = [];

  function walk(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (!['node_modules', '.next', 'dist', '.git'].includes(file)) {
          walk(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');

        lines.forEach((line, lineIndex) => {
          // Match className="..." or className={`...`} patterns
          const classNameMatches = line.match(/className\s*=\s*[`"'(]/g);

          if (classNameMatches) {
            // Extract className value
            const classNameMatch = line.match(/className\s*=\s*(?:{`([^`]+)`}|"([^"]+)"|'([^']+)'|{([^}]+)})/);

            if (classNameMatch) {
              const classNameValue = classNameMatch[1] || classNameMatch[2] || classNameMatch[3] || '';
              const classes = classNameValue.split(/\s+/).filter(c => c.length > 0);

              // Check each class for color patterns
              classes.forEach(cls => {
                for (const [prefix, type] of Object.entries(COLOR_PATTERNS)) {
                  if (cls.startsWith(prefix) && !cls.startsWith('dark:')) {
                    const colorPart = cls.substring(prefix.length);

                    // Skip if it's already a dark: variant or has dark: counterpart
                    if (colorPart === 'dark' || colorPart.startsWith('dark-')) continue;

                    // Skip non-color values (like text-xs, bg-lg, etc.)
                    if (!LIGHT_MODE_COLORS.some(c => colorPart.startsWith(c) || colorPart === c)) continue;

                    // Check if this class likely needs a dark: variant
                    if (needsDarkVariant(cls)) {
                      issues.push({
                        file: filePath.replace(dir, ''),
                        line: lineIndex + 1,
                        class: cls,
                        suggestion: `dark:${cls}`
                      });
                    }
                  }
                }
              });
            }
          }
        });
      }
    }
  }

  walk(dir);
  return issues;
}

function needsDarkVariant(className) {
  // These typically need dark variants
  const needsDark = [
    /^text-(white|black|gray-\d+|neutral|stone|zinc)$/,
    /^bg-(white|black|gray-\d+|neutral|stone|zinc)$/,
    /^border-(white|black|gray-\d+|neutral|stone|zinc)$/,
    /^placeholder-(white|black|gray-\d+|neutral|stone|zinc)$/,
  ];

  return needsDark.some(regex => regex.test(className));
}

// Main
const srcDir = path.join(__dirname, '../src');
const issues = scanForDarkModeIssues(srcDir);

// Remove duplicates
const uniqueIssues = [];
const seen = new Set();

for (const issue of issues) {
  const key = `${issue.file}:${issue.line}:${issue.class}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueIssues.push(issue);
  }
}

// Print results
console.log('\n========================================');
console.log('   DARK MODE VALIDATION REPORT');
console.log('========================================\n');

console.log(`Total issues found: ${uniqueIssues.length}\n`);

// Group by file
const byFile = {};
for (const issue of uniqueIssues) {
  if (!byFile[issue.file]) {
    byFile[issue.file] = [];
  }
  byFile[issue.file].push(issue);
}

for (const [file, fileIssues] of Object.entries(byFile)) {
  console.log(`\n${file}:`);
  fileIssues.forEach(issue => {
    console.log(`  Line ${issue.line}: ${issue.class} -> ${issue.suggestion}`);
  });
}

console.log('\n========================================');
if (uniqueIssues.length === 0) {
  console.log('  ✅ NO DARK MODE ISSUES FOUND!');
} else {
  console.log(`  ⚠️  ${uniqueIssues.length} POTENTIAL ISSUES`);
  console.log('  (These are suggestions - verify before fixing)');
}
console.log('========================================\n');

process.exit(0);
