import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const Container = styled.div`
  width: auto;
  margin-left: 12rem;
  position: relative;
  padding: 0 4rem;
`;

class UpdateStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidPatientCount: 0,
      totalPatientCount: 0,
      PPELevel: 0,
      acceptingCovidPatients: false,
      acceptingNonCovidPatients: false,
      testsAvailableCount: 0,
      offersFullMedicalCare: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleAcceptingCovidPatientsChange = this.handleAcceptingCovidPatientsChange.bind(this);
  }

  // NOT WORKING
  handleCheckboxChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: !value
    });
  };

  // NOT WORKING
  handleAcceptingCovidPatientsChange = (event) => {
    this.setState({
      acceptingCovidPatientsChange: !this.state.acceptingCovidPatientsChange
    });
  };

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    alert(this.state.acceptingCovidPatients);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '500',
            margin: '-2rem 0 0 -1.9rem',
          }}
        >
          Update Status
        </h1>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>
              COVID Patient Count
            <input type="text" name="covidPatientCount" value={this.state.covidPatientCount} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              Total Patient Count
            <input type="text" name="totalPatientCount" value={this.state.totalPatientCount} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              PPE Level
            <input type="text" name="PPELevel" value={this.state.PPELevel} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.acceptingCovidPatients}
                  onChange={this.handleAcceptingCovidPatientsChange}
                  name="acceptingCovidPatients"
                  color="primary"
                />
              }
              label="Accepting Covid Patients"
            />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.acceptingNonCovidPatients}
                  onChange={this.handleCheckboxChange}
                  name="acceptingNonCovidPatients"
                  color="primary"
                  />
              }
              label="Accepting Non Covid Patients"
            />
          </div>

          <div>
            <label>
              Tests Available
            <input type="text" name="testsAvailableCount" value={this.state.testsAvailableCount} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.offersFullMedicalCare}
                  onChange={this.handleCheckboxChange}
                  name="offersFullMedicalCare"
                  color="primary"
                />
              }
              label="Offers Full Medical Care"
            />
          </div>

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}

export default UpdateStatus;