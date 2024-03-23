import React, { Component } from "react";
import gif from "./gif.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="center">
        <img src={gif} alt="gif" />
      </div>
    );
  }
}
