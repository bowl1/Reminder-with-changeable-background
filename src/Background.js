import React, { Component } from "react";
import Reminder from "./Reminder";

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#00FA92",
      color2: "#e61819",
    };
  }

  changeColor = (e) => {
    var color1 = this.state.color1;
    var color2 = this.state.color2;
    if (this.name1) {
      this.setState({ color1: this.name1.value });
    }
    if (this.name2) {
      this.setState({ color2: this.name2.value });
    }
    localStorage.setItem("setColor1", JSON.stringify(color1));
    localStorage.setItem("setColor2", JSON.stringify(color2));
  };

  reset = () => {
    this.setState({ color1: "#00FA92" });
    this.setState({ color2: "#e61819" });
  };

  componentDidMount() {
    var setColor1 = JSON.parse(localStorage.getItem("setColor1"));
    var setcolor2 = JSON.parse(localStorage.getItem("setColor2"));

    this.setState({ color1: setColor1 });
    this.setState({ color2: setcolor2 });
  }

  render() {
    return (
      <div>
        <Reminder color1={this.state.color1} color2={this.state.color2} />
        <footer>
          <div className="inputGroup">
            <label>Please choose the first color </label>
            <input
              className="inputColor"
              type="color"
              name="color1"
              value={this.state.color1}
              ref={(ref) => (this.name1 = ref)}
              onChange={this.changeColor}
            />
          </div>

          <div className="inputGroup">
            <label>Please choose the second color </label>
            <input
              className="inputColor"
              type="color"
              name="color2"
              value={this.state.color2}
              ref={(ref) => (this.name2 = ref)}
              onChange={this.changeColor}
            />
          </div>

          <div className="inputGroup">
            <button className="reset" onClick={this.reset}>
              reset background
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
