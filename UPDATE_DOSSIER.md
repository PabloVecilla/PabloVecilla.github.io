# Pablo Vecilla Portfolio Update

Updated: 10 September 2026

## Outcome

The portfolio now presents Pablo as a full-stack developer with an advertising background. English is the default language, with a persistent English/Spanish switch in the header. The original visual identity remains intact: the same DM Serif Display and Roboto Flex typefaces, colour palette, spacing system, portrait treatment, section rhythm and responsive breakpoints are still in use.

## Content changes

### Hero

- Repositioned the page around the current professional profile.
- New English headline: “Full-stack developer with an advertising background and a user-first mindset.”
- Added an equivalent Spanish version written to preserve a similar visual length.
- Updated the introduction, image description and scroll prompt in both languages.

### Projects

The former Clients section is now Projects and reflects the three projects in the current CV:

1. **Workout Bud** — mobile-first workout planning SPA, secure authentication and a containerised PostgreSQL database.
2. **Weather App** — real-time weather data using geolocation and the OpenWeather API.
3. **Movie App** — role-based film repository with CRUD capabilities and a hybrid SQL/MongoDB architecture.

The original bordered grid treatment was retained and adapted into three responsive project cards.

### About

- Replaced the previous advertising-focused text with the profile directly below Pablo’s name in the CV.
- Kept the wording concise enough to preserve the original section balance.
- Added working LinkedIn, GitHub and email links from the CV.

### Skills

Replaced the former service offering with the current CV stack, grouped into:

- Backend & Databases
- Frontend
- DevOps & Tools
- Ways of Working

### Navigation and footer

- Navigation now points to Projects, About, Skills and Contact.
- Footer now shows the current role and Madrid location.
- Placeholder social links were replaced with Pablo’s real LinkedIn, GitHub and email destinations.

## Language system

- English is the first-visit default.
- The `ES` / `EN` control switches all page copy without reloading.
- The selected language is saved in the browser for future visits.
- Page language, title, descriptions, image alternative text and navigation labels update with the selected language.

## Technical and quality work

- Preserved the existing HTML/CSS/JavaScript architecture; no framework or dependency was added.
- Preserved the existing typography and responsive CSS system.
- Repaired malformed section and list markup in the original HTML.
- Removed references to missing local stylesheet and favicon files, avoiding unnecessary 404 errors.
- Added semantic `main`, `article` and navigation landmarks.
- Added descriptive image text, keyboard-accessible language control and translated accessible labels.
- Added search and social metadata.
- Added a 1200 × 630 branded social-sharing image at `images/og.png`.
- Protected the source CV and temporary files from accidental publication through `.gitignore`. The CV stays in the local project folder but will not be committed by the deployment steps below.

## Verification completed

- The page responds successfully from a local web server.
- JavaScript syntax check passes.
- HTML parses with no structural errors, duplicate IDs or missing local assets.
- Every translatable page element has both an English and Spanish value.
- CSS braces are balanced and the original mobile breakpoints remain active.
- The social-sharing image was inspected after export; both text lines are accurate and legible.

## Social preview generation note

The final image was created with the built-in ImageGen workflow using this prompt:

> Use case: ads-marketing. Asset type: landscape website social sharing card, designed to crop cleanly to 1200x630. Create a refined editorial portfolio card for Pablo Vecilla, balancing full-stack development with an advertising background. Use a deep forest-green field with restrained cream and warm-orange geometric linework inspired by code grids and advertising layout systems. Premium minimal graphic design, elegant editorial poster, flat subtly textured finish. Wide landscape, strong hierarchy, generous safe margins and balanced negative space. Render “Pablo Vecilla” and “Full-stack developer with an advertising background.” exactly once, with the name in a high-contrast elegant display serif and the supporting line in a clean modern sans serif. Exact spelling, capitalization, hyphenation and punctuation are mandatory. High legibility at thumbnail size. No portrait, logos, icons, extra words or watermark.

## Simple deployment plan: GitHub Pages

The cleanest setup is a GitHub user site. It produces the address `https://pablovecilla.github.io/`, which already matches the social metadata in the page.

### 1. Create the repository

On GitHub, while signed in as `PabloVecilla`, create a new public repository named exactly:

```text
PabloVecilla.github.io
```

Leave it empty when creating it (no generated README, licence or `.gitignore`).

### 2. Publish the existing folder

Open a terminal in the `Pablo&` folder and run:

```bash
git init
git add .
git commit -m "Update portfolio for full-stack developer profile"
git branch -M main
git remote add origin https://github.com/PabloVecilla/PabloVecilla.github.io.git
git push -u origin main
```

### 3. Enable Pages if needed

In the GitHub repository, open **Settings → Pages**. Choose **Deploy from a branch**, then select **main** and **/(root)**. GitHub user sites are often enabled automatically after the first push.

### 4. Verify

After GitHub finishes the deployment, open:

```text
https://pablovecilla.github.io/
```

Check the English landing view, switch to Spanish, open each navigation link, and test the contact, LinkedIn and GitHub links.

### 5. Optional custom domain

If a custom domain is added later, update `og:url`, `og:image` and `twitter:image` in `index.html` to use that domain. Then configure the domain in **Settings → Pages** and enable HTTPS.

## Files changed or added

- `index.html` — current content, semantic structure, bilingual hooks and metadata.
- `js/main.js` — English/Spanish translations and persistent language switching.
- `css/styles.css` — minimal styling for the language control, project cards and profile links, using the existing design tokens.
- `images/og.png` — branded social-sharing image.
- `.gitignore` — excludes local CV/source material, temporary output and Finder metadata from deployment.
- `UPDATE_DOSSIER.md` — this report and deployment plan.
