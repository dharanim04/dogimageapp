import React from "react";

export class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "dog",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const newAnimal = this.state.animal === "dog" ? "cat" : "dog";
    console.log(newAnimal);
    this.setState({ animal: newAnimal });
  }

  render() {
    return (
      <div>
        <img
          alt="dog"
          src={
            this.state.animal === "dog"
              ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"
          }
        ></img>
        <button onClick={this.handleClick}>
          I'm more of a {this.state.animal === "dog" ? "cat" : "dog"} person!
        </button>
        <h3>hi This is Dharani</h3>
      </div>
    );
  }
}
