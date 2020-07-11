import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItems';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
`;

const Menu = () => {
  return (
    <Container>
      <Link to='/dashboard' style={{ textDecoration: 'none' }}>
        <MenuItem title='Dashboard' active />
      </Link>
      <Link to='/dashboard/patients' style={{ textDecoration: 'none' }}>
        <MenuItem title='Patients' />
      </Link>
      <Link to='/dashboard/update-status' style={{ textDecoration: 'none' }}>
        <MenuItem title='Update Status' />
      </Link>
      <Link to='/dashboard/status-history' style={{ textDecoration: 'none' }}>
        <MenuItem title='Status History' />
      </Link>
    </Container>
  );
};

export default Menu;
