import React from 'react'
import { Button, Row, Col, Spinner,Table } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
 

const { SearchBar } = Search;
const columns = [{
  // dataField: [attributes][FID],
  dataField: 'fid',

  text: 'ID', 
  sort: true
}, {
  dataField: 'provinsi',
  text: 'Provinsi',
  sort: true
}, {
  dataField: 'kasusPosi',
  text: 'Positif',
  sort: true
}, {
  dataField: 'kasusSemb',
  text: 'Sembuh',
  sort: true
}, {
  dataField: 'kasusMeni',
  text: 'Meninggal',
  sort: true
}
];
  
const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const mapStateToProps = (state) => {
  console.log("state tabel provinsi",state.covids.getCovidPositif.data)
  return {
    getCovidsList: state.covids.getCovidPositif.data,
    errorCovidsList: state.covids.errorCovidsList
  }
}


const TableCompDew = (props) => {
  console.log("tabel",props);
  
  return (
    <>
      {props.getCovidsList ?
      <ToolkitProvider
      keyField="id"
      data={ props.getCovidsList } 
      columns={ columns }
      defaultSorted={ defaultSorted }
      search 
      >
      { 
        props => (
            <div className="table1">
              <div className="row topTable">
                <div className="col-9">
                  <h5>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h5>
                  <hr/>
                </div>
                <div className="col-3 search">
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
      </>
  )
}

export default connect(mapStateToProps,null) (TableCompDew)
