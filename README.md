# abhijitbosedas.com

Personal homepage of **Abhijit Bose Das**, Flutter developer (SDE I) at Kuhoo Finance.

Built with React (Create React App). It's a single page: intro, a loan-lifecycle overview, experience, skills, projects, education and contact. Light and dark themes follow the visitor's system setting.

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm test
npm run build    # production build in ./build
```

## Editing content

All text lives in `src/App.jsx` as plain arrays at the top of the file (`STATS`, `LIFECYCLE`, `PRODUCTS`, `SKILLS` and so on). Styles are in `src/App.css`, with the colour tokens at the top.
