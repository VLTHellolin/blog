import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetAnimations } from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn(),
    presetIcons({
      collections: {
        'lucide': () => import('@iconify-json/lucide/icons.json').then(e => e.default),
        'ri': () => import('@iconify-json/ri/icons.json').then(e => e.default),
        'simple-icons': () => import('@iconify-json/simple-icons/icons.json').then(e => e.default) as any,
      },
    }),
  ],
  theme: {
    colors: {
      brand: '#0284c7',
      warning: '#d97706',
      important: '#4f46e5',
      success: '#047857',
      danger: '#dc2626',
    },
  },
});
