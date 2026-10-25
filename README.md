# abhijitbosedas.com

Personal homepage of **Abhijit Bose Das**, Flutter developer (SDE I) at Kuhoo Finance.

Built with React (Create React App). It's a single dark page styled like a bank statement ("Statement of Account"): a balance summary, job entries, the five stages of a student loan, a ledger of shipped work, stack, side work, projects built for fun, hobbies, school results and contact.

## Run locally

Requires Node.js 24.x (pinned in `package.json` under `engines`, which Vercel also uses).

```bash
npm install
npm start        # http://localhost:3000
npm test
npm run build    # production build in ./build
```

## Editing content

All text lives in `src/App.jsx` as plain arrays at the top of the file (`BALANCES`, `ROLES`, `STAGES`, `LEDGER`, `STACK`, `FUN_PROJECTS`, `HOBBIES`, `SCHOOLS`). Styles are in `src/App.css`, with the colour and font tokens at the top. The profile photo is `src/assets/portrait.jpg` (shown in grayscale by CSS).

## Updating the resume

The resume is served from `public/resume.pdf` and linked from the nav, the hero and the contact section. To update it, replace that file with the new PDF under the same name (on GitHub: open `public`, then Add file → Upload files) and commit; Vercel redeploys automatically.
