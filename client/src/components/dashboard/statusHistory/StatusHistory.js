import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// import HistoryListItem from './HistoryListItem';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 64rem;
  margin-left: 2rem;
  margin-top: 10rem;
  position: relative;
  padding: 5rem 6rem;
`;

class StatusHistory extends Component {
  state = {
    history: [],
  };

  componentDidMount() {
    this.setState({
      history: [
        {
          id: 1,
          date: '12-07-2020',
          covidPatientCount: 10,
          totalPatientCount: 300,
          PPELevel: 8,
          acceptingCovidPatients: 'yes',
          acceptingNonCovidPatients: 'yes',
          testsAvailableCount: 5123,
          offersFullMedicalCare: 'yes',
        },
        {
          id: 2,
          date: '11-07-2020',
          covidPatientCount: 5,
          totalPatientCount: 311,
          PPELevel: 8,
          acceptingCovidPatients: 'yes',
          acceptingNonCovidPatients: 'yes',
          testsAvailableCount: 3245,
          offersFullMedicalCare: 'yes',
        },
      ],
    });

    // axios
    //   .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.setState({ patientList: res.data }));
  }

  render() {
    const columns = [
      { Header: 'ID', accessor: 'id', width: 50 },
      { Header: 'Date', accessor: 'date', width: 90 },
      {
        Header: 'COVID Patient Count',
        accessor: 'covidPatientCount',
        width: 160,
      },
      {
        Header: 'Total Patient Count',
        accessor: 'totalPatientCount',
        width: 140,
      },
      { Header: 'PPE Level', accessor: 'PPELevel', width: 90 },
      {
        Header: 'Accepting Covid Patients',
        accessor: 'acceptingCovidPatients',
        width: 180,
      },
      {
        Header: 'Accepting Non Covid Patients',
        accessor: 'acceptingNonCovidPatients',
        width: 200,
      },
      {
        Header: 'Tests Available',
        accessor: 'testsAvailableCount',
        width: 120,
      },
      {
        Header: 'Offers Full Medical Care',
        accessor: 'offersFullMedicalCare',
        width: 170,
      },
    ];
    return (
      <Container>
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '500',
              margin: '-3rem 0 2rem -1.9rem',
            }}
          >
            Status History
          </h1>
          {/* </div>
          { this.state.history.map((historyEntry) => (
            <HistoryListItem key={historyEntry.id} historyEntry={historyEntry} />
          )) }
        <div>   */}
          <ReactTable
            data={this.state.history}
            columns={columns}
            defaultPageSize={10}
            pageSizeOptions={[5, 10, 20, 50, 100]}
          />
        </div>
      </Container>
    );
  }
}

export default StatusHistory;
