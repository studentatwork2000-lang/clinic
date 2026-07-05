# MercyD Solution | Maidstone Construction Tender

A functional, deployable static landing page for MercyD Solution's Maidstone construction tender opportunity.

## What changed

- Created `index.html` from the Stitch-exported `code.html` source.
- Preserved the existing Stitch visual design, layout, hero background, spacing, colours, cards, and transitions.
- Added working smooth-scroll navigation and hero call-to-action links.
- Added an accessible mobile dropdown menu with `aria-expanded`, outside-click close, Escape-key close, and automatic close after link selection.
- Updated contact links for email and WhatsApp, including a prefilled WhatsApp message.
- Converted the enquiry form into a Netlify Form named `proposal-interest` with required field validation, honeypot spam protection, inline error messaging, and enhanced JavaScript submission feedback.
- Added SEO and Open Graph metadata.

## Run locally

Because this is a static site, you can open `index.html` directly in a browser. For a closer deployment preview, run a local static server from the project root:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy to Netlify

1. Push this repository to your Git provider.
2. Create a new Netlify site from the repository.
3. Use the repository root as the publish directory.
4. No build command is required.
5. Deploy the site.

## Netlify Forms note

The enquiry form uses Netlify Forms via `data-netlify="true"`, `method="POST"`, and the form name `proposal-interest`. Netlify will detect the form during deployment and capture submissions in the Netlify dashboard.

If JavaScript submission enhancement fails, the form falls back to normal static form submission behavior.
