import { Link } from './Link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export async function Post({ post }: { post: string }) {
  const { title, description, date } = (await import(`^/posts/${post}.md`)).frontmatter;

  return (
    <Card>
      <CardHeader>
        <CardTitle className='w-fit' style={{ viewTransitionName: `post-title-${post}` }}>
          {title}
        </CardTitle>
        <CardDescription className='w-fit' style={{ viewTransitionName: `post-desc-${post}` }}>
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
      <CardFooter>
        <Link href={`/posts/${post}`}>
          Read more...
        </Link>
      </CardFooter>
    </Card>
  );
}
