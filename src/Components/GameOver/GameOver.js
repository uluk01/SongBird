import React, { Component } from "react";

class GameOver extends Component {
  render() {
    const { score, restartGame, endGame } = this.props;
    return (
      <div className={"jumbotron game-over"}>
        {score < 30 && (
          <div>
            <h1 className={"display-3 text-center"}>Поздравляем!</h1>
            <p className={"lead text-center"}>
              {`Вы прошли викторину и набрали ${score}  из 30 возможных баллов`}
            </p>
            <hr className={"my-4"} />
            <button
              className={"btn btn-primary btn-game-over"}
              onClick={restartGame}
            >
              Попробовать еще раз!
            </button>
          </div>
        )}
        {score >= 30 && (
          <div>
            <h1 className={"display-3 text-center"}>Поздравляем!!!</h1>
            <p className={"lead text-center"}>
              {`Вы прошли викторину и набрали максимальное количество балов ${score}`}
            </p>
            <h4 className={"text-center"}>
              Вам присуждается звание: "Птичий мастер"
            </h4>
            <button onClick={endGame} className={"btn btn-primary"}>
              {" "}
              Выйти из игры
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GameOver;
