
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
    prompt: 'A person portrait transformed into a cute gummy 3D render, translucent soft gelatin material, vibrant candy colors, glossy finish, studio lighting, subsurface scattering',
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Clean line art and professional 2D cel shading.',
    icon: '🎨',
    prompt: 'Professional 2D anime cartoon style, clean line art, vibrant cel shading, expressive character design, Studio Ghibli art style, high quality illustration',
  },
  {
    id: 'toy',
    name: '3D Toy',
    description: 'High-quality vinyl toy aesthetic with smooth plastic textures.',
    icon: '🧸',
    prompt: 'A high-quality 3D vinyl toy collectible, smooth plastic texture, funko pop style, studio lighting, miniature toy aesthetic, vibrant pop culture design',
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'Stop-motion claymation style with tactile thumbprint details.',
    icon: '🪴',
    prompt: 'Handcrafted claymation character, tactile clay texture, soft thumbprint details, stop-motion animation look, organic Aardman style feel, cozy atmosphere',
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold Warhol-style contrast with vibrant CMYK halftone dots.',
    icon: '💥',
    prompt: 'Bold colorful pop art style, Andy Warhol inspired, high contrast colors, vibrant CMYK palette, halftone dot patterns, iconic graphic design',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetics and tech-noir atmosphere.',
    icon: '⚡',
    prompt: 'Cyberpunk neon aesthetic portrait, futuristic glowing tech, rain-slicked city background, blue and magenta cinematic lighting, intricate mechanical details',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional graphite pencil drawings with clean paper texture.',
    icon: '✏️',
    prompt: 'Hyper-detailed graphite pencil sketch, artistic cross-hatching, clean white paper texture, charcoal smudges, professional fine art drawing, hand-drawn',
  },
];
