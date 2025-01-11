import type { MDXComponents } from 'mdx/types';
import { Blockquote, Code, Separator, Table } from '@radix-ui/themes';
import { CodeBlock } from './components/CodeBlock';
import { Link } from '@/components/Link';
import Image from 'next/image';

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
