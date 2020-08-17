import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';



const mapStateToProps = (state) =>{
  // console.log("state cardIndo ",state)
  return{
    getCovidIndo: state.covids.getCovidIndo,
    errorCovidIndo: state.covids.errorCovidIndo
  }
}
const CardIndo = (props) => {
  const data = props.getCovidIndo[0]
  // console.log("ini data",data.name)
  // console.log("props card banget",props.getCovidIndo);
    
  return (
        // <div className="cardKasus">
        //     <h2 id="headKasus">{data.name}</h2>
        //     <span className="jumlahKasus">
        //     <p className="kasusIndo">Meninggal : {data.meninggal}</p>
        //     <p className="kasusIndo">Positig : {data.positif}</p>
        //     <p className="kasusIndo">Sembuh : {data.sembuh}</p>
        //     </span>
        //     <div className="roundCard roundCard1"></div>
        // </div>


        // <div className="col-sm-3 car">
        //   <Card body inverse id={props.id} className="car1 cardKasus">
        //     <h2 id="headKasus">{data.name}</h2>
        //     <span className="jumlahKasus">
        //       <p className="kasusIndo">Meninggal : {data.meninggal}</p>
        //       <p className="kasusIndo">Positig : {data.positif}</p>
        //       <p className="kasusIndo">Sembuh : {data.sembuh}</p>
        //     </span>
        //     <div className="roundCard" id="roundCard1">
        //       <img className="ikonKasus" src={props.ikon}/>
        //     </div>
        //   </Card>
        // </div>


        <div className="col-sm-3 car">
          <Card body inverse id={props.id} className="car1 cardKasus">
            <h2 id="headKasus">Dunia</h2>
            <span className="jumlahKasus">
              <p className="kasusIndo kasusIndo1">Meninggal : 768,969</p>
              <p className="kasusIndo kasusIndo1">Positif : 21,615,334</p>
              <p className="kasusIndo kasusIndo1">Sembuh : 14,329,742</p>
            </span>
            <div className="roundCard" id="roundCard1">
              <img className="ikonKasus" src={props.ikon}/>
            </div>
          </Card>
        </div>
    
  )
}

export default connect(mapStateToProps,null) (CardIndo)
