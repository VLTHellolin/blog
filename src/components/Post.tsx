import { Link } from './Link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export async function Post({ post }: { post: string }) {
  const { title, description, date } = (await import(`^/posts/${post}.mdx`)).frontmatter;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
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
