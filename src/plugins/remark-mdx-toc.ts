import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { createAstExport, transformTitleId } from './utils';

export interface TocHeading {
  depth: 2 | 3 | 4 | 5 | 6;
  title: string;
  link: string;
}

export default function remarkMdxToc() {
  return (ast: Root) => {
    const result: TocHeading[] = [];

    visit(ast, 'heading', (node) => {
      if (node.depth === 1)
        return;

      const content: string = (node.children[0] as any).value;
      result.push({
        depth: node.depth,
        title: content,
        link: transformTitleId(content),
      });
    });

    ast.children.unshift(createAstExport('toc', result));
  };
}
