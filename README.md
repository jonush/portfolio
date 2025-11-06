# Portfolio Site

A clean, minimalist portfolio site built with Next.js and Tailwind CSS, following typography-focused design principles.

## Features

- 🎨 Minimalist dark-themed design with bracketed navigation
- ⚡ Built with Next.js 14 App Router
- 🎯 Tailwind CSS for styling
- 📱 Fully responsive
- 🔤 Departure Mono (navigation/footer) and Inter (body) fonts
- ✨ Animated PixelBlast WebGL background
- ♿ Semantic HTML and accessibility best practices
- 🚀 Ready for Vercel deployment

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx              # Root layout with PixelBlast background
│   ├── page.tsx                # Homepage with About and Work sections
│   ├── globals.css             # Global styles and Tailwind
│   └── work/
│       ├── page.tsx            # Work projects index
│       ├── data-access-portal/
│       │   └── page.tsx        # Cyral Data Access Portal project
│       └── design-system/
│           └── page.tsx        # Cyral Design Style Guide project
├── components/
│   ├── Navigation.tsx          # Bracketed navigation header
│   ├── Footer.tsx              # Social links footer
│   └── PixelBlast.tsx          # WebGL animated background component
├── public/
│   └── fonts/
│       ├── DepartureMono-Regular.woff
│       └── DepartureMono-Regular.woff2
└── tailwind.config.js          # Tailwind configuration with custom fonts
```

## Customization

### Update Content
- Edit the text content in each page file (`app/page.tsx`, `app/work/page.tsx`, etc.)
- Update your personal information in `app/layout.tsx` metadata
- Add or modify project pages in `app/work/`
- Update social links in `components/Footer.tsx`

### Styling
- Colors and typography are configured in `tailwind.config.js`
- Global styles and custom fonts are in `app/globals.css`
- The design uses a dark theme (gray-900) with subtle borders (gray-700)
- PixelBlast background parameters can be adjusted in `app/layout.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default Next.js settings

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Design Principles

This portfolio follows minimalist, dark-themed design principles:
- Dark theme with subtle gray borders
- Bracketed navigation style for clean visual hierarchy
- Animated PixelBlast WebGL background with semi-transparent content overlay
- Departure Mono monospace font for navigation/footer, Inter for body content
- Boxed/containerized content with hard edges and outlined sections
- Semantic HTML for better SEO and accessibility

## License

MIT
