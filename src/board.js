import { List } from './list';
import { Variable } from "./var";
import { log } from "./log";

export class Board {
  boardID;
  lists = [];
  boardName;
  url;
  favourite;

  constructor(name, id) {
    this.boardID = id;
    this.boardName = name;
    this.url = '#board/' + this.boardID;
  }

  attached() {
    this.boardName = Variable.boardName;
    Variable.boardName = "";
  }

  activate(name) {
    Variable.lists = [];

    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:9000/boards?id=" + name.boardId,
      dataType: "json",
      success: function (data) {
        Variable.boardName = data.name;
        for (var i = 0; i < data.lists.length; i++) {
          Variable.lists.push(new List(data.lists[i]));
        }
      }, error: function (xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText)
        alert(json.error.message);
      }
    });
    this.lists = Variable.lists;
    this.boardID=name.boardId;
  }




  newList() {
    let listName = { name: 'List' };
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:9000/lists?boardId="+this.boardID,
      data: JSON.stringify(listName),
      dataType: "json",
      success: function (data) {
        alert(data.success.message);
      }, error: function (xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText)
        alert(json.error.message);
      }
    });
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
      this.favourite = true;

    } else {
      document.getElementById("likeButton").value = 1;
      document.getElementById("likeImage").src = "src/resources/img/star.png";
      this.favourite = false;
    }
  }

  deleteBoard() {
    alert(this.url);
  }

}