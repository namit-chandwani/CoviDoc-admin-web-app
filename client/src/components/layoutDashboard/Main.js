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
      <div>
        <h1
          style={{
            fontSize: '72px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Admin Dashboard
        </h1>
      </div>
    </Container>
  );
};

export default Main;
