import * as React from 'react';

export function Code({ children, ...props }: React.ComponentPropsWithRef<'code'>) {
  // MDX will replace all code elements, whether they are inline or block
  // inline styles are in global.css
  return (
    <code {...props}>
      {children}
    </code>
  );
}
