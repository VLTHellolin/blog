'use client';

import { Icon } from '@iconify/react';
import { IconButton, type IconButtonProps } from '@radix-ui/themes';
import { useState } from 'react';

export interface CopyButtonProps extends IconButtonProps {
  content?: string;
}

export const CopyButton = ({ children, content, ...props }: CopyButtonProps) => {
  const [color, setColor] = useState<'indigo' | 'green'>('indigo');
  const [icon, setIcon] = useState('radix-icons:copy');

  const handleClick = () => {
    if (!content)
      return;
    navigator.clipboard.writeText(content);
    setColor('green');
    setIcon('radix-icons:check');
    setTimeout(() => {
      setColor('indigo');
      setIcon('radix-icons:copy');
    }, 1000);
  };

  return (
    <IconButton className='copy-button' color={color} variant='ghost' onClick={handleClick} {...props}>
      <Icon icon={icon} />
    </IconButton>
  );
};
