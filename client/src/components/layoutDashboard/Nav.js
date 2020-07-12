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
  position: relative;
`;
const LogoImg = styled.img`
  max-height: 20px;
  margin: -18.3rem 250px 0 -200px;
`;
const ProfileImg = styled.img`
  height: 5rem;
  margin: -18.3rem 0 0 530px;
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
