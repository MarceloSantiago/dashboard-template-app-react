#!/usr/bin/env node

/**
 * Translation Validation Script
 * 
 * This script scans all .tsx files for t() translation calls and
 * validates that all keys exist in the locale JSON files.
 * 
 * Usage: node scripts/validate-translations.js
 */

const fs = require('fs');
const path = require('path');

// Language files
const localesDir = path.join(__dirname, '../src/i18n/locales');
const localeFiles = ['en.json', 'pt-BR.json', 'es.json'];

// Load all locale files
const locales = {};
localeFiles.forEach(file => {
  const filePath = path.join(localesDir, file);
  locales[file] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
});

// Flatten nested objects to dot-notation keys
function flattenObject(obj, prefix = '') {
  const result = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenObject(obj[key], fullKey));
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

// Flatten all locales
const flattenedLocales = {};
for (const [lang, data] of Object.entries(locales)) {
  flattenedLocales[lang] = flattenObject(data);
}

// Scan src/pages and src/components for t() calls
function scanForTranslations(dir, extensions = ['.tsx', '.ts']) {
  const translations = new Set();
  
  function walk(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .next, dist, etc.
        if (!['node_modules', '.next', 'dist', '.git'].includes(file)) {
          walk(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, 'utf8');
        // Match t('key') or t("key") patterns
        const matches = content.match(/t\s*\(\s*['"]([^'"]+)['"]\s*(?:,|\))/g) || [];
        matches.forEach(match => {
          const keyMatch = match.match(/t\s*\(\s*['"]([^'"]+)['"]/);
          if (keyMatch) {
            translations.add(keyMatch[1]);
          }
        });
      }
    }
  }
  
  walk(dir);
  return translations;
}

// Main validation
const srcDir = path.join(__dirname, '../src');
const usedKeys = scanForTranslations(srcDir);

// Check for missing keys in each language
const results = {
  'en.json': { missing: [], found: 0 },
  'pt-BR.json': { missing: [], found: 0 },
  'es.json': { missing: [], found: 0 }
};

usedKeys.forEach(key => {
  for (const [lang, flatLocale] of Object.entries(flattenedLocales)) {
    if (!(key in flatLocale)) {
      results[lang].missing.push(key);
    } else {
      results[lang].found++;
    }
  }
});

// Print results
console.log('\n========================================');
console.log('   TRANSLATION VALIDATION REPORT');
console.log('========================================\n');

let totalMissing = 0;
for (const [lang, data] of Object.entries(results)) {
  const langName = lang === 'en.json' ? 'English' : lang === 'pt-BR.json' ? 'Português' : 'Español';
  console.log(`${langName} (${lang}):`);
  console.log(`  Found: ${data.found} keys`);
  console.log(`  Missing: ${data.missing.length} keys`);
  
  if (data.missing.length > 0) {
    console.log(`  Missing keys:`);
    data.missing.forEach(key => {
      console.log(`    - ${key}`);
    });
    console.log('');
    totalMissing += data.missing.length;
  }
  console.log('');
}

console.log('========================================');
if (totalMissing === 0) {
  console.log('  ✅ ALL TRANSLATIONS COMPLETE!');
} else {
  console.log(`  ⚠️  ${totalMissing} MISSING TRANSLATIONS`);
}
console.log('========================================\n');

// Exit with error code if missing translations
process.exit(totalMissing > 0 ? 1 : 0);
