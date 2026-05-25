# Joseph DiPeri Portfolio

Static portfolio site for `jdiperi.com`, deployed by Netlify from GitHub.

## Local Development

```bash
npm install
npm start
```

`npm start` builds `public/` into `dist/` and serves the production output at
`http://localhost:4173`.

## Build

```bash
npm run build
```

## Content

- Portfolio page: `public/index.html`
- Styles: `public/styles.css`
- Resume PDF: `public/jdiperi_resume.pdf`
- Public assets: `public/assets/`
- Netlify publish directory: `dist`

The site intentionally has no runtime dependencies. It replaced the old Create
React App and Cypress scaffold with a simpler static deploy path while keeping
the original portfolio shape: about, projects, experience, contact, and resume.
