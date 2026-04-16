---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. Fetch the latest guidelines from the source URL below
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the fetched guidelines
4. Output findings in the terse `file:line` format

## Guidelines Source

Fetch fresh guidelines before each review:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Use WebFetch to retrieve the latest rules. The fetched content contains all the rules and output format instructions.

## Usage

When a user provides a file or pattern argument:
1. Fetch guidelines from the source URL above
2. Read the specified files
3. Apply all rules from the fetched guidelines
4. Output findings using the format specified in the guidelines

If no files specified, ask the user which files to review.

---

## Related Skills

| Skill | When to Use |
|-------|-------------|
| **[frontend-design](../frontend-design/SKILL.md)** | Before coding - Learn design principles (color, typography, UX psychology) |
| **web-design-guidelines** (this) | After coding - Audit for accessibility, performance, and best practices |

## Design Workflow

```
1. DESIGN   → Read frontend-design principles
2. CODE     → Implement the design
3. AUDIT    → Run web-design-guidelines review ← YOU ARE HERE
4. FIX      → Address findings from audit
```

---

## Dark Mode Audit Checklist

> **IMPORTANT:** After fixing design issues, ALWAYS validate dark mode classes.

### Pre-Flight Check
```bash
npm run validate-darkmode
```

### Dark Mode Requirements
- [ ] All `bg-*` have `dark:bg-*` variants
- [ ] All `text-*` have `dark:text-*` variants
- [ ] All `border-*` have `dark:border-*` variants
- [ ] All `hover:bg-*` have `dark:hover:bg-*` variants
- [ ] Color contrast meets WCAG AA (4.5:1 for text)

### Template Colors for This Project
| Class | Dark Value | Usage |
|-------|-----------|-------|
| `dark:bg-boxdark` | #1a2231 | Card backgrounds |
| `dark:bg-gray-800` | #1d2939 | Secondary backgrounds |
| `dark:border-strokedark` | #2a2f3c | Borders |
| `dark:text-white` | #ffffff | Primary text |
| `dark:text-gray-400` | #98a2b3 | Secondary text |
