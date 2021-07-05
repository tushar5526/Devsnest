"use strict";

const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    if (this.state.pressed) {
      return "Hello World";
    }

    return e(
      "button", //  the element we want to render
      { onClick: () => this.setState({ pressed: true }) }, // the function or event
      "Press this" // the inner text
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(HelloWorld), domContainer);
