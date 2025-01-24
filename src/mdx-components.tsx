import type { MDXComponents } from 'mdx/types';
import { Code } from './components/Code';
import { Divider } from './components/Divider';
import { H1, H2, H3, H4, H5, H6 } from './components/Heading';
import { Link } from './components/Link';
import { ListItem, OrderedList, UnorderedList } from './components/List';
import { Paragraph } from './components/Paragraph';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from './components/ui/alert';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './components/ui/table';
import { withAlertType } from './lib/githubAlert';

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    a: Link,
    code: Code,
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    hr: Divider,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    tfoot: TableFooter,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    caption: TableCaption,
    blockquote: withAlertType(({ type, title, children }: any) => (
      <Alert variant={type}>
        <AlertIcon variant={type} />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    )),
    ...components,
  };
}
