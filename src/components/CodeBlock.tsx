import { getNodeText } from '@/lib/nodeText';
import { CopyButton } from './CopyButton';

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
