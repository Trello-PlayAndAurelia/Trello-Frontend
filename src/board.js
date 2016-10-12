import { List } from './list';

export class Board {
  lists = [];
  boardName= "Board 1";

  newList() {
    this.lists.push(new List());
  }
}