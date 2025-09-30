# Design Guidelines: Blockchain-Verified Vocational Apprenticeship Certificate

## Design Approach: Government Official Document Style
This page requires an **official government certificate aesthetic** with modern digital verification elements. The design should convey authority, trustworthiness, and national pride while maintaining excellent digital usability.

## Core Design Principles
- **Authoritative Presentation**: Traditional certificate layout with contemporary blockchain verification
- **National Identity**: Strong incorporation of Indian government visual language
- **Digital-First Certificate**: Modern web implementation of official documentation
- **Trust & Verification**: Clear blockchain validation indicators

## Color Palette

### Primary Colors (Indian Government Theme)
- **Saffron**: 25 85% 55% (header accents, borders)
- **India Green**: 140 50% 45% (verification badges, success states)
- **Navy Blue**: 220 60% 25% (primary text, official seals)
- **White**: 0 0% 100% (certificate background, clean space)

### Supporting Colors
- **Gold/Ashoka**: 45 75% 50% (government emblems, decorative borders)
- **Light Cream**: 40 30% 97% (subtle backgrounds)
- **Verification Green**: 142 70% 45% (blockchain badge, checkmarks)
- **Text Gray**: 220 15% 30% (secondary information)

## Typography

### Font Families
- **Primary (Official)**: 'Crimson Text', 'Georgia', serif - for certificate headings and official text
- **Secondary (Modern)**: 'Inter', 'Segoe UI', sans-serif - for data fields and UI elements
- **Government Headers**: 'Cinzel', 'Playfair Display', serif - for main certificate title

### Font Hierarchy
- Certificate Title: 2.5rem (40px), bold, Cinzel
- Government Headers: 1.5rem (24px), semibold, Crimson Text
- Section Labels: 0.875rem (14px), uppercase, tracking-wide, Inter
- Data Values: 1.125rem (18px), medium, Inter
- Fine Print: 0.75rem (12px), regular, Inter

## Layout System

### Spacing Units
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Component padding: p-8 to p-12
- Section spacing: py-12 to py-16
- Card margins: m-6 to m-8

### Certificate Layout Structure

**Top Section - Government Authority**
- Three-logo header (GOI emblem center, NCVET left, Skill India right)
- Each logo in circular frame with subtle shadow
- National tricolor border (1px gradient: saffron → white → green)

**Certificate Body**
- Centered card layout (max-w-4xl)
- Ornamental corner decorations (CSS borders, not images)
- Traditional certificate border (double-line, gold and navy)
- White background with subtle cream texture

**Information Grid**
- Two-column layout for apprentice details (lg:grid-cols-2)
- Label-value pairs with clear hierarchy
- Left-aligned labels (uppercase, small, gray)
- Right-aligned or below values (larger, navy blue)

**Blockchain Verification Section**
- Prominent green verification badge with checkmark icon
- "Blockchain Verified" text with shield icon
- QR code positioned bottom-right or dedicated section
- Subtle glow effect on verification badge

**Footer Section**
- Issue date and certificate number
- Digital signature placeholders
- Official seals/stamps imagery area
- "Verify Certificate" button (green, solid)

## Component Library

### Government Logos Section
- Container: flex justify-between with max-w-5xl
- Logo frames: circular, white background, shadow-md
- Logos: 80px-100px diameter on desktop, 60px mobile
- Spacing: evenly distributed with gap-8

### Certificate Card
- Background: white with subtle texture overlay
- Border: 8px double border (outer: gold 45 75% 50%, inner: navy 220 60% 25%)
- Corner decorations: CSS-only ornamental elements
- Shadow: lg shadow for depth
- Padding: p-12 on desktop, p-6 mobile

### Data Display Grid
```
Label styling:
- text-xs uppercase tracking-widest
- text-gray-600 (220 15% 40%)
- font-medium pb-2

Value styling:
- text-lg font-semibold
- text-navy (220 60% 25%)
- border-b border-dotted for emphasis
```

### Blockchain Verification Badge
- Position: Prominent in header or dedicated section
- Design: Shield icon + checkmark within circle
- Colors: Green gradient background (142 70% 45% to 140 50% 45%)
- Text: "Blockchain Verified" in white, bold
- Animation: Subtle pulse on load (optional, 1-time only)
- Glow effect: box-shadow with green tint

### QR Code Section
- Container: Bordered card, white background
- QR Code: 180px × 180px, centered
- Label: "Scan to Verify" below QR
- Border: 2px solid green
- Positioning: Bottom-right of certificate or dedicated section

### Verify Button
- Style: Solid green background (142 70% 45%)
- Text: White, font-semibold, uppercase tracking
- Size: px-8 py-3
- Icon: External link or shield icon
- Hover: Darken background slightly

## Print Optimization
- Hide: Navigation, buttons, QR code (optional)
- Show: Full certificate details, verification badge
- Page break: avoid breaking certificate content
- Background: Force print backgrounds for borders
- Size: A4 portrait orientation optimized

## Responsive Breakpoints
- **Mobile (< 768px)**: Single column, stacked logos, reduced padding
- **Tablet (768px-1024px)**: Two-column data grid, balanced layout
- **Desktop (> 1024px)**: Full certificate layout, optimal spacing

## Images

### Government Logos (3 Required)
1. **Government of India Emblem**: National emblem (Ashoka Pillar), circular frame, gold/navy colors
2. **NCVET Logo**: Official NCVET branding, professional presentation
3. **Skill India Logo**: Skill India mission logo, vibrant colors

**Placement**: Horizontal row at page top, centered alignment, equal sizing

### Optional Decorative Elements
- Subtle watermark: "Verified" or government emblem as background
- Corner ornaments: Traditional Indian design patterns (CSS-created)
- Texture overlay: Very subtle cream/beige paper texture on certificate background

**Note**: This is NOT a hero-image based design. It's a document-centric layout with logos and verification elements.

## Accessibility & States
- High contrast text (navy on white, white on green)
- Clear focus indicators for interactive elements
- Print-friendly high contrast mode
- Screen reader labels for verification badges
- Alt text for all logos and icons