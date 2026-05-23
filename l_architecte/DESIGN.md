---
name: L'Architecte
colors:
  surface: '#f9f9fd'
  surface-dim: '#dadade'
  surface-bright: '#f9f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f7'
  surface-container: '#eeedf2'
  surface-container-high: '#e8e8ec'
  surface-container-highest: '#e2e2e6'
  on-surface: '#1a1c1f'
  on-surface-variant: '#534340'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f0f0f5'
  outline: '#86736f'
  outline-variant: '#d9c1bd'
  surface-tint: '#8f4b3e'
  primary: '#5d241a'
  on-primary: '#ffffff'
  primary-container: '#7a3a2e'
  on-primary-container: '#ffa797'
  inverse-primary: '#ffb4a6'
  secondary: '#466557'
  on-secondary: '#ffffff'
  secondary-container: '#c5e7d6'
  on-secondary-container: '#4a695b'
  tertiary: '#5b2712'
  on-tertiary: '#ffffff'
  tertiary-container: '#773d27'
  on-tertiary-container: '#fbaa8d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a6'
  on-primary-fixed: '#3a0a04'
  on-primary-fixed-variant: '#723429'
  secondary-fixed: '#c8ead8'
  secondary-fixed-dim: '#adcebd'
  on-secondary-fixed: '#012116'
  on-secondary-fixed-variant: '#2f4d40'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#6f3721'
  background: '#f9f9fd'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e6'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
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
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  max-width: 1440px
---

## Brand & Style

The visual identity of the design system is rooted in the concept of "Quiet Luxury"—an aesthetic that prioritizes architectural stillness, material integrity, and museum-like restraint. It is designed for an audience that values cultural depth, heritage, and the permanence of physical materials like stone, clay, and glass. 

The design style is a blend of **Minimalism** and **High-End Editorial**. It utilizes vast amounts of whitespace (negative space) to allow content to breathe, similar to an art gallery. There is an intentional avoidance of digital-first trends like rounded bubbles or playful animations; instead, the UI feels structured, authoritative, and timeless. Every element serves a functional purpose while maintaining a sensory connection to architectural materials.

## Colors

The palette is a sophisticated interplay of masonry tones and heritage accents. 

- **Foundational Neutrals:** Soft Ivory serves as the primary canvas, providing a warm, parchment-like background that is softer on the eyes than pure white. Charcoal Black is used for primary text and structural definition.
- **Architectural Accents:** Deep Brick Red and Warm Terracotta provide earthy warmth, used for high-importance actions and primary brand touchpoints.
- **Material Signature:** Hijau Nyonya Green is reserved for botanical elegance and heritage-driven feature elements, acting as a "living" counterpoint to the mineral tones. Clay Roster Brown (Tanah Liat) is the structural workhorse, used for borders, dividers, and patterns inspired by architectural breeze blocks.
- **Refinement:** Muted Gold is used sparingly for micro-details, signifying quality and artisanal craft. Smoke Grey provides subtle transitions and utility states.

## Typography

The typography system relies on the high-contrast elegance of **Bodoni Moda** to evoke the feeling of a classic architectural monograph or a premium editorial. This serif font is used exclusively for headlines and display text, where its vertical stress and fine serifs can be appreciated.

**Inter** provides a utilitarian, modernist balance for all body copy and functional labels. It ensures legibility across dense information environments. To maintain the "Quiet Luxury" feel, use generous line heights (1.6x) for body text and increased letter spacing (kerning) for uppercase labels to create a sense of breathability and precision.

## Elevation & Depth

In a "Quiet Luxury" system, depth is achieved through **Material Layering** rather than traditional drop shadows.

- **Tonal Stacking:** Use the color palette to define height. For example, a Soft Ivory surface may sit atop a Smoke Grey background.
- **Glassmorphism:** Use high-clarity background blurs (frosted glass) for navigation overlays, suggesting transparency and light.
- **Low-Contrast Outlines:** Instead of shadows, use 1px borders in Clay Roster Brown or Muted Gold to define the boundaries of interactive containers. 
- **The "Silence" Effect:** Depth is also communicated through the absence of elements. Large, empty Ivory containers create a sense of "physical" space that feels more premium than a cluttered, shadowed UI.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Architectural integrity is best represented by clean lines and 90-degree angles. This applies to buttons, input fields, images, and cards. The only exception is for circular elements used specifically for "Material Signatures" or heritage icons, which should be perfectly round. Avoiding rounded corners removes the "software" feel and replaces it with a "constructed" feel.

## Components

- **Buttons:** Primary buttons are solid Charcoal Black or Deep Brick Red with Sharp corners. Labels are Inter, Uppercase, with 0.1em tracking. Ghost buttons use a 1px Clay Roster Brown border.
- **Input Fields:** Minimalist design consisting of a single 1px baseline in Clay Roster Brown. Labels sit above in Label-SM style. No background fill unless in a "Search" context.
- **Cards:** Cards should not have shadows. They are defined by a Soft Ivory fill against a Smoke Grey background, or a 1px Clay Roster Brown stroke. Use "Stair" patterns for card groups, where each successive card is slightly offset.
- **Chips/Tags:** Use the Hijau Nyonya Green as a subtle background for heritage or botanical tags, with Soft Ivory text. 
- **Lists:** Editorial-style lists with generous padding (24px) and thin Clay Roster dividers. Use Bodoni Moda for list item titles to elevate the hierarchy.
- **Architectural Patterns:** Utilize a "Clay Breeze Block" pattern (grid of squares/circles) as a background motif for headers or specific section transitions, rendered in low-opacity Clay Roster Brown.