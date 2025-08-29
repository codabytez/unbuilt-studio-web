# 🤝 Contributing to Unbuilt Studio

Welcome! 🎉
We’re excited you want to contribute to **Unbuilt Studio**.
To keep our workflow clean and consistent, please follow these guidelines.

---

## 🌱 Branch Naming Convention

Always create a new branch from `main`.

Format:

```bash

<type>/<short-description>

```

### Types

- `feat/*` → New features or enhancements
  - `feat/hero-section`
- `fix/*` → Bug fixes
  - `fix/navbar-overlap`
- `docs/*` → Documentation updates only
  - `docs/readme-update`
- `chore/*` → Maintenance, configs, setup
  - `chore/update-deps`
- `hotfix/*` → Urgent fixes for production
  - `hotfix/deployment-error`

### Rules

- Use lowercase + hyphens (`feat/hero-section`)
- Keep names short but descriptive
- One purpose per branch

---

## 📝 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/).

Format:

```bash

<type>(optional-scope): <short-summary>

```

### Commit Types

- `feat:` → New feature
- `fix:` → Bug fix
- `docs:` → Docs only changes
- `style:` → CSS/styling changes (no logic changes)
- `refactor:` → Refactoring code
- `chore:` → Build tasks, dependencies, configs
- `perf:` → Performance improvements

### Examples

```bash

feat: add hero section with CTA
fix: correct navbar mobile menu toggle
docs: update contributing guide with branch rules
chore: upgrade next.js to v15

```

---

## 🔄 Pull Requests (PRs)

1. Make sure your branch is up to date with `main`:

   ```bash
   git pull origin main
   ```

2. Open a PR into `main`.
3. Use a **clear title and description** explaining the change.
4. Link issues (if any).
5. Request review from a team member.
6. Once approved → merge → delete the branch.
7. PRs should pass CI checks (linting, tests).

## 🏗️ Workflow Example

```bash
# 1. Checkout main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feat/hero-section

# 3. Work and commit
git add .
git commit -m "feat: add hero section with CTA"

# 4. Push to remote
git push -u origin feat/hero-section

# 5. Open PR → review
```

---

## ✅ Checklist Before PR

- [ ] Code runs without errors
- [ ] Linting/formatting passes (`pnpm lint`)
- [ ] No unused files or variables
- [ ] Updated docs/README if necessary
- [ ] Commit message follows convention

---

## ❤️ Thank You

Every contribution makes Unbuilt Studio better.
Your ideas turn the unbuilt into something extraordinary 🌟

```
# Happy coding! 🚀
```
