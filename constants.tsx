
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
    prompt: 'Transform this into a cute gummy-like 3D render, translucent soft gelatin material, vibrant colors, glossy finish, high quality, studio lighting.',
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Clean line art and professional 2D cel shading.',
    icon: '🎨',
    prompt: 'Transform into professional 2D cartoon style, clean line art, vibrant cel shading, expressive animation features, Studio Ghibli inspired.',
  },
  {
    id: 'toy',
    name: '3D Toy',
    description: 'High-quality vinyl toy aesthetic with smooth plastic textures.',
    icon: '🧸',
    prompt: 'A high-quality 3D vinyl toy aesthetic, smooth plastic texture, studio lighting, miniature toy style, adorable features, pop culture design.',
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'Stop-motion claymation style with tactile thumbprint details.',
    icon: '🪴',
    prompt: 'Handcrafted claymation style, tactile clay texture, soft thumbprint details, stop-motion look, organic feel, cozy atmosphere.',
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold Warhol-style contrast with vibrant CMYK halftone dots.',
    icon: '💥',
    prompt: 'Bold pop art style, high contrast, vibrant CMYK colors, halftone dots, Warhol inspired, iconic graphic look.',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetics and tech-noir atmosphere.',
    icon: '⚡',
    prompt: 'Futuristic neon cyberpunk aesthetic, vibrant glow effects, tech-noir atmosphere, high contrast, blue and magenta lighting.',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional graphite pencil drawings with clean paper texture.',
    icon: '✏️',
    prompt: 'Professional graphite pencil sketch, artistic cross-hatching, clean paper texture, detailed lines, high-end fine art drawing.',
  },
];
