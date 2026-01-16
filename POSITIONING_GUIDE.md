# SEW Website - Positioning & Customization Guide

## Industry Font Implementation

Your local Industry font family has been fully integrated into the website. The font is applied to:
- Logo and tagline
- All section titles
- Hero text
- Navigation menu
- Buttons
- Body text (with fallback to Segoe UI)

All font weights from Thin (100) to Ultra (950) are available.

## Manual Positioning Utilities

The website now includes comprehensive utility classes for manual positioning adjustments. You can apply these classes directly in the HTML to fine-tune element positions.

### Position Type Classes

```html
<!-- Position types -->
<div class="pos-relative">Relative positioning</div>
<div class="pos-absolute">Absolute positioning</div>
<div class="pos-fixed">Fixed positioning</div>
<div class="pos-sticky">Sticky positioning</div>
```

### Top/Bottom/Left/Right Positioning

Available values: 0, 5, 10, 20, 30, 50, 100 (in pixels)

```html
<!-- Top positioning -->
<div class="pos-absolute top-0">Top: 0px</div>
<div class="pos-absolute top-20">Top: 20px</div>
<div class="pos-absolute top-100">Top: 100px</div>

<!-- Bottom positioning -->
<div class="pos-absolute bottom-20">Bottom: 20px</div>

<!-- Left positioning -->
<div class="pos-absolute left-30">Left: 30px</div>

<!-- Right positioning -->
<div class="pos-absolute right-50">Right: 50px</div>
```

### Combine Multiple Classes

```html
<!-- Position element 20px from top-left -->
<div class="pos-absolute top-20 left-20">Element</div>

<!-- Position element 30px from bottom-right -->
<div class="pos-fixed bottom-30 right-30">Element</div>
```

### Z-Index Utilities

Available values: 0, 10, 20, 30, 40, 50, 100, 999, 1000

```html
<div class="pos-relative z-10">Z-index: 10</div>
<div class="pos-absolute z-999">Z-index: 999</div>
```

### Margin Utilities

Available for all sides: 0, 5, 10, 20, 30, 50 (in pixels)

```html
<!-- Top margin -->
<div class="mt-20">Margin-top: 20px</div>

<!-- Bottom margin -->
<div class="mb-30">Margin-bottom: 30px</div>

<!-- Left margin -->
<div class="ml-10">Margin-left: 10px</div>

<!-- Right margin -->
<div class="mr-50">Margin-right: 50px</div>

<!-- No margin -->
<div class="m-0">No margin</div>

<!-- Multiple margins -->
<div class="mt-20 mb-30">Top 20px, Bottom 30px</div>
```

### Padding Utilities

Available for all sides: 0, 5, 10, 20, 30, 50 (in pixels)

```html
<!-- Top padding -->
<div class="pt-20">Padding-top: 20px</div>

<!-- Bottom padding -->
<div class="pb-30">Padding-bottom: 30px</div>

<!-- Left padding -->
<div class="pl-10">Padding-left: 10px</div>

<!-- Right padding -->
<div class="pr-50">Padding-right: 50px</div>

<!-- No padding -->
<div class="p-0">No padding</div>
```

## Fixed Side Navigation Buttons

The "Our Services" and "Request Quote" buttons are now **fixed to the left side** of the screen at:
- Previous button: 45% from top
- Next button: 55% from top

### Adjusting Button Position

To adjust the slider button positions, edit `styles.css`:

```css
.slider-btn.prev {
    top: 45%;  /* Change this value */
    left: 30px;  /* Change this for horizontal position */
}

.slider-btn.next {
    top: 55%;  /* Change this value */
    left: 30px;  /* Change this for horizontal position */
}
```

### Moving Buttons to Right Side

To move buttons to the right side:

```css
.slider-btn {
    position: fixed;
    right: 30px;  /* Change from 'left' to 'right' */
    /* ... rest of the styles ... */
}
```

## Modern Glassmorphism Navigation

The navigation bar now features:
- **Floating design** - Centered with rounded corners
- **Glassmorphism effect** - Frosted glass appearance with backdrop blur
- **Pill-shaped menu items** - Modern rounded navigation links
- **Smooth animations** - Cubic-bezier transitions for professional feel
- **Gradient buttons** - Eye-catching yellow gradient on Get Quote button

### Adjusting Navigation Position

The navigation is positioned at `top: 20px` and auto-centers. To adjust:

```css
.header {
    top: 20px;  /* Change vertical position */
    width: 95%;  /* Change width */
}
```

## Common Customization Examples

### Example 1: Adjust Section Spacing

```html
<!-- Add top margin to a section -->
<section class="services mt-50">
    <!-- content -->
</section>
```

### Example 2: Position a Badge

```html
<!-- Position a "New" badge on a card -->
<div class="service-card pos-relative">
    <span class="pos-absolute top-10 right-10 z-50">NEW</span>
    <!-- card content -->
</div>
```

### Example 3: Custom Footer Positioning

```html
<!-- Adjust footer section spacing -->
<div class="footer-section pt-30 pl-20">
    <!-- footer content -->
</div>
```

### Example 4: Sticky Element

```html
<!-- Make a sidebar sticky -->
<aside class="pos-sticky top-100 z-40">
    <!-- sidebar content -->
</aside>
```

## Slider Button Customization

Current configuration places both navigation buttons on the **left side** vertically stacked:

```css
/* Current Settings */
.slider-btn.prev {
    top: 45%;          /* Upper button position */
}

.slider-btn.next {
    top: 55%;          /* Lower button position */
}
```

### Alternative Layouts

**Option 1: Traditional Left/Right Layout**
```css
.slider-btn.prev {
    left: 30px;
    top: 50%;
}

.slider-btn.next {
    right: 30px;  /* Move to right side */
    left: auto;
    top: 50%;
}
```

**Option 2: Bottom Center Layout**
```css
.slider-btn {
    position: absolute;  /* Change from fixed */
    top: auto;
    bottom: 30px;
}

.slider-btn.prev {
    left: 45%;
}

.slider-btn.next {
    left: 52%;
}
```

## Color Customization

All colors are defined in CSS variables:

```css
:root {
    --primary-blue: #1e3a8a;
    --primary-yellow: #fbbf24;
    --dark-grey: #374151;
    --light-grey: #f3f4f6;
    --medium-grey: #9ca3af;
}
```

Change these values to update the entire color scheme.

## Tips for Best Results

1. **Start Small**: Test changes on one element before applying site-wide
2. **Use Browser DevTools**: Inspect elements to see current positioning
3. **Combine Classes**: Mix positioning, margin, and padding for precise control
4. **Check Responsiveness**: Test changes on mobile devices
5. **Maintain Consistency**: Use the same spacing values throughout

## Need More Values?

To add custom positioning values, edit `styles.css` and add new utility classes:

```css
/* Add custom top position */
.top-150 { top: 150px; }

/* Add custom margin */
.mt-80 { margin-top: 80px; }
```

---

For more help, refer to the main README.md file or inspect the existing HTML/CSS code.
