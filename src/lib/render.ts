import MarkdownIt from 'markdown-it';
import Shiki from '@shikijs/markdown-it';

export const createRenderer = async () => {
  const md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  md.linkify.set({ fuzzyLink: false });

  md.use(
    await Shiki({
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    }),
  );

  return md;
};
