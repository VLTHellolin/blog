import type { RootContent } from 'mdast';
import { valueToEstree } from 'estree-util-value-to-estree';
import pinyin from 'pinyin';

export function createAstExport(name: string, data: unknown): RootContent {
  return {
    type: 'mdxjsEsm',
    value: '',
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [
          {
            type: 'ExportNamedDeclaration',
            specifiers: [],
            declaration: {
              type: 'VariableDeclaration',
              kind: 'const',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  id: { type: 'Identifier', name },
                  init: valueToEstree(data, { preserveReferences: true }),
                },
              ],
            },
          },
        ],
      },
    },
  };
}

export function transformTitleId(content: string) {
  return pinyin(content, { style: pinyin.STYLE_NORMAL }).join(' ').replace(/\s+/g, '-').toLowerCase();
}
