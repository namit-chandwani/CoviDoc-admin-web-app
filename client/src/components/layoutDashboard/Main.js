import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  margin-left: 12rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <div></div>
    </Container>
  );
};

export default Main;
