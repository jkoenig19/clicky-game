import React, { Component } from "react";
import Background from "./components/Background";
import Images from "./components/Images";
import Title from "./components/Title";
import Bottom from "./components/Bottom";
import pictures from "./pictures.json";

class App extends Component {

  state = {
      pictures,
      message: "Click an image to begin!",
      score: 0,
      top_score: 0
    };

  handleInputChange = id => {
    const selected_Pic = this.state.pictures.filter(picture => picture.id === id);
    if (selected_Pic[0].selection === false){
      const score = this.state.score + 1;
      if (score > this.state.top_score){
        const top_score = score;
        this.setState({ top_score });
      }
      selected_Pic[0].selection = true;
      const pictures = this.state.pictures.sort(() => 0.5 - Math.random())
      const message = "You guessed correctly!"
      this.setState({ pictures, message, score });
    }
    else {
      const score = 0;
      const pictures = this.state.pictures.sort(() => 0.5 - Math.random())
      const all_pictures = this.state.pictures.forEach(picture => picture.selection = false);
      console.log(all_pictures)
      const message = "You guessed incorrectly!"
      this.setState({ pictures, message, score });
    }
  };

  render() {
    return (
      <div>
        <Title
        message={this.state.message}
        score={this.state.score}
        top_score={this.state.top_score}
        />  
        <Background>
          {this.state.pictures.map(picture => (
            <Images
              id={picture.id}
              key={picture.id}
              image={picture.image}
              handleInputChange={this.handleInputChange}
            />
          ))}
        </Background>
        <Bottom/>
      </div>
    );
  }    
}

export default App;