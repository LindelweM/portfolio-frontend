# Portfolio site

React + Vite + Tailwind CSS v4.

## Edit your content
Everything you need to personalize is in `src/data/content.js` — name, tagline,
intro, experience, education, skills, and projects. Nothing else needs to change
to get your real details on the site.

## Add your files
- Drop your CV PDF at `public/resume.pdf` (matches the download link in the Resume section)
- Drop project screenshots into `public/projects/` matching the filenames referenced
  in `src/data/content.js` (missing images just won't render — no broken icons)

## Run locally
```
npm install
npm run dev
```

## Connect the contact form
The contact form posts to the backend in `../portfolio-server`. Set the API URL
via an env var before building:

Create a `.env` file:
```
VITE_CONTACT_API_URL=https://your-deployed-backend-url/api/contact
```

## Deploy (free)
Push this folder to a GitHub repo, then import it on https://vercel.com — it
auto-detects Vite and deploys on every push to main. Add the
`VITE_CONTACT_API_URL` env var in the Vercel project settings too.
