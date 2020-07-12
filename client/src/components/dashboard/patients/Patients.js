import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// import PatientListItem from './PatientListItem';
import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  margin-left: 2rem;
  position: relative;
  padding: 0 4rem;
  margin-top: 3rem;
`;

class Patients extends Component {
  state = {
    patientList: [],
  };

  componentDidMount() {
    this.setState({
      patientList: [
        {
          id: 1,
          date: '11-07-2020',
          name: 'first last',
          age: 35,
          gender: 'Male',
        },
        {
          id: 2,
          date: '12-07-2020',
          name: 'first last',
          age: 28,
          gender: 'Female',
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
        Header: 'Name',
        accessor: 'name',
        width: 160,
        Cell: (e) => <a href={e.value}> {e.value} </a>,
      },
      { Header: 'Age', accessor: 'age', width: 80 },
      { Header: 'Gender', accessor: 'gender', width: 90 },
    ];
    return (
      <Container>
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '500',
              margin: '3rem 0 2rem -1.9rem',
            }}
          >
            Patient List
          </h1>
        </div>
        {/* { this.state.patientList.map((patient) => (
          <PatientListItem key={patient.id} patient={patient} />
        )) } */}
        <ReactTable
          data={this.state.patientList}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[5, 10, 20, 50, 100]}
        />
      </Container>
    );
  }
}

export default Patients;
