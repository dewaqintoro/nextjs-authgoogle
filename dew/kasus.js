import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';

 
import { connect } from 'react-redux'
import TableCompDew from './components/TableCompDew';
import CardContDew from './containers/CardContDew';

  
// const mapStateToProps = (state) => {
//   return {
//     covids: state.covids.covids
//   }
// }
// console.log("wadudu",mapStateToProps);

import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { getCovidsList,getCovidIndo,getCovidPositif,getCovidSembuh } from '../actions';

 
 
class Kasus extends Component {
   
  componentDidMount(){
    this.props.dispatch(getCovidsList());
    this.props.dispatch(getCovidIndo());
    this.props.dispatch(getCovidPositif())
    this.props.dispatch(getCovidSembuh())
    console.log("covid provinsi",this.props.dispatch(getCovidPositif()));
 } 
  render() {
    return (
      <> 
        <div className="row satu1">
          {/* <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptates delectus, ullam et iusto iure placeat asperiores, sapiente impedit ad, error nemo. Iste consectetur modi veritatis rerum, dolore molestiae eos? Velit expedita blanditiis pariatur dolore quibusdam possimus perspiciatis voluptatem doloribus maiores adipisci libero aspernatur explicabo unde, quod reiciendis ea tenetur. Pariatur aut dicta aperiam itaque adipisci, non ducimus recusandae natus quam, sapiente quo ea aliquid, temporibus nam dolores minima tempore doloremque! In sapiente laudantium necessitatibus consectetur quod deleniti rem cumque alias adipisci! Dolore hic sapiente dicta rerum, necessitatibus adipisci laborum maiores eos unde voluptatum assumenda reprehenderit ipsum sint voluptatem deserunt!</h1> */}
          
          {/* <div className="col-3 car">
            <div className="car1">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </Card>
            </div>
          </div> */}
          <CardContDew/>

        </div>
 
        <div className="row dua2">
          <div className="col-12">
            {/* <h1>Dua</h1> */}
          <TableCompDew/>
          </div>
        </div>
        </>
    )
  }
}


export default connect() (Kasus)
// export default Kasus
