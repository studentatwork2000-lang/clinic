# MercyD Solution Maidstone Construction Tender

Static one-page landing page functionalized from the existing Stitch export.

## What changed

- Created `index.html` from the Stitch `code.html` source for deployment.
- Added functional smooth-scroll navigation anchors for Overview, Project Details, Scope, and Contact.
- Added an accessible mobile dropdown menu with close-on-link-click, outside-click close, Escape key support, and `aria-expanded` state.
- Updated email and WhatsApp contact links, including a prefilled WhatsApp enquiry message.
- Converted the enquiry form to a Netlify Forms-compatible form with validation, honeypot spam protection, and progressive JavaScript submission feedback.
- Added SEO and Open Graph metadata.
- Moved behavior into `script.js` while preserving the Stitch styling and layout.

## Run locally

Open `index.html` directly in a browser, or run a simple static server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Netlify

1. Push this folder to a Git repository.
2. In Netlify, create a new site from the repository.
3. Use no build command.
4. Set the publish directory to the repository root.
5. Deploy.

## Netlify Forms note

The enquiry form is named `proposal-interest` and uses Netlify Forms attributes. Netlify will detect it during deployment and capture submissions in the Netlify dashboard.
