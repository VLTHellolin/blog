import NextLink from 'next/link';
import { Link as RadixLink, type LinkProps as RadixLinkProps } from '@radix-ui/themes';

export interface LinkProps extends RadixLinkProps {
  href: string;
  prefetch?: boolean | null;
  replace?: boolean;
}

export const Link = ({ children, href, prefetch, replace, ...props }: LinkProps) => {
  return (
    <NextLink href={href} prefetch={prefetch} replace={replace}>
      <RadixLink {...props}>{children}</RadixLink>
    </NextLink>
  );
};
