import { Link } from './Link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export async function Post({ post }: { post: string }) {
  const { title, description, date } = (await import(`^/posts/${post}.md`)).frontmatter;

  return (
    <Card className='transition-colors hover:bg-accent/40'>
      <CardHeader>
        <CardTitle className='w-fit text-xl' style={{ viewTransitionName: `post-title-${post}` }}>
          {title}
        </CardTitle>
        <CardDescription className='w-fit' style={{ viewTransitionName: `post-desc-${post}` }}>
          {date.split(' ')[0]}
        </CardDescription>
      </CardHeader>
      <CardContent className='text-muted-foreground'>
        {description}
      </CardContent>
      <CardFooter>
        <Link href={`/blog/post/${post}`}>
          Read more...
        </Link>
      </CardFooter>
    </Card>
  );
}
