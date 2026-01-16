# SEW - Sivasankar Electrical Works Website

A modern, professional website for Sivasankar Electrical Works, specializing in AC Sales, Service, and Cold Storage Solutions across Tamil Nadu.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with yellow, blue, and grey color scheme
- **Image Slider**: Auto-playing hero slider with 5 customizable slides
- **Service Showcase**: Detailed presentation of all services offered
- **Project Portfolio**: Display of completed projects and ongoing partnerships
- **Contact Form**: Easy-to-use contact form with email integration
- **Quotation Request**: Dedicated form for quotation requests
- **Smooth Animations**: Scroll-based animations and smooth transitions
- **SEO Friendly**: Optimized meta tags and semantic HTML structure

## Project Structure

```
SEW/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

2. **Customize Your Images**:
   The slider is set up with 5 placeholder slides. To add your own images:

   Open `styles.css` and find the slide background styles (around line 250):

   ```css
   .slide:nth-child(1) {
       background: url('path-to-your-image-1.jpg') center/cover;
   }
   .slide:nth-child(2) {
       background: url('path-to-your-image-2.jpg') center/cover;
   }
   /* And so on for slides 3, 4, 5 */
   ```

   Replace the gradient backgrounds with your images:
   - Create an `images` folder in your project directory
   - Place your 5-8 images in that folder
   - Update the CSS with the correct paths

3. **Update Contact Information**:
   In `index.html`, update the following:
   - Phone numbers (search for `+91 XXXXX XXXXX`)
   - Email addresses (update `info@sewelectrical.com` and `sales@sewelectrical.com`)
   - Physical address if needed
   - Working hours

## Customization Guide

### Adding More Slides

To add more than 5 slides:

1. In `index.html`, add new slide divs in the slider section:
```html
<div class="slide">
    <div class="slide-content">
        <h2 class="slide-title">Your Title</h2>
        <p class="slide-description">Your description</p>
    </div>
</div>
```

2. In `styles.css`, add corresponding background styles:
```css
.slide:nth-child(6) {
    background: url('your-image-6.jpg') center/cover;
}
```

### Changing Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-blue: #1e3a8a;      /* Main blue color */
    --primary-yellow: #fbbf24;    /* Main yellow color */
    --dark-grey: #374151;         /* Dark grey */
    --light-grey: #f3f4f6;        /* Light grey */
}
```

Simply change these values to update the entire color scheme.

### Email Integration

The contact and quotation forms use `mailto:` links. When a user submits a form:
- Their email client will open with pre-filled information
- They can then send the email

**For Production**: Consider integrating with:
- [EmailJS](https://www.emailjs.com/) - Free email service
- [Formspree](https://formspree.io/) - Form backend service
- Your own backend server with PHP/Node.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**:
   - Use JPG for photos
   - Compress images (use tools like TinyPNG)
   - Recommended size: 1920x1080px for slider images
   - Keep file sizes under 500KB each

2. **Lazy Loading**:
   - For production, add lazy loading to images
   - Use WebP format for better compression

3. **CDN**:
   - The website uses Font Awesome from CDN
   - For production, consider hosting fonts locally

## Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your project folder
3. Get instant HTTPS URL

### Traditional Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory

## Future Enhancements

Consider adding:
- Image gallery for completed projects
- Customer testimonials section
- Live chat integration
- Blog section for industry updates
- Multi-language support (Tamil/English)
- Online quotation calculator
- Before/After project images
- Video testimonials

## Support

For issues or questions about this website:
- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Verify image paths are correct
- Test forms with your email client

## Credits

- Built with HTML5, CSS3, and JavaScript
- Icons: Font Awesome 6.4.0
- Design: Custom responsive design
- Color Scheme: Yellow (#fbbf24), Blue (#1e3a8a), Grey (#374151)

## License

This website is created for Sivasankar Electrical Works. All rights reserved.

---

**Sivasankar Electrical Works (SEW)**
Cold Storage & AC Solutions Across Tamil Nadu
Serving excellence since inception
