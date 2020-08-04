import React from 'react';
import {Container} from '../components/ui/container/container.component';
import {HeaderBlock} from '../components/blocks/header/header.component';
import {Divider} from '../components/ui/divider/divider.component';
import {FooterBlock} from '../components/blocks/footer/footer.component';
import {ProjectBlock} from '../components/blocks/projects/projects.component';
import { BooksBlock } from '../components/blocks/books/books.component';
import { BioBlock } from '../components/blocks/bio/bio.component';
import { PostLatest } from '../components/blocks/posts/post-latest/post-latest.component';

const MainPage: React.FC = () => {
  return (
    <HeaderBlock>
      <BioBlock />
      <PostLatest />
      <ProjectBlock />
      <BooksBlock />
      <Container>
        <Divider />
      </Container>
      <FooterBlock />
    </HeaderBlock>
  );
};

export default MainPage;
