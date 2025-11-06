# Deployment Instructions

## Deploying to Vercel

This application is configured to deploy to Vercel with a configurable iframe URL.

### Prerequisites
- Install Vercel CLI: `npm i -g vercel`
- Sign in: `vercel login`

### Deployment Steps

1. **Deploy to Vercel:**
   ```bash
   vercel
   ```

2. **Set the iframe URL as an environment variable:**
   ```bash
   vercel env add IFRAME_URL
   ```

   When prompted, enter your desired iframe URL (e.g., `https://example.com/page`)

   Select the environment(s): Production, Preview, Development

3. **Redeploy to apply the environment variable:**
   ```bash
   vercel --prod
   ```

### Alternative: Deploy via Vercel Dashboard

1. Import your GitHub repository in the Vercel dashboard
2. In Project Settings → Environment Variables, add:
   - **Key:** `IFRAME_URL`
   - **Value:** Your iframe URL
   - **Environments:** Production, Preview, Development
3. Redeploy the project

### Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set your `IFRAME_URL`

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

### Environment Variables

- `IFRAME_URL` - The URL to be embedded in the iframe on the home page (required)
- `PORT` - Server port (default: 3000, automatically set by Vercel)

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.env.example` - Environment variables template
- `.vercelignore` - Files to exclude from deployment
