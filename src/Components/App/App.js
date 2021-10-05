import "./App.css";

import React, { Component } from "react";

import Answer from "../Answer/Answer";
import Birds from "../Birds/Birds";
import GameOver from "../GameOver/GameOver";
import Header from "../Header/Header";
import { Howl } from "howler";
import PreLoader from "../PreLoader/PreLoader";
import Questions from "../Questions/Questions";
import birdsData from "../birdsData";
import levelUp from "../../audio/lavelUp.mp3";
import win from "../../audio/win.mp3";

class App extends Component {
  state = {
    data: birdsData,
    answer: false,
    count: 0,
    loader: true,
    btn: false,
    randomBird: Math.floor(Math.random() * 5) + 1,
    index: 0,
    gameOver: false,
  };
  count = 0;

  answerCount(count) {
    let score = this.state.count;
    score += count;
    this.setState({ count: score });
    this.setState({ btn: true });
  }

  answerClick(item) {
    this.setState({ answer: item });
  }

  Loader() {
    this.setState({ loader: false });
  }

  onSort() {
    this.count++;
    this.setState({
      randomBird: Math.floor(Math.random() * 5),
      answerData:
        this.state.data[this.state.index][Math.floor(Math.random() * 5)],
    });
    [...document.querySelectorAll(".list-group-item")].map((item) => {
      item.classList.remove("success");
      item.classList.remove("error");
      return item;
    });
    this.setState({
      btn: false,
      answer: false,
      index: this.count,
    });
    if (this.count >= 6) {
      this.setState({ gameOver: true });
      const sound = new Howl({
        src: [win],
        autoplay: false,
        loop: false,
        volume: 0.5,
      });
      sound.play();
    } else {
      const sound = new Howl({
        src: [levelUp],
        autoplay: false,
        loop: false,
        volume: 0.5,
      });
      sound.play();
    }
  }

  restartGame() {
    this.setState({
      gameOver: false,
      index: 0,
      count: 0,
    });
    this.count = 0;
  }
  endGame() {
    this.restartGame();
    this.setState({ loader: true });
  }

  render() {
    return (
      <div className="container">
        {this.state.loader && <PreLoader onLoader={this.Loader.bind(this)} />}
        {!this.state.loader && (
          <div>
            <Header count={this.state.count} index={this.state.index} />
            {!this.state.gameOver && (
              <Questions
                data={this.state.data[this.state.index][this.state.randomBird]}
                true2={this.state.btn}
                answer={this.state.answer}
              />
            )}
            {!this.state.gameOver && (
              <div className="row mb-2">
                <div className="col-md-6">
                  <Birds
                    answerCount={this.answerCount.bind(this)}
                    answerClick={this.answerClick.bind(this)}
                    randomBird={this.state.randomBird}
                    data={this.state.data}
                    error={this.state.btn}
                    index={this.state.index}
                  />
                </div>
                <div className="col-md-6">
                  <Answer answer={this.state.answer} />
                </div>
                <button
                  className={`btn ${this.state.btn ? "btn-success" : ""}`}
                  disabled={!this.state.btn}
                  onClick={this.onSort.bind(this)}
                >
                  {" "}
                  Next Level
                </button>
              </div>
            )}
            {this.state.gameOver && (
              <GameOver
                score={this.state.count}
                restartGame={this.restartGame.bind(this)}
                endGame={this.endGame.bind(this)}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
