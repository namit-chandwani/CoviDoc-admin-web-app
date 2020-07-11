import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
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
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    alert(this.state);
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
          <label>
            COVID Patient Count:
          <input type="text" name="covidPatientCount" value={this.state.covidPatientCount} onChange={this.handleChange} />
          </label>

          <label>
            Total Patient Count:
            <input type="text" name="totalPatientCount" value={this.state.totalPatientCount} onChange={this.handleChange} />
          </label>

          <label>
            PPE Level:
            <input type="text" name="PPELevel" value={this.state.PPELevel} onChange={this.handleChange} />
          </label>

          <label>
            Accepting Covid Patients:
            <input type="checkbox" checked={this.state.acceptingCovidPatients} onChange={this.handleChange} />
          </label>

          <label>
            Accepting Non Covid Patients:
            <input type="checkbox" checked={this.state.acceptingNonCovidPatients} onChange={this.handleChange} />
          </label>

          <label>
            Tests Available:
            <input type="text" name="testsAvailableCount" value={this.state.testsAvailableCount} onChange={this.handleChange} />
          </label>

          <label>
            Offers Full Medical Care:
            <input type="checkbox" checked={this.state.offersFullMedicalCare} onChange={this.handleChange} />
          </label>

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}

export default UpdateStatus;