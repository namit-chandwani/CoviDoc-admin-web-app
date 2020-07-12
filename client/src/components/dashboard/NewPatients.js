import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// import PatientListItem from './PatientListItem';
import styled from 'styled-components';
import Main from '../layoutDashboard/Main';

const Container = styled.div`
  width: 64rem;
  margin-left: 2rem;
  position: relative;
  padding: 0 4rem;
  margin-top: 3rem;
`;

class NewPatients extends Component {
  state = {
    patientList: [],
  };

  componentDidMount() {
    this.setState({
      patientList: [
        {
          id: 1,
          date: '11-07-2020',
          name: 'Bhuwan Tyagi',
          age: 20,
          gender: 'Male',
          score: '98.48',
          approve: 'Approved',
        },
        {
          id: 2,
          date: '12-07-2020',
          name: 'Namit Chandwani',
          age: 20,
          gender: 'Male',
          score: '88.72',
          approve: 'Approved',
        },
        {
          id: 2,
          date: '12-07-2020',
          name: 'Yash Narang',
          age: 20,
          gender: 'Male',
          score: '84.28',
          approve: 'Approved',
        },
        {
          id: 2,
          date: '12-07-2020',
          name: 'Adarsh Nandanwar',
          age: 20,
          gender: 'Male',
          score: '81.34',
          approve: 'Approved',
        },
        {
          id: 2,
          date: '12-07-2020',
          name: 'Garima Sharma',
          age: 19,
          gender: 'Female',
          score: '71.61',
          approve: 'Approved',
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
      { Header: 'Score', accessor: 'score', width: 90 },
      {
        Header: 'Approve',
        accessor: 'approve',
        width: 90,
        Cell: (cell) => <button value={cell.accessor}>Approve</button>,
      },
    ];
    return (
      <Container>
        <Main />
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '500',
              margin: '3rem 0 2rem -1.9rem',
            }}
          >
            Latest Patient List
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

export default NewPatients;
