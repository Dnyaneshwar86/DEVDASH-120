export type CardData = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github: string;
  twitter: string;
  linkedin: string;
  email: string;
  avatar: string;
  theme: 'cyber' | 'matrix' | 'synth' | 'minimal' | 'gold';
  customColor: string;
};

export type SandboxConfig = {
  headline: string;
  accentColor: string;
  borderRadius: number;
  glassOpacity: number;
  showBadge: boolean;
  ctaText: string;
};
