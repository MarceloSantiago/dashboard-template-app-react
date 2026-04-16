---
name: lint-and-validate
description: Automatic quality control, linting, and static analysis procedures. Use after every code modification to ensure syntax correctness and project standards. Triggers onKeywords: lint, format, check, validate, types, static analysis.
allowed-tools: Read, Glob, Grep, Bash
---

# Lint and Validate Skill

> **MANDATORY:** Run appropriate validation tools after EVERY code change. Do not finish a task until the code is error-free.

### Procedures by Ecosystem

#### Node.js / TypeScript
1. **Lint/Fix:** `npm run lint` or `npx eslint "path" --fix`
2. **Types:** `npx tsc --noEmit`
3. **Security:** `npm audit --audit-level=high`

#### Python
1. **Linter (Ruff):** `ruff check "path" --fix` (Fast & Modern)
2. **Security (Bandit):** `bandit -r "path" -ll`
3. **Types (MyPy):** `mypy "path"`

## The Quality Loop
1. **Write/Edit Code**
2. **Run Audit:** `npm run lint && npx tsc --noEmit`
3. **Analyze Report:** Check the "FINAL AUDIT REPORT" section.
4. **Fix & Repeat:** Submitting code with "FINAL AUDIT" failures is NOT allowed.

## Error Handling
- If `lint` fails: Fix the style or syntax issues immediately.
- If `tsc` fails: Correct type mismatches before proceeding.
- If no tool is configured: Check the project root for `.eslintrc`, `tsconfig.json`, `pyproject.toml` and suggest creating one.

---
**Strict Rule:** No code should be committed or reported as "done" without passing these checks.

---

## Scripts

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/lint_runner.py` | Unified lint check | `python scripts/lint_runner.py <project_path>` |
| `scripts/type_coverage.py` | Type coverage analysis | `python scripts/type_coverage.py <project_path>` |
| `scripts/validate-dark-mode.cjs` | Dark mode class validation | `node scripts/validate-dark-mode.cjs` |

---

## Dark Mode Validation (Tailwind CSS)

> **CRITICAL for UI work:** After ANY component change, ALWAYS run dark mode validation.

### Quick Validation
```bash
npm run validate-darkmode
```

### What it Checks
- Classes `text-*`, `bg-*`, `border-*`, `placeholder-*` without `dark:` variants
- Identifies potential visibility issues in dark mode
- Reports file paths and line numbers for easy fixing

### When to Run
- ✅ After creating new UI components
- ✅ After modifying existing components
- ✅ Before committing code
- ✅ When user reports dark mode issues

### The 60-Second Fix Protocol
1. Run `npm run validate-darkmode`
2. Review reported issues (false positives are common for `text-white`, `text-black`)
3. Fix critical issues (text on colored backgrounds)
4. Re-run to confirm
5. Done!

