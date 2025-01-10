import { CopyButton } from './CopyButton';
import { getNodeText } from '@/lib/nodeText';

export interface CodeBlockProps extends React.ComponentProps<'pre'> {
  withCopy?: boolean;
}

export const CodeBlock = ({ children, withCopy, ...props }: CodeBlockProps) => {
  return (
    <pre {...props}>
      {children}
      {withCopy !== false && <CopyButton content={getNodeText(children)} />}
    </pre>
  );
};
