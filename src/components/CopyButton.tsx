'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Button } from './ui/button';

export function CopyButton({ className, ...props }: React.ComponentPropsWithRef<typeof Button>) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied)
      return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const copy = async (event: React.MouseEvent) => {
    setCopied(true);
    const content = event.currentTarget.parentNode?.parentNode?.querySelector('pre code')?.textContent ?? '';
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    // eslint-disable-next-line ts/no-misused-promises
    <Button className={cn('absolute top-3 right-3 h-8 w-8', copied && 'text-success hover:text-success', className)} variant='ghost' size='icon' onClick={copy} {...props}>
      <div className={copied ? 'i-lucide-check' : 'i-lucide-copy'} />
    </Button>
  );
}
