
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
    prompt: 'Translucent 3D gummy bear material, soft gelatin texture, vibrant candy colors, glossy sugary finish, studio lighting, subsurface scattering, cute character',
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Clean line art and professional 2D cel shading.',
    icon: '🎨',
    prompt: 'Professional 2D vector art, clean line art, vibrant cel shading, flat design, expressive character design, Studio Ghibli inspired, high quality illustration',
  },
  {
    id: 'toy',
    name: '3D Toy',
    description: 'High-quality vinyl toy aesthetic with smooth plastic textures.',
    icon: '🧸',
    prompt: '3D designer vinyl toy collectible, smooth plastic finish, funko pop aesthetic, studio macro photography, miniature toy lighting, vibrant colors',
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'Stop-motion claymation style with tactile thumbprint details.',
    icon: '🪴',
    prompt: 'Handmade claymation character, tactile clay texture, soft thumbprint details, stop-motion animation aesthetic, organic clay material, warm lighting',
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold Warhol-style contrast with vibrant CMYK halftone dots.',
    icon: '💥',
    prompt: 'Vibrant pop art illustration, Andy Warhol style, high contrast, CMYK palette, halftone dot patterns, bold graphic design, iconic screen print look',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetics and tech-noir atmosphere.',
    icon: '⚡',
    prompt: 'Cyberpunk neon aesthetic, futuristic glowing tech, blue and magenta cinematic lighting, rain-slicked surfaces, intricate mechanical details, sci-fi atmosphere',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional graphite pencil drawings with clean paper texture.',
    icon: '✏️',
    prompt: 'Detailed graphite pencil sketch, artistic cross-hatching, clean white paper texture, charcoal smudges, professional hand-drawn fine art, realistic shading',
  },
];
