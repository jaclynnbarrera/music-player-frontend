import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = { likes: 0 };
  }

  handleClick() {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>like</button>
        <p>likes: {this.state.likes}</p>
      </div>
    );
  }
}

export default Button;
