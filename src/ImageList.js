import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from './utils/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 64px;
`;

const ImageWrapper = styled.ul`
  display: grid;
  grid-gap: 40px;
  column-gap: 50px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  img {
    height: 150px;
    width: 150px;
  }
  ${tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img`
  border-radius: 20px;
  cursor: pointer;
`;


const ImageList = ({ pics }) => {
  if (!pics) return null;
  return (
    <Container>
      <ImageWrapper>
        {pics.map((pic) => {
          const { urls, alt_description, id } = pic
          return <Img src={urls.regular} alt={alt_description} key={id} />
        })}
      </ImageWrapper>
    </Container>
  )
}

export default ImageList;
