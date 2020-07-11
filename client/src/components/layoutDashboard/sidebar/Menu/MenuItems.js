import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  height: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h1`
  color: white;
  padding-top: 15px;
  font-size: 1rem;
  font-weight: 300;
  vertical-align: middle;
`;

const MenuItem = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default MenuItem;
