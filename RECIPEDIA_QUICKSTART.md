# 🚀 Recipedia Hero - Quick Start Guide

## View the Demo

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   ```
   http://localhost:5173/recipedia
   ```

3. **Test responsive design:**
   - Resize your browser window
   - Open Chrome DevTools (F12)
   - Click the device toolbar icon (Ctrl+Shift+M)
   - Test different device sizes

---

## File Locations

### Components
```
src/components/recipedia/
├── RecipediaHero.jsx          # Main hero section
├── RecipediaHeader.jsx        # Navigation header
├── HeroTextContent.jsx        # Left column (text)
├── HeroVisual.jsx             # Right column (image + cards)
├── Button.jsx                 # Reusable button
├── TestimonialCard.jsx        # Review cards
├── DecorationIcon.jsx         # Floating icons
└── RecipediaHero.css          # Styles & animations
```

### Demo Page
```
src/pages/RecipediaDemo.jsx    # Demo page at /recipedia
```

### Configuration
```
tailwind.config.js             # Recipedia colors added
```

---

## Using Components in Your Project

### Import the Hero Section
```jsx
import { RecipediaHero } from './components/recipedia'

function MyPage() {
  return <RecipediaHero />
}
```

### Use Individual Components
```jsx
import { Button, TestimonialCard } from './components/recipedia'

// Button
<Button variant="primary" size="medium">
  Explore Recipes
</Button>

// Testimonial Card
<TestimonialCard
  text="Amazing recipes!"
  userName="Jane Doe"
  userAvatar="/avatar.jpg"
  rating={5}
/>
```

---

## Customization

### Change Colors
Edit `tailwind.config.js`:
```js
'recipedia-orange': '#F59E0B',    // Primary color
'recipedia-dark': '#1F2937',      // Text color
'recipedia-gray': '#6B7280',      // Muted text
```

### Replace Images
In `HeroVisual.jsx`, update the image source:
```jsx
<img 
  src="YOUR_IMAGE_URL"
  alt="Delicious healthy food"
/>
```

### Update Text Content
Edit `HeroTextContent.jsx`:
```jsx
<h1>Your Custom Heading</h1>
<p>Your custom description...</p>
```

---

## Responsive Breakpoints

- **Mobile:** ≤ 768px (single column)
- **Tablet:** 769px – 1024px (two columns)
- **Desktop:** ≥ 1025px (full layout)

---

## Component Props

### Button
```jsx
<Button
  variant="primary"      // 'primary' | 'secondary' | 'ghost'
  size="medium"          // 'small' | 'medium' | 'large'
  onClick={handleClick}
  className="custom-class"
>
  Button Text
</Button>
```

### TestimonialCard
```jsx
<TestimonialCard
  text="Review text here"
  userName="John Doe"
  userAvatar="/path/to/avatar.jpg"
  rating={5}             // 0-5
  className="custom-class"
/>
```

### DecorationIcon
```jsx
<DecorationIcon
  icon="🍅"
  position="top-0 left-0"    // Tailwind classes
  size="medium"              // 'small' | 'medium' | 'large'
  animate={true}
  className="custom-class"
/>
```

---

## Color Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `recipedia-orange` | #F59E0B | Primary CTA, highlights |
| `recipedia-orange-hover` | #D97706 | Button hover state |
| `recipedia-dark` | #1F2937 | Headings, primary text |
| `recipedia-gray` | #6B7280 | Body text, descriptions |
| `recipedia-light-gray` | #F9FAFB | Background sections |
| `recipedia-star` | #FBBF24 | Star ratings |

---

## Troubleshooting

### Issue: Components not rendering
**Solution:** Make sure you've imported from the correct path:
```jsx
import { RecipediaHero } from './components/recipedia'
```

### Issue: Styles not applying
**Solution:** Ensure Tailwind CSS is properly configured and the dev server is running.

### Issue: Images not loading
**Solution:** Check image paths and ensure they're accessible. Update URLs in `HeroVisual.jsx`.

### Issue: Layout breaking on mobile
**Solution:** Test with Chrome DevTools. The layout should stack vertically on screens ≤ 768px.

---

## Next Steps

1. ✅ Replace placeholder images with your own
2. ✅ Update navigation links with actual routes
3. ✅ Customize colors to match your brand
4. ✅ Add your own testimonials
5. ✅ Integrate with your backend API
6. ✅ Run Lighthouse audit for performance
7. ✅ Test on real devices

---

## Resources

- 📖 Full Documentation: `RECIPEDIA_IMPLEMENTATION.md`
- 🎨 Tailwind CSS: https://tailwindcss.com/docs
- ⚛️ React Docs: https://react.dev
- 🔧 Vite: https://vitejs.dev

---

## Need Help?

- Check `RECIPEDIA_IMPLEMENTATION.md` for detailed documentation
- Review component PropTypes for usage examples
- Test components in isolation at `/recipedia` route
- Check browser console for error messages

---

**Happy coding! 🎉**
