import estilo from "./Card.module.css"
//import React from 'react'
export default function Card(props) {
   return (
      <div className={estilo.card}  >
            <button onClick={()=> props.onClose()}>X</button> 
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <img  src={props.image} alt={props.name} />
      </div>
   );
}
//tambien se puede poner asi onClick{()=>props.onClose()} si la funcion resive parametros si no resive se puede poner solo props,onClose
