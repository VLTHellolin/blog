import { Container, ContainerMain, ContainerSide } from '@/components/Container';
import { PostList } from '@/components/PostList';
import { Sidebar } from '@/components/Sidebar';

export default function Page() {
  return (
    <Container>
      <ContainerSide>
        <Sidebar />
      </ContainerSide>
      <ContainerMain>
        <PostList page={1} />
      </ContainerMain>
    </Container>
  );
};
