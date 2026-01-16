# SEW Website - New Layout Structure

## Page Layout Overview

The homepage has been restructured into two distinct sections for better visual organization:

### 1. **Hero Intro Section** (Top Section)
- **Background**: Light gradient (white/grey)
- **Contains**:
  - Company name: "SIVASANKAR ELECTRICAL WORKS"
  - Subtitle: "Premium Cold Storage & AC Solutions Across Tamil Nadu"
  - Two action buttons: "Our Services" and "Request Quote"
- **Purpose**: Clean introduction with clear call-to-action
- **Styling**: Minimal, professional, easy to read

### 2. **Hero Slider Section** (Below Title)
- **Background**: Full-width image slider
- **Contains**:
  - 5 rotating slides with images/gradients
  - Each slide has its own title and description
  - Navigation arrows (fixed left side)
  - Slide indicators (bottom center)
- **Purpose**: Showcase projects, services, and capabilities visually

## Visual Flow

```
┌─────────────────────────────────────────────┐
│         Navigation Bar (Floating)           │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│      SIVASANKAR ELECTRICAL WORKS           │
│   Premium Cold Storage & AC Solutions...   │
│                                             │
│   [Our Services]  [Request Quote]          │
│                                             │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  ←                                          │
│                                             │
│     Complete Panel Solutions                │
│  End-to-end cold room development...       │
│                                             │
│  →                                          │
│           ○ ○ ● ○ ○                        │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│           About SEW Section                 │
│                                             │
└─────────────────────────────────────────────┘
```

## Section Dimensions

### Desktop
- **Hero Intro**: ~200-250px height (auto-sized based on content)
- **Hero Slider**: 650px height (full-width images)

### Mobile/Tablet (max-width: 768px)
- **Hero Intro**: ~180-200px height
- **Hero Slider**: 450px height

### Small Mobile (max-width: 480px)
- **Hero Intro**: ~160px height
- **Hero Slider**: 350px height

## Color Scheme

### Hero Intro Section
- **Background**: Linear gradient from `#f9fafb` to `#ffffff`
- **Title Color**: Dark grey (`var(--text-dark)`)
- **Subtitle Color**: Yellow (`var(--primary-yellow)`)
- **Bottom Border**: Subtle yellow gradient line

### Hero Slider Section
- **Slide 1**: Your custom image (`images/End-end-Developement.jpg`)
- **Slides 2-5**: Blue/grey gradient backgrounds (replace with your images)
- **Text**: White with shadow for readability
- **Buttons**: Yellow circles (left side, fixed position)

## Navigation Elements

### Fixed Left-Side Buttons
- **Position**: `left: 30px` from screen edge
- **Previous**: `top: 45%`
- **Next**: `top: 55%`
- **Style**: Yellow circular buttons with blue icons
- **Behavior**: Stays fixed during scroll

### Slide Indicators
- **Position**: Bottom center of slider
- **Style**: Small circles, active indicator expands to pill shape
- **Color**: White (inactive), Yellow (active)

## Customization Tips

### Adjusting Hero Intro Height
To add more/less spacing in the title section:

```css
.hero-intro {
    padding: 4rem 0 3rem;  /* Change these values */
}
```

### Adjusting Slider Height
To change the slider section height:

```css
.hero-slider {
    height: 650px;  /* Change this value */
}
```

### Moving Navigation Buttons
To move buttons to the right side:

```css
.slider-btn {
    left: auto;
    right: 30px;  /* Move to right */
}
```

### Changing Title Colors
```css
.hero-title {
    color: var(--primary-blue);  /* Change to blue */
}

.hero-subtitle {
    color: var(--text-dark);  /* Change to grey */
}
```

## Adding Your Images

Replace the gradient backgrounds with your images:

```css
/* In styles.css, update these lines: */

.slide:nth-child(1) {
    background: url('images/image1.jpg') center/cover no-repeat;
}

.slide:nth-child(2) {
    background: url('images/image2.jpg') center/cover no-repeat;
}

.slide:nth-child(3) {
    background: url('images/image3.jpg') center/cover no-repeat;
}

.slide:nth-child(4) {
    background: url('images/image4.jpg') center/cover no-repeat;
}

.slide:nth-child(5) {
    background: url('images/image5.jpg') center/cover no-repeat;
}
```

## Slide Content Positioning

Each slide can have:
- **Title**: Large heading text
- **Description**: Subtitle text
- **Both are centered** by default

To align text to left or right:

```css
.slide-content {
    text-align: left;  /* or right */
    margin-left: 100px;  /* Add offset */
}
```

## Key Features

✅ **Separated Concerns**: Title/CTA section separate from visual showcase
✅ **Better Mobile UX**: Easier to read and navigate on small screens
✅ **Clear Hierarchy**: User sees company info first, then visuals
✅ **Professional Layout**: Matches modern web design trends 2025
✅ **Easy Customization**: Independent sections can be styled separately

## Recommended Image Sizes

For optimal display in the slider:
- **Width**: 1920px
- **Height**: 650px (desktop) to 350px (mobile responsive)
- **Aspect Ratio**: ~2.5:1 to 3:1 (wide panoramic)
- **Format**: JPG or WebP
- **File Size**: Under 500KB each

---

For more customization options, see `POSITIONING_GUIDE.md`
