import { ChessBoard } from "./chess/Board";
import { MapCor } from "./chess/Coordinates";

//chess algebraic notation to string
let chessAGToCor = (ag: string) => {
  if (!/[a-h][1-8]/.test(ag)) {
    throw new Error("Enter valid move");
  } else {
    var yCor: number = 0;
    var xCor = 8 - parseInt(ag[1]);
    switch (ag[0]) {
      case "a":
        yCor = 0;
      case "b":
        yCor = 1;
      case "c":
        yCor = 2;
      case "d":
        yCor = 3;
      case "e":
        yCor = 4;
      case "f":
        yCor = 5;
      case "g":
        yCor = 6;
      case "h":
        yCor = 7;
    }
    console.log(yCor);
    return new MapCor(xCor, yCor);
  }
};

class GameController {
  constructor() {
    this.game = new ChessBoard();
  }
  private game: ChessBoard;
  move(from: string, to: string): void {
    this.game.move(chessAGToCor(from), chessAGToCor(to));
  }
  render() {
    this.game.renderBoard();
  }
}

// let game1 = new GameController();
let game = new ChessBoard();
game.renderBoard();
// game1.move("a2", "a3");
// game1.render();
