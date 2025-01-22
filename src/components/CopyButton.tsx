'use client';

import { Icon } from '@iconify/react';
import { Button, type ButtonProps } from './ui/button';

export interface CopyButtonProps extends ButtonProps {
  content?: string;
}

export function CopyButton({ children, content, ...props }: CopyButtonProps) {
  const handleClick = () => {
    if (!content)
      return;
    navigator.clipboard.writeText(content);
  };

  return (
    <Button variant='ghost' onClick={handleClick} {...props}>
      <Icon icon='lucide:copy' />
    </Button>
  );
}
