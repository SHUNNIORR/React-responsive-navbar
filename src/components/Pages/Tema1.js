import React, {Fragment} from "react";
import info from "../../assets/infografia.jpg";
import cruci1 from "../../assets/crucitema1.jpeg";
import "./Pages.css";

export const Tema1 = () => {
  return (
    <Fragment>
      <div className="imagen-infogra">
        <img src={info} width='800' alt="hola" >

        </img>
        <div className="crucigrama">
          <h3>¡Pongamos en practica lo que aprendimos!</h3>
          <img src={cruci1} width='800' alt="hola" >
          </img>
          <p>¡Entra en el siguiente link para poder resolver el crucigrama!</p>
          <a rel="noreferrer" href="https://puzzel.org/es/crossword/play?p=-Mb3cMrYksSU4bkHY_PY" target="_blank">Click aquí</a>
        </div>
        
      </div>
      
    </Fragment>
    
  );
};