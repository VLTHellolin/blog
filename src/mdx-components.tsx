import type { MDXComponents } from 'mdx/types';
import { Code } from './components/Code';
import { headingFactory } from './components/Heading';
import { Link } from './components/Link';

export function useMDXComponents(components?: MDXComponents) {
  return {
    a: Link,
    code: Code,
    h1: headingFactory(1),
    h2: headingFactory(2),
    h3: headingFactory(3),
    h4: headingFactory(4),
    h5: headingFactory(5),
    h6: headingFactory(6),
    ...components,
  };
}
