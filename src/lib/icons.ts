import { loadIcons } from '@iconify/react';

export const icons = [
  'lucide:book-text',
  'lucide:search',
  'lucide:rss',
  'lucide:sun',
  'lucide:moon',
  'lucide:github',
  'lucide:twitter',
  'lucide:chevron-right',
  'lucide:info',
  'lucide:triangle-alert',
  'lucide:circle-alert',
  'lucide:circle-check',
  'lucide:circle-x',
  'lucide:copy',
  'lucide:check',
];

export function preloadIcons() {
  loadIcons(icons);
}
