import { Board } from './board';

export class BoardList {
  boards = [];
  title = "Board List";
  searchText;
  backup = [];

  newBoard(name) {
    this.boards.push(new Board(name));
    var text = this.newBoardModalText;
    text.value = "";
  }
  boardSearch(searchText) {
    this.searchText = searchText;
    let filtered = [];
    if (this.backup.length === 0) {
      this.backup = this.boards;
    }
    if (this.searchText) {



      for (var index = 0; index < this.boards.length; index++) {
        if (this.boards[index].boardName.indexOf(this.searchText) !== -1) {
          filtered.push(this.boards[index]);
        }
      }
      this.boards = filtered;
    }
    else {
      this.boards = this.backup;
    }

  }
}