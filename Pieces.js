"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blank = exports.Pawn = exports.King = exports.Queen = exports.Knight = exports.Rook = exports.Bishop = void 0;
class Bishop {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "B" : "b";
    }
    //can move from A to B
    canMove(board, from, to) {
        //TODO: implement this
        // if (board.getPiece(from).toString() !== this.toString()) return false;
        // if (from.xCor === to.xCor && from.yCor === to.yCor) return true;
        // //Bishop move check
        // if (Math.abs(to.xCor - from.xCor) === Math.abs(to.yCor - from.yCor)) {
        //   let coX = to.xCor > from.xCor ? 1 : -1;
        //   let coY = to.xCor > from.xCor ? 1 : -1;
        //   while (from.xCor !== to.xCor && from.yCor !== to.yCor) {
        //     from.xCor += coX;
        //     from.yCor += coY;
        //     if (board.getPiece(from).isWhite === this.isWhite) {
        //       return false;
        //     }
        //   }
        //   return true;
        // } else {
        //   return false;
        // }
        return true;
    }
}
exports.Bishop = Bishop;
class Rook {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "R" : "r";
    }
    canMove(board, from, to) {
        return true;
    }
}
exports.Rook = Rook;
class Knight {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "N" : "n";
    }
    canMove(board, from, to) {
        return true;
    }
}
exports.Knight = Knight;
class Queen {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "Q" : "q";
    }
    canMove(board, from, to) {
        return true;
    }
}
exports.Queen = Queen;
class King {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "K" : "k";
    }
    canMove(board, from, to) {
        return true;
    }
}
exports.King = King;
class Pawn {
    constructor(isWhite) {
        this.isWhite = isWhite;
    }
    toString() {
        return this.isWhite ? "P" : "p";
    }
    canMove(board, from, to) {
        return true;
    }
}
exports.Pawn = Pawn;
class Blank {
    toString() {
        return "-";
    }
    canMove() {
        return false;
    }
}
exports.Blank = Blank;
