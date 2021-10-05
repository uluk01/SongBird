import "./Answer.css";

import React, { Component } from "react";

import OAudioPlayer from "@oovui/audio-player-react";

class Answer extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div className={"bird-details card"}>
        <p className={`instruction ${answer ? "d-none" : "d-block"}`}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div className={`card-body ${answer ? "d-flex" : "d-none"}`}>
          <img src={answer.image} alt="" className="bird-image" />
          <ul
            className={
              "list-group list-group-flush text-center border-0 bg-transparent"
            }
          >
            <li className={"list-group-item"}>
              <h4>{answer.name}</h4>
            </li>
            <li className={"list-group-item"}>
              <span>{answer.species}</span>
            </li>
            <li className={"list-group-item"}>
              <div className="audio-player">
                <OAudioPlayer url={answer.audio} />
              </div>
            </li>
          </ul>
        </div>
        <span className={`bird-description ${answer ? "d-flex" : "d-none"}`}>
          {answer.description}
        </span>
      </div>
    );
  }
}

export default Answer;
