import { List } from './list';

export class Board {
  lists = [];
  id;
  boardName;
  url;

  constructor(number) {
    this.id = number;
    this.boardName = 'Board ' + this.id;
    this.url = '#board/' + this.id;
  }

  newList() {
    this.lists.push(new List());
  }
}