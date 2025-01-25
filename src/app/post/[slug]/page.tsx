import { Container, ContainerMain, ContainerSide } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPosts } from '@/lib/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(post => ({ slug: post }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: MDX, frontmatter } = await import(`^/posts/${slug}.md`);
  const { title, date } = frontmatter;

  return (
    <Container>
      <ContainerSide>
        <Sidebar toc />
      </ContainerSide>
      <ContainerMain>
        <Card>
          <CardHeader>
            <CardTitle className='w-fit text-3xl font-bold' style={{ viewTransitionName: `post-title-${slug}` }}>
              {title}
            </CardTitle>
            <CardDescription className='w-fit' style={{ viewTransitionName: `post-desc-${slug}` }}>
              {date}
            </CardDescription>
          </CardHeader>
          <CardContent className='mt--4'>
            <MDX />
          </CardContent>
        </Card>
      </ContainerMain>
    </Container>
  );
};
