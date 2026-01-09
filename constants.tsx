
import React from 'react';
import { StyleOption } from './types';

export const COLORS = {
  BACKGROUND: '#0B0D10',
  SURFACE: '#111318',
  PRIMARY_NEON: '#7C3AED',
  SECONDARY_NEON: '#38BDF8',
  ACCENT: '#A3E635',
  TEXT_PRIMARY: '#E5E7EB',
  TEXT_MUTED: '#9CA3AF',
};

export const STYLES: StyleOption[] = [
  {
    id: 'gummy',
    name: 'Gummy',
    description: 'Soft, translucent 3D gummy textures with vibrant candy colors.',
    icon: '🍬',
    prompt: 'Translucent 3D gummy material, jelly-like texture, vibrant neon colors, glossy finish, subsurface scattering, cute and squishy aesthetic',
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Clean line art and professional 2D cel shading.',
    icon: '🎨',
    prompt: 'Modern 2D vector cartoon, professional cel shading, clean bold outlines, vibrant colors, expressive character design, high-quality digital art',
  },
  {
    id: 'toy',
    name: '3D Toy',
    description: 'High-quality vinyl toy aesthetic with smooth plastic textures.',
    icon: '🧸',
    prompt: 'Designer vinyl toy, matte plastic finish, urban collectible aesthetic, smooth 3D surfaces, studio lighting, professional product photography',
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'Stop-motion claymation style with tactile thumbprint details.',
    icon: '🪴',
    prompt: 'Handcrafted claymation, tactile clay texture, soft thumbprints, stop-motion animation aesthetic, organic material, warm lighting',
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold Warhol-style contrast with vibrant CMYK halftone dots.',
    icon: '💥',
    prompt: 'Vibrant Pop Art, Andy Warhol style, high contrast, CMYK palette, halftone dots, bold graphic design, iconic screen print aesthetic',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetics and tech-noir atmosphere.',
    icon: '⚡',
    prompt: 'Futuristic cyberpunk neon, glowing tech elements, blue and magenta cinematic lighting, sci-fi atmosphere, highly detailed mechanical parts',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional graphite pencil drawings with clean paper texture.',
    icon: '✏️',
    prompt: 'Fine art graphite pencil sketch, realistic shading, cross-hatching, clean paper texture, hand-drawn masterpiece, artistic charcoal details',
  },
];
