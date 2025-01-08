import { PostList } from '@/components/PostList';
import { Button } from '@radix-ui/themes';

export default () => {
  return (
    <div>
      Hello world
      <br />
      <Button>Test Button</Button>
      <br />
      <PostList />
    </div>
  );
};
