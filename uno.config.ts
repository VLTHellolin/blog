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
      brand: '#1d4ed8',
      warning: '#d97706',
      important: '#5b21b6',
      success: '#047857',
      danger: '#991b1b',
    },
  },
});
