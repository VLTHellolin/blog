import type { ReactNode } from 'react';

export const getNodeText = (node: ReactNode): string => {
  if (!node) return '';

  switch (typeof node) {
    case 'string':
    case 'number':
      return node.toString();

    case 'boolean':
      return '';

    default: {
      if (Array.isArray(node)) return node.map(getNodeText).join('');
      // biome-ignore lint/suspicious/noExplicitAny:
      if (typeof node === 'object' && 'props' in node) return getNodeText((node.props as any).children);
      return '';
    }
  }
};
