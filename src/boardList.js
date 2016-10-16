import { Board } from './board';

export class BoardList {
  boards = [];
  title= "Board List";

  newBoard() {
      var number = this.boards.length;
      this.boards.push(new Board(number+1));
  }
}