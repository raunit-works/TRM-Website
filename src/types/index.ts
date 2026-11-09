export type NavItem = {
  label: string;
  href: string;
};

export type ServiceIconName = 'profile' | 'reels' | 'strategy' | 'consultation';
export type ProcessIconName = 'discover' | 'plan' | 'create' | 'publish' | 'measure';
export type TrustIconName = 'ownership' | 'approval' | 'confidentiality' | 'communication';

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  href?: string;
};

export type ReelItem = {
  id: string;
  title: string;
  category: string;
  platform: string;
  thumbnail: string;
  videoSrc?: string;
};

export type FounderItem = {
  id: string;
  name: string;
  role: string;
  photo: string;
  introduction: string;
  responsibilities: string[];
};

export type ProcessItem = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: ProcessIconName;
};

export type TrustItem = {
  id: string;
  title: string;
  description: string;
  icon: TrustIconName;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
