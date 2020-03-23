import React from "react";
import "./style.css";

function Background(props) {
    return (
      <div>
        {props.message !== "You guessed incorrectly!" ? 
        <div className="background">{props.children}</div>
        : 
        <div className="background incorrect">{props.children}</div>
        }
      </div>
    );
  }
  
  export default Background;
  