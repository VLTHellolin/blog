import { Container } from '@/components/Container';
import { TOC } from '@/components/TOC';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPosts } from '@/lib/posts';
import * as React from 'react';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(post => ({ slug: post }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { default: MDX, frontmatter, toc } = await import(`^/posts/${slug}.md`);
  const { title, date } = frontmatter;

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle className='w-fit text-2xl font-bold' style={{ viewTransitionName: `post-title-${slug}` }}>
            {title}
          </CardTitle>
          <CardDescription className='w-fit' style={{ viewTransitionName: `post-desc-${slug}` }}>
            {date.split(' ')[0]}
          </CardDescription>
        </CardHeader>
        <CardContent className='mt--4'>
          {/* eslint-disable-next-line style/jsx-pascal-case */}
          <MDX />
        </CardContent>
      </Card>
      {/* eslint-disable-next-line style/jsx-pascal-case */}
      {toc && !!toc.length && <TOC toc={toc} />}
    </Container>
  );
}
