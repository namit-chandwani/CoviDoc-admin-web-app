import React from 'react';
import styled from 'styled-components';
import Image from '../../images/user1.png';
import Logo from '../../images/Logo.png';

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;
const LogoImg = styled.img`
  max-height: 16px;
`;
const ProfileImg = styled.img`
  height: 2rem;
  margin-right: -1.5rem;
`;

const Nav = () => {
  return (
    <Container>
      <LogoImg src={Logo} />
      <ProfileImg src={Image} />
    </Container>
  );
};

export default Nav;
