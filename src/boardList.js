import { Board } from './board';

export class BoardList {
  boards = [];
  title= "Board List";

  newBoard(name) {
      this.boards.push(new Board(name));
      var text = this.newBoardModalText;
      text.value = "";
  }
}