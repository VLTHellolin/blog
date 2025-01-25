import { defineConfig, presetUno } from 'unocss';
import { presetAnimations } from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn(),
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
