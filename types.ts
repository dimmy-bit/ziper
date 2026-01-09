
export enum AppView {
  LANDING = 'LANDING',
  APP = 'APP'
}

export interface StyleOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompt: string;
}

export interface GenerationResult {
  id: string;
  originalImage: string;
  styledImage: string;
  style: string;
  timestamp: number;
}
