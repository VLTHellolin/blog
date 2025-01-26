import type { TocHeading } from '@/plugins/remark-mdx-toc';
import { Icon } from '@iconify/react';
import NextLink from 'next/link';
import { TOC } from './TOC';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function Sidebar({
  toc,
}: {
  toc?: TocHeading[];
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <Avatar className='mb-2 h-10 w-10'>
            <AvatarImage src='https://github.com/VLTHellolin.png' />
            <AvatarFallback>H</AvatarFallback>
          </Avatar>
          <CardTitle>hellolin</CardTitle>
          <CardDescription>Frontend Dev & Competitive Programmer</CardDescription>
        </CardHeader>
        <CardFooter className='float-right mt--2'>
          <Button variant='ghost' size='icon' asChild>
            <NextLink href='https://github.com/VLTHellolin' target='_blank' rel='noopener'>
              <Icon icon='lucide:github' />
            </NextLink>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <NextLink href='https://x.com/VLTHellolin' target='_blank' rel='noopener'>
              <Icon icon='lucide:twitter' />
            </NextLink>
          </Button>
        </CardFooter>
      </Card>

      {toc && !!toc.length
      && (
        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>On this page</CardTitle>
          </CardHeader>
          <CardContent className='mt--2'>
            <TOC toc={toc} />
          </CardContent>
        </Card>
      )}

      <Card style={{ viewTransitionName: 'sidebar-categories' }}>
        <CardHeader>
          <CardTitle className='text-lg'>Categories</CardTitle>
        </CardHeader>
        <CardContent className='mt--2'>
          <div className='flex justify-between pb-2'>
            Category 1
            <Badge variant='secondary'>11</Badge>
          </div>
          <div className='flex justify-between pb-2'>
            Category 2
            <Badge variant='secondary'>45</Badge>
          </div>
          <div className='flex justify-between pb-2'>
            Category 3
            <Badge variant='secondary'>14</Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
