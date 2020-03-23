import React from "react";
import "./style.css";

function Title(props) {
    return (
      <div className="title">
        <nav className="navbar fixed-top">
            <a className="navbar-brand ml-5" href="https://jkoenig19.github.io/clicky-game/">Clicky Game</a>
            {props.message === "Click an image to begin!" ? 
            (<span className="navbar-text message">{props.message}</span>)
            : (<div>
              {props.message === "You guessed correctly!" ?
              (<div>
                {props.animate > 0 && props.animate % 2 !== 0 ? 
                (<span className="navbar-text message-green1">{props.message}</span>)
                :
                (<span className="navbar-text message-green2">{props.message}</span>)
                }                
              </div>
              )
              : 
              (<span className="navbar-text message-red">{props.message}</span>)
              }
            </div>
            )}
            <span className="navbar-text mr-3">Score: {props.score} | Top Score: {props.top_score}</span>
        </nav>

        <div className="jumbotron">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    );
  }

  export default Title;
  