import { List } from './list';

export class Board {
  lists = [];
  boardName;
  url;

  constructor(name) {
    this.boardName = name;
    this.url = '#board/' + this.boardName;
  }

  newList() {
    this.lists.push(new List());
  }

  editBoardName(newName){
    this.boardName = newName;
    var text = this.editNameModal;
    text.value = "";
  }

  deleteBoard(){
    
  }

}