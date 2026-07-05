---
name: Premium Industrial Exchange
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
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
  stack-unit: 8px
---

## Brand & Style

This design system is engineered to evoke architectural precision and institutional trust for the UK construction tender market. The aesthetic moves away from the utilitarian grit of traditional construction software, favoring a **Corporate / Modern** style that leans into high-end professional services. 

The visual narrative is built on the concept of "The Blueprint and the Foundation"—clean lines, structured layouts, and substantial depth. It targets high-value stakeholders where reliability is the primary currency. By combining a deep, authoritative navy palette with refined gold accents and generous whitespace, the interface communicates exclusivity and meticulous attention to detail.

## Colors

The palette is anchored in **Deep Navy (#071B33)** to establish immediate authority and permanence. **Soft Gold (#D9A441)** is used as a strategic "High-Value" accent, reserved for primary calls to action, active states, and critical tender status indicators.

- **Backgrounds:** Use **Ivory (#F8F7F3)** for main canvas areas to reduce eye strain and provide a more premium feel than clinical white.
- **Surface:** Use pure White for cards and containers to create a subtle layered effect against the Ivory background.
- **Typography:** **Slate Text (#334155)** provides optimal readability for body copy without the harshness of pure black, maintaining the sophisticated tone.

## Typography

The system utilizes **Hanken Grotesk** for headlines to provide a sharp, contemporary edge that feels modern yet established. **Inter** is utilized for all body and functional text to ensure maximum clarity in data-dense tender documents and specifications.

- **Scale:** Large display titles use tight letter-spacing to emphasize the "boldness" of construction projects.
- **Labels:** Small labels use uppercase with increased tracking to denote metadata and categories (e.g., "CONTRACT VALUE", "LOCATION").
- **Hierarchy:** Maintain a clear contrast between Hanken Grotesk (Brand/Header) and Inter (Utility/Content) to guide the user through complex information hierarchies.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a prestigious "editorial" look, centering content within a 1280px container. 

- **Grid:** A 12-column grid is standard, with 24px gutters.
- **Rhythm:** All spacing (padding, margins, gap) must be multiples of the 8px **stack-unit**. 
- **Density:** High-value pages (Tender Overviews) should utilize generous "breathing room" with internal card padding of 32px or 40px. 
- **Mobile:** On mobile devices, margins shrink to 20px, and the grid collapses to a single column while maintaining the 8px vertical rhythm.

## Elevation & Depth

To convey a sense of "physicality" and quality, the design system uses **Ambient Shadows** and **Tonal Layers**.

- **Surfaces:** Main content sits on white cards. These cards feature a very soft, multi-layered shadow (e.g., `0px 4px 20px rgba(7, 27, 51, 0.05)`) to lift them slightly off the Ivory background.
- **Z-Index Hierarchy:** 
  - Level 0: Ivory Background.
  - Level 1: White Cards (Base content).
  - Level 2: Modals and Dropdowns (Requires a more defined shadow with 10-15% opacity Deep Navy).
- **Interactive Depth:** On hover, cards should lift slightly (translate -2px) and the shadow should expand and soften further to provide tactile feedback.

## Shapes

The shape language balance geometric structure with approachable friendliness.

- **Standard Elements:** A `0.5rem` (8px) radius is the baseline for buttons and inputs.
- **Containers:** Large cards and project images use `1rem` (16px) or even `1.5rem` (24px) to create the "spacious, high-value" look requested.
- **Icons:** Use icons with a consistent 2px stroke weight and slightly rounded terminals to match the typography's character.

## Components

### Buttons
- **Primary:** Deep Navy background, White text. High-contrast, no border.
- **Secondary:** Ivory/White background with a 1px border of Muted Gold.
- **Tertiary:** Pure Soft Gold background with Deep Navy text (reserved for "Apply" or "Submit Bid" actions).

### Cards
- Large border radius (16px+).
- Integrated soft shadow.
- Header sections within cards should use a subtle horizontal divider in a faint slate tint.

### Input Fields
- Understated borders (1px Slate at 20% opacity).
- On focus, the border transitions to Soft Gold with a subtle outer glow.
- Large padding (12px 16px) to maintain the spacious feel.

### Chips & Badges
- Used for tender status (e.g., "Open", "Reviewing", "Awarded").
- Pill-shaped with low-opacity background tints of the status color (e.g., light gold for "Featured").

### Lists
- Multi-row list items for tender details should have generous vertical padding (24px).
- Use Soft Gold icons or bullet points to draw the eye to key deliverables.