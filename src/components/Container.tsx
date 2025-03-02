import * as React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className='mt-20 flex justify-center'>
      <div className='flex justify-center container'>
        <div className='w-2/3 lt-md:w-90%'>
          {children}
        </div>
      </div>
    </main>
  );
}
