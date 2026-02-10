# Vercel Deployment Guide

This guide explains how to deploy the **CareerOrbit** application to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com/) account.
- A [GitHub](https://github.com/) account (recommended for continuous deployment).
- The project pushed to a GitHub repository.

## Deployment Steps (Recommended)

1.  **Login to Vercel:** Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project:** Click "Add New..." -> "Project".
3.  **Import Git Repository:** Select your GitHub repository (`Career-Orbit` or similar).
4.  **Configure Project:**
    - **Framework Preset:** Vercel should automatically detect **Vite**. If not, select "Vite".
    - **Root Directory:** Edit this if your `vite.config.ts` is not in the root. Based on the current structure, if `package.json` is in the root, leave it as `./`. 
      - *Note:* If the client code is in a `client` folder and you are deploying only the client, set the Root Directory to `client`.
    - **Build Command:** `npm run build` (or `vite build`).
    - **Output Directory:** `dist`.
    - **Install Command:** `npm install`.
5.  **Environment Variables:** Add any necessary environment variables (e.g., API URLs, Database connections) in the "Environment Variables" section.
6.  **Deploy:** Click "Deploy".

## Manual Deployment (CLI)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts.

## Troubleshooting

- **Routes returning 404 on refresh:**
  - Create a `vercel.json` file in the root directory (or `client` directory if deploying separately) with the following content to handle client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
