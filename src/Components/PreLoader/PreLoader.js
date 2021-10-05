import "./PreLoader.css";

import React, { Component } from "react";

class PreLoader extends Component {
  render() {
    const { onLoader } = this.props;
    return (
      <div className="container2">
        <div className="loro">
          <div className="circ"></div>
          <div className="circ3"></div>
          <div className="circ5"></div>

          <div className="circ7"></div>
          <div className="ojo"></div>
          <button className={"btn btn-success"} onClick={onLoader}>
            Play
          </button>
          <div className={"logo"}></div>
        </div>
      </div>
    );
  }
}

export default PreLoader;
