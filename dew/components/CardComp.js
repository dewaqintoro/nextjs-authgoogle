import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Logo from "./icon.png";

const CardComp = (props) => {
  // console.log(props.ikon);
  
  return (
        <div className="cardKasus" id={props.id}>
            <h2 id="headKasus">{props.headKasus}</h2>
            <span className="jumlahKasus">
                <p className="kasusIndo kasusIndo2">{props.jumlahKasus}</p>
            </span>
            <div className="roundCard">
              {/* <FontAwesomeIcon icon={props.ikon} /> */}
              <img className="ikonKasus" src={props.ikon}/>
            </div>
        </div>
  )
}

export default CardComp
