import { Link } from './Link';

export function Footer() {
  return (
    <footer className='mt-6 border-0 border-t border-solid px-8 py-6'>
      <div className='flex justify-center'>
        <div className='container'>
          <p className='text-sm text-muted-foreground'>
            Copyright © 2023-2025
            {' '}
            <Link href='https://hellolin.top' withoutVTA>hellolin</Link>
            . All rights reserved.
            <br />
            Powered by
            {' '}
            <Link href='https://nextjs.org' rel='noopener' withoutVTA>
              next.js
            </Link>
            {' '}
            and
            {' '}
            <Link href='https://ui.shadcn.com' rel='noopener' withoutVTA>
              shadcn/ui
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
