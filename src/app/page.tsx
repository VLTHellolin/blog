import { PostList } from '@/components/PostList';
import { Button, Container } from '@radix-ui/themes';

export default () => {
  return (
    <Container>
      Hello world
      <br />
      <Button>Test Button</Button>
      <br />
      <PostList />
    </Container>
  );
};
