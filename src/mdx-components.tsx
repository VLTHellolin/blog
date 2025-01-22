import type { MDXComponents } from 'mdx/types';
import { Link } from '@/components/Link';
import { Blockquote, Code, Separator, Table } from '@radix-ui/themes';
import Image from 'next/image';
import { CodeBlock } from './components/CodeBlock';

const tableOverrides = {
  table: Table.Root,
  thead: Table.Header,
  tbody: Table.Body,
  tr: Table.Row,
  th: Table.ColumnHeaderCell,
  td: Table.Cell,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    blockquote: Blockquote,
    code: Code,
    hr: () => <Separator size='4' />,
    image: Image,
    pre: CodeBlock,
    ...tableOverrides,
    ...components,
  };
}
