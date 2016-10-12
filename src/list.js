import { Card } from './card';
export class List {
  cards = [];
  listTitle = "List";

  newCard() {
    this.cards.push(new Card());
  }
}