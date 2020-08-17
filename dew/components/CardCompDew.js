import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const CardCompDew = (props) => {
  // console.log(props.ikon);
    
  return (
    // <div className="cardKasus" id={props.id}>
    //   <h2 id="headKasus">{props.headKasus}</h2>
    //   <span className="jumlahKasus">
    //       <p className="kasusIndo">{props.jumlahKasus}</p>
    //   </span>
    //   <div className="roundCard">
    //     {/* <FontAwesomeIcon icon={props.ikon} /> */}
    //     <img className="ikonKasus" src={props.ikon}/>
    //   </div>
    // </div>

    // <Card body inverse color="primary" className="cardKasus" id={props.id}>
    //   <h2 id="headKasus">{props.headKasus}</h2>
    //   <span className="jumlahKasus">
    //     <p className="kasusIndo">{props.jumlahKasus}</p>
    //   </span>
    //   <div className="roundCard">
    //     <img className="ikonKasus" src={props.ikon}/>
    //   </div>
    // </Card>  
  
    <div className="col-sm-3 car"> 
      <Card body inverse id={props.id} className="car1 cardKasus">
        
        <h2 id="headKasus">{props.headKasus}</h2>
        <span className="jumlahKasus">
         <p className="kasusIndo kasusIndo2">{props.jumlahKasus}</p>
        </span>
        {/* <img id="imgPositif" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1597233852/icon/efek_hrhw3p.png"/> */}
        <div className="roundCard">
          <img className="ikonKasus" src={props.ikon}/>
        </div>
      </Card>
    </div>
  )
}

export default CardCompDew
