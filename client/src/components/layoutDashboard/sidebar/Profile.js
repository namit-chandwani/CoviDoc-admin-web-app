import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../../../images/user1.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

const Container = styled.div`
  margin-top: 5rem;
`;
const ProfileImg = styled.img`
  height: 6rem;
  text-align: center;
  align-items: center;
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin-top: 1rem;
  text-align: center !important;
`;

class Profile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <Container>
        <ProfileImg src={Image} />
        <ProfileName>{user.name}</ProfileName>
      </Container>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Profile);
