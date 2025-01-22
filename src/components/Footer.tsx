import { Link } from './Link';

export function Footer() {
  return (
    <footer>
      <div>
        Copyright © 2023-2025
        {' '}
        <Link href='https://hellolin.top'>hellolin</Link>
        . All rights reserved.
      </div>
      <div>
        Powered by
        {' '}
        <Link href='https://nextjs.org'>Next.js</Link>
        {' '}
        &
        {' '}
        <Link href='https://radix-ui.com'>Radix UI</Link>
        .
      </div>
    </footer>
  );
}
