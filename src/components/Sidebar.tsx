import { Icon } from '@iconify/react';
// import NextLink from 'next/link';
import { Link as NextLink } from 'next-view-transitions';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function Sidebar() {
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

      <Card>
        <CardHeader>
          <CardTitle className='text-lg'>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor
        </CardContent>
      </Card>
    </>
  );
}
