import React from "react";
import "./style.css";

function Images(props) {
    return (
      <div className="card">
        <div className="img-container my-auto">
          <img className="img-fluid" alt={props.id} src={props.image} onClick={() => props.handleInputChange(props.id)}/>
        </div>
      </div>
    );
  }
  
  export default Images;
  