export type RetroPodColor = {
  id: string
  name: string
  src: string
  swatch: string
  tagline: string
}

export const colors: RetroPodColor[] = [
  {
    id: 'cherry',
    name: 'Cherry',
    src: '/retropod-cherry.png',
    swatch: 'var(--cherry)',
    tagline: 'Bold, glossy, and ripe for the picking.',
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    src: '/retropod-blue.png',
    swatch: 'var(--blueberry)',
    tagline: 'Deep translucent blue with a see-through soul.',
  },
  {
    id: 'bubblegum',
    name: 'Bubblegum',
    src: '/retropod-pink.png',
    swatch: 'var(--bubblegum)',
    tagline: 'Sweet, punchy, unapologetically Y2K.',
  },
  {
    id: 'tangerine',
    name: 'Tangerine',
    src: '/retropod-hero.png',
    swatch: 'var(--tangerine)',
    tagline: 'The original. Loud, warm, impossible to lose.',
  },
  {
    id: 'snowcap',
    name: 'Snowcap',
    src: '/retropod-snowcap.png',
    swatch: 'var(--snowcap)',
    tagline: 'Frosted, clean, and quietly showing off.',
  },
]
