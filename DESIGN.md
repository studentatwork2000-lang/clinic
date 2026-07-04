---
name: Stature & Stone
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4e5f7b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#081c34'
  on-primary-container: '#7385a2'
  inverse-primary: '#b5c7e7'
  secondary: '#7d5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc55f'
  on-secondary-container: '#755100'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001c38'
  on-tertiary-container: '#6b85aa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b5c7e7'
  on-primary-fixed: '#081c34'
  on-primary-fixed-variant: '#364862'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#f5bd58'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#aec8f0'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#2d486a'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built on a foundation of **Modern Corporate Elegance**. It is designed to signal high-value opportunity, institutional reliability, and architectural precision. The target audience is Tier 1 and Tier 2 construction contractors who expect professionalism and clarity.

The visual language eschews the dense information layout of typical tender flyers in favor of a **Minimalist / Architectural** approach. It utilizes expansive whitespace (breathability), high-contrast typography, and a "quality over quantity" aesthetic. The goal is to evoke a sense of heritage through the navy and gold palette, modernized by contemporary UI patterns like ultra-soft depth and generous tracking.

Every interaction should feel intentional and solid, reflecting the £2.9M scale of the project.

## Colors

The palette is anchored by **Deep Navy (#071B33)**, providing a sense of gravity and authority. **Ivory (#F8F7F3)** serves as the primary canvas color, offering a warmer, more premium feel than pure white. 

**Soft Gold (#D9A441)** is reserved strictly for high-priority accents: calls to action, primary icons, and critical value markers (like the tender amount). **Slate Text (#334155)** is used for body copy to maintain high readability without the harshness of pure black, ensuring the interface feels sophisticated and easy on the eyes.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Montserrat** is utilized for headlines to convey confidence and a geometric, modern architectural feel. **Inter** is used for all functional and body text to ensure maximum legibility and a neutral, professional tone.

Generous **tracking (letter-spacing)** should be applied to all-caps labels to enhance the high-end feel. For headings, tracking is slightly tightened to create a cohesive "block" of information. Body text maintains a wide line-height (1.6) to prevent fatigue during the reading of technical specifications.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a controlled, editorial feel. A 12-column grid is used with large 32px gutters to allow the content "room to breathe." 

**Key Layout Rules:**
- **Vertical Rhythm:** Sections are separated by a minimum of 120px on desktop to ensure clear mental separation between different parts of the tender.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to a single column with 20px side margins. 
- **The "Safe Zone":** Content-heavy cards should use internal padding of at least 40px (stack-lg + 8px) to maintain the premium, spacious aesthetic.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Soft Shadows**.

1.  **Base Layer:** Ivory (#F8F7F3) background.
2.  **Surface Layer:** Pure White (#FFFFFF) cards.
3.  **Shadows:** Shadows are highly diffused and low-opacity. Use a large blur radius (e.g., 40px) with a very faint navy-tinted shadow (3-5% opacity) to create a subtle "lift" rather than a harsh drop-shadow.
4.  **Interactive Depth:** On hover, cards should subtly lift further (shadow becomes 8% opacity) to provide tactile feedback without breaking the corporate sobriety.

## Shapes

The design system uses a **Rounded** shape language to soften the industrial nature of construction. 

- **Primary Cards:** Use the `rounded-xl` (1.5rem / 24px) setting to create the requested "2xl" feel. 
- **Buttons and Inputs:** Use `rounded-lg` (1rem / 16px) for a modern, approachable look.
- **Icons:** Icons should be enclosed in circular or soft-rounded containers to prevent them from feeling too sharp or aggressive.

## Components

### Buttons
- **Primary:** Solid Deep Navy background with White text. Bold Montserrat font.
- **Accent/CTA:** Solid Soft Gold background with Deep Navy text. Reserved for "Express Interest" or "Submit Tender."
- **Secondary:** Transparent background with a 1px Slate border.

### Cards
- White background, 24px corner radius, and ultra-soft navy-tinted shadow.
- Header cards for "Project Description" or "Scope" should include a 4px Soft Gold top border for visual continuity.

### Input Fields
- White background with a subtle Ivory border. 
- On focus, the border transitions to Soft Gold with a 2px outer glow (shadow).

### Progress & Status Chips
- Used for "Tender Status" or "Deadlines."
- Small, uppercase Inter font with wide tracking. 
- Backgrounds are low-opacity versions of the Navy or Gold palettes.

### Data Grid / Lists
- Use horizontal dividers in Slate (10% opacity) rather than vertical borders. 
- Each line item should have generous vertical padding (24px) to avoid clutter.