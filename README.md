# Yashika Chaudhary - Personal Website

A Docusaurus 3.9 site for Yashika Chaudhary, Senior Product Engineer at Sprinklr, configured for GitHub Pages deployment.

## Getting Started

### Prerequisites

- Node.js version 20.0 or above
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Build

To build the site for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run serve
```

## GitHub Pages Deployment

### Configuration

The site is already configured for GitHub Pages deployment with:
- **URL**: `https://cyashu99.github.io`
- **Base URL**: `/`
- **Organization**: `cyashu99`
- **Project Name**: `cyashu99.github.io`

### Deployment Steps

1. Push your code to GitHub:
```bash
git add .
git commit -m "Update site"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

3. Your site will be available at:
   `https://cyashu99.github.io/`

## Project Structure

```
.
├── blog/                 # Blog posts
├── docs/                 # Documentation files
├── src/
│   ├── components/       # React components
│   ├── css/              # Custom CSS
│   └── pages/            # Custom pages
├── static/               # Static assets (images, etc.)
├── docusaurus.config.js  # Docusaurus configuration
└── package.json          # Dependencies and scripts
```

## Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
