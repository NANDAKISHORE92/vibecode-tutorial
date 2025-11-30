# Nanda Kishore - Personal Portfolio

A clean, minimal personal portfolio website built with Astro and TailwindCSS, designed for deployment on Cloudflare Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📁 Project Structure

```
/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── NewsletterSignup.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # Route pages
│       ├── index.astro
│       ├── about.astro
│       └── projects.astro
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # TailwindCSS configuration
└── package.json
```

## 🎨 Design System

- **Background**: White
- **Text**: Black
- **Accent Color**: Violent Red (#FF0033)
- **Body Font**: Switzer
- **Heading Font**: Khand

## 🌐 Deployment to Cloudflare Pages

### Method 1: Via Cloudflare Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to Cloudflare Dashboard**
   - Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select "Pages" from the sidebar
   - Click "Create a project"

3. **Connect your repository**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Cloudflare to access your repositories
   - Select the repository containing this project

4. **Configure build settings**
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default if project is at repo root)

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - Your site will be available at `your-project.pages.dev`

### Method 2: Via Wrangler CLI

1. **Install Wrangler** (if not already installed):
```bash
npm install -g wrangler
```

2. **Login to Cloudflare**:
```bash
wrangler login
```

3. **Deploy**:
```bash
npm run build
wrangler pages deploy dist
```

### Custom Domain Setup

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## 📝 Notes

- All content is currently placeholder text and will be replaced with real content later
- The newsletter signup form is a placeholder and needs to be integrated with your actual newsletter service
- Images can be added to the `public/` directory and referenced in components

## 🛠️ Tech Stack

- **Astro** - Static site generator
- **TailwindCSS** - Utility-first CSS framework
- **Cloudflare Pages** - Hosting platform

