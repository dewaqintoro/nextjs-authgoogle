import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardCompDew from '../components/CardCompDew'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import CardIndo from '../components/CardIndo';
 

const mapStateToProps = (state) =>{
  console.log("state cardContainer wadudu ",state)
  return{
    getCovidPositif: state.covids.getCovidPositif,
    errorCovidPositif: state.covids.errorCovidPositif,
    getCovidSembuh: state.covids.getCovidSembuh,
    errorCovidSembuh: state.covids.errorCovidSembuh
    
  }
}    

class CardContDew extends Component {
  render(props) {
    // console.log("wadudu ",this.props)
    const positif = this.props.getCovidPositif
    const sembuh = this.props.getCovidSembuh
    console.log("wadudu positif",sembuh)
    return (
      <> 
        <CardIndo id="idIndo" ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad_mblguq.png"/> 
        <CardCompDew id="idPositif" headKasus="Positif" jumlahKasus={sembuh.jumlahKasus} ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad_mblguq.png"/>
        <CardCompDew id="idSembuh" headKasus="Sembuh" jumlahKasus={sembuh.sembuh} ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/happy_vg0enk.png"/>
        <CardCompDew id="idMeninggal" headKasus="Meninggal" jumlahKasus={sembuh.meninggal} ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad2_ggbjgz.png"/>
      </>
    )
  }
}

export default connect(mapStateToProps,null) (CardContDew)