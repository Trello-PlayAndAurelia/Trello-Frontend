import { Board } from './board';
import $ from 'jquery';
import jQuery from 'jquery';

export class BoardList {
  boards = [];
  title = "Board List";
  searchText;
  backup = [];



  newBoard(boardName) {
    let boardInfo = { name: boardName };
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:9000/boards",
      data: JSON.stringify(boardInfo),
      dataType: "json",
      success: function (data) {
        alert(data.success.message);
        this.boards = [];

      }, error: function (xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText)
        alert(json.error.message);
      }
    });
    this.boards.push(new Board(boardName));
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