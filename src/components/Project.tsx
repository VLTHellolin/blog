import { cn } from '@/lib/utils';
import NextLink from 'next/link';
import { Badge } from './ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export interface ProjectItem {
  text: string;
  description: string;
  href: string;
  technologies: string[];
  external?: boolean;
  archived?: boolean;
  developing?: boolean;
  type: 'website' | 'source';
}

export function Project({ text, description, href, technologies, external, archived, developing, type }: ProjectItem) {
  const tech = {
    react: 'i-simple-icons-react',
    next: 'i-simple-icons-nextdotjs',
    unocss: 'i-simple-icons-unocss',
    typescript: 'i-simple-icons-typescript',
    eslint: 'i-simple-icons-eslint',
    vue: 'i-simple-icons-vuedotjs',
    vite: 'i-simple-icons-vite',
  };

  return (
    <NextLink href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>
      <Card className='h-full flex flex-1 items-center justify-between p-5 transition-colors hover:bg-accent/40'>
        <CardHeader className='p-0 md:max-w-85%'>
          <CardTitle className='flex items-center gap-2 text-base'>
            {text}
            <span className='flex items-center gap-2 text-muted-foreground'>
              {technologies.map(e => (
                <div key={e} className={cn(tech[e as keyof typeof tech], 'inline-block w-15px h-15px')} />
              ))}
            </span>
            {archived && <Badge variant='warning'>Archived</Badge>}
            {developing && <Badge variant='success'>
              <span className='hidden md:inline-block'>Work in Progress</span>
              <span className='inline-block md:hidden'>WIP</span>
            </Badge>}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <div className={cn(type === 'website' ? 'i-lucide-arrow-up-right' : 'i-lucide-code-xml', 'w-6 h-6 lt-md:hidden')} />
      </Card>
    </NextLink>
  );
}
