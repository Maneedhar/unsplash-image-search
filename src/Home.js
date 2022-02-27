import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
// import Searchbar from './Components/Search';
// import ImageList from './ImageList';
import { unsplash } from './utils/unsplash';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Landing = () => {
  const { data, isLoading, error } = useQuery('photos', () =>
    unsplash.photos.list({
      page: 1,
      perPage: 50,
    })
  );
  console.log('Landing ~ data', data, isLoading, error);

  return (
    <Container>
      {/* <Searchbar /> */}
      {/* <ImageList pics={state.images} /> */}
    </Container>
  );
};

export default Landing;
