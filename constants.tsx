
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
    prompt: 'A person portrait transformed into a cute 3D gummy bear material, translucent gelatin, vibrant neon candy colors, glossy sugary finish, studio lighting, subsurface scattering, highly detailed 3d render',
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Clean line art and professional 2D cel shading.',
    icon: '🎨',
    prompt: 'Professional 2D anime cartoon style, clean line art, vibrant cel shading, flat design, expressive character design, Studio Ghibli inspired art style, high quality digital illustration',
  },
  {
    id: 'toy',
    name: '3D Toy',
    description: 'High-quality vinyl toy aesthetic with smooth plastic textures.',
    icon: '🧸',
    prompt: 'A high-end 3D designer vinyl toy collectible, smooth matte plastic finish, funko pop aesthetic, studio macro photography, miniature toy lighting, vibrant pop colors, high resolution 3d model',
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'Stop-motion claymation style with tactile thumbprint details.',
    icon: '🪴',
    prompt: 'Handcrafted claymation character, tactile clay texture, soft thumbprint details, stop-motion animation aesthetic, organic clay material, warm cozy lighting, Aardman style animation',
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold Warhol-style contrast with vibrant CMYK halftone dots.',
    icon: '💥',
    prompt: 'Vibrant pop art illustration, Andy Warhol style, high contrast, CMYK palette, halftone dot patterns, bold graphic design, iconic screen print look, retro comic book aesthetic',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetics and tech-noir atmosphere.',
    icon: '⚡',
    prompt: 'Cyberpunk neon aesthetic portrait, futuristic glowing tech gear, blue and magenta cinematic lighting, rain-slicked surfaces, intricate mechanical details, sci-fi atmosphere, night city background',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional graphite pencil drawings with clean paper texture.',
    icon: '✏️',
    prompt: 'Hyper-detailed graphite pencil sketch, artistic cross-hatching, clean white paper texture, realistic charcoal smudges, professional hand-drawn fine art, deep shading and contrast',
  },
];
