import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'profile-management',
    title: 'Profile Management',
    description:
      'Structured support for doctor profiles, presentation, and consistent digital positioning across key channels.',
    icon: 'profile',
    href: '#contact',
  },
  {
    id: 'reels-content',
    title: 'Reels & Content Creation',
    description:
      'Short-form video and visual storytelling designed to make medical expertise clearer, more trustworthy and easier to follow.',
    icon: 'reels',
    href: '#reels',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description:
      'Audience-focused planning that aligns medical themes, posting cadence and professional positioning with your goals.',
    icon: 'strategy',
    href: '#process',
  },
  {
    id: 'consultation-training',
    title: 'Consultation & Training',
    description:
      'Practical guidance, content review and communication support to improve confidence and consistency in your digital presence.',
    icon: 'consultation',
    href: '#about',
  },
];
