import { Link as RadixLink, type LinkProps as RadixLinkProps } from '@radix-ui/themes';
import NextLink from 'next/link';

export interface LinkProps extends RadixLinkProps {
  href: string;
  prefetch?: boolean | null;
  replace?: boolean;
}

export const Link = ({ children, href, prefetch, replace, ...props }: LinkProps) => {
  return (
    <RadixLink {...props} asChild>
      <NextLink href={href} prefetch={prefetch} replace={replace}>
        {children}
      </NextLink>
    </RadixLink>
  );
};
