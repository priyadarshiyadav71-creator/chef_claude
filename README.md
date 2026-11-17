# Chef Claude

### Turn the ingredients you have into something delicious.

Chef Claude is a React app that helps you find a recipe using ingredients already in your kitchen. Add ingredients to your list, then ask the AI chef for a recipe idea.

<p align="center">
  <a href="https://YOUR_LIVE_DEMO_URL" target="_blank">
    <img alt="Open the live demo" src="https://img.shields.io/badge/Live%20Demo-Add%20your%20URL-10b981?style=for-the-badge" />
  </a>
  <a href="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY" target="_blank">
    <img alt="View the GitHub repository" src="https://img.shields.io/badge/GitHub-View%20repository-111827?style=for-the-badge&logo=github" />
  </a>
</p>

> **Personalize these links:** Replace `YOUR_USERNAME`, `YOUR_REPOSITORY`, and `YOUR_LIVE_DEMO_URL` with your GitHub details and deployed app URL.

## Contents

- [Preview](#preview)
- [Features](#features)
- [Built with](#built-with)
- [Run locally](#run-locally)
- [AI configuration](#ai-configuration)
- [Available scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Connect](#connect)

## Preview

Click a preview image to open it. Replace the placeholder image URLs with screenshots of your app when you have them.

<p align="center">
  <a href="https://placehold.co/1200x750/f4f7f3/1f2937?text=Chef+Claude+%E2%80%94+Ingredient+List" target="_blank">
    <img src="https://placehold.co/900x560/f4f7f3/1f2937?text=Add+your+Chef+Claude+screenshot" alt="Placeholder for the Chef Claude ingredient-list screenshot" width="72%" />
  </a>
</p>
<p align="center"><em>Ingredient list — replace this placeholder with a screenshot.</em></p>

<p align="center">
  <a href="https://placehold.co/1200x750/ecfdf5/065f46?text=Chef+Claude+%E2%80%94+Generated+Recipe" target="_blank">
    <img src="https://placehold.co/900x560/ecfdf5/065f46?text=Add+your+generated+recipe+screenshot" alt="Placeholder for a generated recipe screenshot" width="72%" />
  </a>
</p>
<p align="center"><em>Generated recipe — replace this placeholder with a screenshot.</em></p>

## Features

- Add ingredients to a running list.
- Generate a recipe once you have enough ingredients.
- View recipe suggestions rendered from Markdown.
- Responsive layout for desktop and mobile screens.

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Groq API](https://console.groq.com/docs/overview) for AI recipe generation

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd YOUR_REPOSITORY
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the AI integration as described in [AI configuration](#ai-configuration).
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite.

## AI configuration

The current recipe integration reads `VITE_GROQ_API_KEY`. For local experimentation, add it to a local environment file supported by Vite, for example `.env.local`:

```env
VITE_GROQ_API_KEY=your_groq_api_key
```

**Security note:** Vite exposes `VITE_` variables in the browser bundle. Do not use this client-side configuration with a private production API key or commit a real key. For a public deployment, route AI requests through a backend that keeps the key on the server.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Roadmap

- [ ] Add ingredient removal and editing.
- [ ] Save favorite recipes.
- [ ] Deploy the app and add the live URL above.
- [ ] Replace the preview placeholders with real screenshots.

## Connect

- **GitHub profile:** [Add your GitHub profile](https://github.com/YOUR_USERNAME)
- **Project repository:** [Chef Claude on GitHub](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY)
- **Live app:** [Open Chef Claude](https://YOUR_LIVE_DEMO_URL)
