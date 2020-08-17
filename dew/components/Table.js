import React from 'react'
import numeral from "numeral";
import { Button, Row, Col, Spinner,Table } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar } = Search;
const columns = [{
  // dataField: [attributes][FID],
  dataField: 'country',

  text: 'Negara', 
  sort: true
}, {
  dataField: 'cases',
  text: 'Kasus',
  sort: true
}
];
  
const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const Tableku = ({countries}) => {
  console.log("ini countries",countries)
  return (
    <div className="tableku">
      {/* {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))} */}


      {countries ?
      <ToolkitProvider
      keyField="id"
      data={ countries } 
      columns={ columns }
      defaultSorted={ defaultSorted }
      search 
      >
      { 
        props => (
            <div className="">
              <div className="">
                <div className=" searchPersebaran">
                  <SearchBar { ...props.searchProps } />
                </div>
              </div>
              <div className="tabelku">
                <BootstrapTable pagination={ paginationFactory() } striped
                  { ...props.baseProps }
                />
              </div>
            </div>
        )
      }
      
      </ToolkitProvider>:null}


    </div>
  )
}
 
export default Tableku
