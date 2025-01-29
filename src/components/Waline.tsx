'use client';

import {
  init,
  type WalineInitOptions,
  type WalineInstance,
} from '@waline/client';
import { useEffect, useRef } from 'react';

import '@waline/client/style';

export type WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };

export function Waline(props: WalineOptions) {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, [props]);

  return <div ref={containerRef} />;
}
