import { Card } from './card';
import { Variable } from './var';
import { log } from "./log";

export class List {
  listId;
  cards = [];
  listTitle = "List";

  constructor(lists) {
    if (lists != null) {
      Variable.cardList = lists.cards;
    }
    log.debug(Variable.cardList);

  }

  activate() {
    this.cards = Variable.cardList.slice();
  }

  newCard() {
    this.cards.push(new Card());
  }

  saveListName(nameList) {
    var listLabel = this.listNameLabel;
    var inputListArea = this.inputNameArea;
    var editListBt = this.editListButton;
    var saveListBt = this.saveListButton;
    listLabel.style.display = "inline";
    inputListArea.style.display = "none";
    saveListBt.style.display = "none";
    editListBt.style.display = "inline";
    this.listTitle = nameList;
  }

  shiftBoardsRight() {

  }

  shiftBoardsLeft() {

  }

  editListName() {
    var listLabel2 = this.listNameLabel;
    var inputListArea2 = this.inputNameArea;
    var editListBt2 = this.editListButton;
    var saveListBt2 = this.saveListButton;
    listLabel2.style.display = "none";
    inputListArea2.style.display = "inline";
    inputListArea2.value = this.listTitle;
    editListBt2.style.display = "none";
    saveListBt2.style.display = "inline";
  }

  deleteList() {
    log.debug(Variable.lists);
  }

  archiveList() {

  }


}