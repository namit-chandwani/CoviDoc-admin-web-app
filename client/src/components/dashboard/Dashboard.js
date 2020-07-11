import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Sidebar from '../layoutDashboard/sidebar/Sidebar';
import Main from '../layoutDashboard/Main';
import PrivateRoute from '../private-route/PrivateRoute';
import Patients from './patients/Patients';
import UpdateStatus from './updateStatus/UpdateStatus';
import StatusHistory from './statusHistory/StatusHistory';

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: '75vh' }} className='container valign-wrapper'>
        <Sidebar />
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Main} />
          <PrivateRoute exact path='/dashboard/patients' component={Patients} />
          <PrivateRoute exact path='/dashboard/update-status' component={UpdateStatus} />
          <PrivateRoute exact path='/dashboard/status-history' component={StatusHistory} />
        </Switch>
        <div className='row'>
          <div className='landing-copy col s12 center-align'>
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              onClick={this.onLogoutClick}
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
