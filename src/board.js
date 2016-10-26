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

  likeBoard(){
    if(document.getElementById("likeButton").value == 1)
    {
      document.getElementById("likeButton").value = 0;
      document.getElementById("likeImage").src = "src/resources/img/star2.png";
    } else{
      document.getElementById("likeButton").value = 1;
      document.getElementById("likeImage").src = "src/resources/img/star.png";
    }
  }

  deleteBoard(){
    
  }

}