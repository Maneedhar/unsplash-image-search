import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #72757E;
  min-height: 100vh;
`;

const PageContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageContainer
