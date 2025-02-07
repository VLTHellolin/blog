import { Container } from '@/components/Container';
import { PostList } from '@/components/PostList';

export default function Page() {
  return (
    <Container>
      <PostList page={1} />
    </Container>
  );
}
