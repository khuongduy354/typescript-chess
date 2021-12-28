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
        console.log(yCor);
        break;
      case "b":
        yCor = 1;
        break;
      case "c":
        yCor = 2;
        break;
      case "d":
        yCor = 3;
        break;
      case "e":
        yCor = 4;
        break;
      case "f":
        yCor = 5;
        break;
      case "g":
        yCor = 6;
        break;
      case "h":
        yCor = 7;
        break;
    }
    return new MapCor(xCor, yCor);
  }
};
let dividend = () => {
  console.log(
    "***************************************************************"
  );
};
class GameController {
  constructor() {
    this.game = new ChessBoard();
  }
  private game: ChessBoard;
  move(from: string, to: string): void {
    this.game.move(chessAGToCor(from), chessAGToCor(to));
    this.render();
  }
  render() {
    this.game.renderBoard();
  }
}

let game1 = new GameController();

game1.render();
dividend();

game1.move("e2", "e4");
dividend();
game1.move("e7", "e5");
dividend();
game1.move("g1", "f3");
dividend();
game1.move("g8", "f6");
