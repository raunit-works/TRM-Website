import type { ProcessItem } from '@/types';

export const processSteps: ProcessItem[] = [
  {
    id: 'discover',
    step: '01',
    title: 'Discover & Analyse',
    description: 'Review the current profile, positioning and communication gaps to identify the clearest next steps.',
    icon: 'discover',
  },
  {
    id: 'plan',
    step: '02',
    title: 'Strategy & Plan',
    description: 'Build a clear content and brand structure aligned to the doctor’s goals and audience needs.',
    icon: 'plan',
  },
  {
    id: 'create',
    step: '03',
    title: 'Create & Review',
    description: 'Shape the message, visuals and content flow with practical review checkpoints built in.',
    icon: 'create',
  },
  {
    id: 'publish',
    step: '04',
    title: 'Publish & Optimise',
    description: 'Launch with a structured publishing rhythm and adjust based on clarity, consistency and engagement.',
    icon: 'publish',
  },
  {
    id: 'measure',
    step: '05',
    title: 'Measure & Improve',
    description: 'Track what is working, refine the approach and strengthen the digital presence over time.',
    icon: 'measure',
  },
];
