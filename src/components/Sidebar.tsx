import { Icon } from '@iconify/react';
// import NextLink from 'next/link';
import { Link as NextLink } from 'next-view-transitions';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function Sidebar({
  toc,
}: {
  toc?: boolean;
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
            <NextLink href='https://github.com/VLTHellolin' target='_blank' rel='noopener noreferrer'>
              <Icon icon='lucide:github' />
            </NextLink>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <NextLink href='https://x.com/VLTHellolin' target='_blank' rel='noopener noreferrer'>
              <Icon icon='lucide:twitter' />
            </NextLink>
          </Button>
        </CardFooter>
      </Card>

      {toc
      && (
        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>TOC</CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className='text-lg font-semibold'>Header 2</h4>
            <h5 className='text-base font-semibold'>Header 3</h5>
          </CardContent>
        </Card>
      )}

      <Card style={{ viewTransitionName: 'sidebar-categories' }}>
        <CardHeader>
          <CardTitle className='text-lg'>Categories</CardTitle>
        </CardHeader>
        <CardContent>
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
