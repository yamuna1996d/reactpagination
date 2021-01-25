import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
class App extends Component {
  state = {
    products: [
      {
      "id": "1",
        "name": "Aark",
        "gender": "Male",
        "salary":"8000"
    },
    {
        "id": "2",
        "name": "Micky",
        "gender": "Male",
        "salary":"8000"
    },
    {
        "id": "3",
        "name": "Mini",
        "gender": "Female",
        "salary":"5000"
    },
    {
        "id": "4",
        "name": "Sara",
        "gender": "Female",
        "salary":"4000"
    },
    {
        "id": "5",
        "name": "Jofy",
        "gender": "Male",
        "salary":"3000"
    },
    {
        "id": "6",
        "name": "Mari",
        "gender": "Female",
        "salary":"5000"
    },
    {
        "id": "7",
        "name": "Donald",
        "gender": "Male",
        "salary":"8000"
    },
    {
        "id": "8",
        "name": "Joby",
        "gender": "Male",
        "salary":"7000"
    },
    {
        "id": "9",
        "name": "Tommy",
        "gender": "Male",
        "salary":"7000"
    },
    {
        "id": "10",
        "name": "Johny",
        "gender": "Male",
        "salary":"5000"
    },
    {
        "id": "11",
        "name": "Kiran",
        "gender": "Male",
        "salary":"4000"
    },
    {
        "id": "12",
        "name": "Raj",
        "gender": "Male",
        "salary":"8000"
    },
    {
        "id": "13",
        "name": "Ravi",
        "gender": "Male",
        "salary":"5000"
    },
    {
        "id": "14",
        "name": "Pete",
        "gender": "Male",
        "salary":"7800"
    },
    {
        "id": "15",
        "name": "Roy",
        "gender": "Male",
        "salary":"7400"
    },
    {
        "id": "16",
        "name": "Steve",
        "gender": "Male",
        "salary":"8000"
    },
    {
      "id": "17",
      "name": "Ron",
      "gender": "Male",
      "salary":"6500"
  },
  {
    "id": "18",
    "name": "Ravi",
    "gender": "Male",
    "salary":"5000"
},
{
    "id": "19",
    "name": "Pete",
    "gender": "Male",
    "salary":"7800"
},
{
    "id": "20",
    "name": "Roy",
    "gender": "Male",
    "salary":"7400"
},
{
    "id": "21",
    "name": "Steve",
    "gender": "Male",
    "salary":"8000"
},
{
  "id": "22",
  "name": "Ron",
  "gender": "Male",
  "salary":"6500"
}
    ],
    columns: [{
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'gender',
      text: 'Gender',
      sort: true
    },
    {
      dataField: 'salary',
      text: 'Salary',
      sort: true
    }]
  } 
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        stripe
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns } 
        pagination={ paginationFactory() }/>
      </div>
    );
  }
}

export default App;