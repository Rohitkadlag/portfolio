# Peeps Image Asset

## Required Images

### Current Setup: Standing Full-Body Characters

You need to add the `standing-peeps.png` sprite sheet to this directory for the CrowdCanvas animation to work.

### Where to get it:

1. **Figma File** - Export from https://www.figma.com/design/hCx5mc7IJbSjmTim6qT33i/open-peeps-mono?node-id=0-266
   - This contains 30 standing full-body character variations
   - Export the "variations-standing" frame as PNG with transparent background
   
2. **OpenPeeps** - Download from https://www.openpeeps.com/

### Current Sprite Sheet Specifications:

- **Format**: PNG with transparent background (monochrome/black & white)
- **Grid Layout**: 10 columns × 3 rows (30 standing character sprites)
- **Each sprite**: Full-body standing character (280×780px each)
- **File name**: `standing-peeps.png`

### Alternative: Bust-Only Characters

If you prefer the smaller bust-only characters:

1. Export node 0:546 from Figma (15×7 grid, 105 busts)
2. Save as `all-peeps.png`
3. Update HeroSection.jsx:

```jsx
<CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
```

### Custom Configuration:

Update the `src`, `rows`, and `cols` props in the HeroSection component to match your sprite sheet layout.
