import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  margin-left: 12rem;
  position: relative;
  padding: 0 4rem;
`;

const StatusUpdate = () => {
  return (
    <Container>
      <div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '500',
            margin: '-2rem 0 0 -1.9rem',
          }}
        >
          Status Update
        </h1>
      </div>
    </Container>
  );
};

export default StatusUpdate;
