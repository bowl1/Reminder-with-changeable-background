import React, { Component } from "react";
import "./index.css";


export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        // {
        //   title: "a",
        //   checked: true,
        // },
        // {
        //   title: "b",
        //   checked: false,
        // },
        // {
        //   title: "c",
        //   checked: false,
        // },
      ],
      // color1 :"",
      // color2:""
    };
  }

  addData = (e) => {
    let title = this.title.value;
    let tempList = this.state.list;

    if (this.title.value == "") {
      alert("please insert data");
    }

    if (this.title.value != "") {
      tempList.push({
        title: title,
        checked: false,
      });

      this.setState({
        list: tempList,
      });

      this.title.value = "";

      localStorage.setItem("list", JSON.stringify(tempList));
    }
  };

  changeCheck = (key) => {
    let tempList = this.state.list;
    tempList[key].checked = !tempList[key].checked;
    this.setState({
      list: tempList,
    });
    localStorage.setItem("list", JSON.stringify(tempList));
  };

  removeData = (key) => {
    let tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList,
    });
    localStorage.setItem("list", JSON.stringify(tempList));
  };

  componentDidMount() {
    var prelist = JSON.parse(localStorage.getItem("list"));

    if (prelist) {
      this.setState({
        list: prelist,
      });
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{
          background: `linear-gradient( 60deg, ${this.props.color1} , ${this.props.color2}`,
        }}
      >
        <header>
          <div className="title">Reminder </div>
          <input ref={(ref) => (this.title = ref)} />
          <button className="add" onClick={this.addData}>
            +
          </button>
        </header>
        <div className="items">
          <h2 className="todo">Items To Do:</h2>
          <hr />
          <ul class="ul1">
            {this.state.list.map((value, key) => {
              if (!value.checked) {
                return (
                  <li>
                    <input
                      type="checkbox"
                      checked={value.checked}
                      onChange={this.changeCheck.bind(this, key)}
                    />{" "}
                    {value.title}{" "}
                    <button
                      className="delete"
                      onClick={this.removeData.bind(this, key)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="items">
          <h2 className="done">Items Done:</h2>
          <br />
          <hr />
          <br />
          <ul className="ul2">
            {this.state.list.map((value, key) => {
              if (value.checked) {
                return (
                  <li>
                    <input
                      type="checkbox"
                      checked={value.checked}
                      onChange={this.changeCheck.bind(this, key)}
                    />{" "}
                    {value.title}{" "}
                    <button
                      className="delete"
                      onClick={this.removeData.bind(this, key)}
                    >
                      X
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
