import type { TrustItem } from '@/types';

export const trustItems: TrustItem[] = [
  {
    id: 'ownership',
    title: 'Your Account, Your Ownership',
    description: 'The doctor retains ownership of their social media and YouTube accounts, with clear process and control.',
    icon: 'ownership',
  },
  {
    id: 'approval',
    title: 'Content Approval',
    description: 'Medical content is reviewed and approved through a defined workflow before publication.',
    icon: 'approval',
  },
  {
    id: 'confidentiality',
    title: 'Confidential & Professional',
    description: 'Sensitive information is handled with discretion and a careful, professional process from planning onward.',
    icon: 'confidentiality',
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'Defined responsibilities, regular updates and a clear point of contact maintain continuity and clarity.',
    icon: 'communication',
  },
];
