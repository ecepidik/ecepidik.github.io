# Ece Pidik - Portfolio Website

A professional portfolio website built with React and Tailwind CSS, deployed on GitHub Pages.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Sleek and professional styling with Tailwind CSS
- 📸 Photo placeholder ready for your image
- 📧 Contact form with email integration
- ⚡ Fast performance with Vite
- 🚀 GitHub Pages deployment ready

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool
- **Lucide React** - Icon library

## Sections

1. **Hero Section** - Introduction with photo placeholder and quick links
2. **Skills** - Organized skill categories with badges
3. **Experience** - Detailed work history and achievements
4. **Contact** - Email form and contact information
5. **Footer** - Copyright and technology info

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Your Photo

1. Place your photo in the `src/assets` folder
2. Update the `Hero.jsx` component to import and use your image:

```jsx
import profilePhoto from '../assets/your-photo.jpg'

// In the Hero component:
<img src={profilePhoto} alt="Ece Pidik" className="w-full h-full object-cover" />
```

## Deployment to GitHub Pages

### Initial Setup

1. Push your code to a GitHub repository named `ecepidik.github.io`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Update `package.json` with:
   ```json
   "homepage": "https://ecepidik.github.io",
   "deploy": "npm run build && gh-pages -d dist"
   ```

### Deploy

```bash
npm run deploy
```

Your portfolio will be live at `https://ecepidik.github.io`

## Customization

- **Colors**: Modify the `tailwind.config.js` file to change the color scheme
- **Content**: Update component files in `src/components/` with your information
- **Fonts**: Update CSS in `src/index.css`
- **Layout**: Modify components to suit your preferences

## License

Personal portfolio - All rights reserved

## Contact

- Email: pidik.ece@gmail.com
- Phone: +1 (514) 515-4544
- LinkedIn: linkedin.com/in/ecepidik
- GitHub: github.com/ecepidik
