import { List } from './list';
import Variable from "./var";
import { log } from "./log";

export class Board {
  boardID;
  lists = [];
  boardName;
  url;

  constructor(name,id) {
    if ( name != null) {
      log.debug(id);
      this.boardID=id;
      this.boardName = name;
      Variable.boardName = name;
      this.url = '#board/' + this.boardName;
    }
  }

  activate(name) {
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:9000/boards/all",
      dataType: "json",
      success: function (data) {
        data.forEach(function (value) {
          if (name.boardId === value.name) {
            value.lists.forEach(function (board) {
              Variable.lists.push(new List());
            });
          }
        });
      }, error: function (xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText)
        alert(json.error.message);
      }
    });
    this.lists = Variable.lists;
    Variable.lists = [];
    this.boardName = name.boardId;
  }




  newList() {
    alert(this.boardID);
    this.lists.push(new List());
  }

  editBoardName(newName) {
    this.boardName = newName;
    var text = this.editNameModal;
    text.value = "";
  }

  likeBoard() {
    if (document.getElementById("likeButton").value == 1) {
      document.getElementById("likeButton").value = 0;
      document.getElementById("likeImage").src = "src/resources/img/star2.png";
    } else {
      document.getElementById("likeButton").value = 1;
      document.getElementById("likeImage").src = "src/resources/img/star.png";
    }
  }

  deleteBoard() {
    alert(this.url);
  }

}