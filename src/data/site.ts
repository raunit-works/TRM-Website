import type { NavItem } from '@/types';

export const siteConfig = {
  brand: {
    name: 'Talkreach Media',
    tagline: 'Doctor profile management and content strategy',
    description:
      'Talkreach Media helps doctors build a credible, consistent digital presence through professional profile management, content strategy and video production.',
  },
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#reels' },
    { label: 'Our Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  contact: {
    phone: '',
    email: '',
    address: 'Available on request',
    whatsappNumber: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },
  legalPages: {
    privacy: '/privacy',
    terms: '/terms',
  },
  cta: {
    reviewHref: '#contact',
    whatsappHref: '#contact',
  },
};
