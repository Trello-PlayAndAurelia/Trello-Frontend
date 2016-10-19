import { Card } from './card';
export class List {
  cards = [];
  listTitle = "List";

  newCard() {
    this.cards.push(new Card());
  }

  saveListName(nameOfList){
    this.listTitle = document.getElementById("listName").innerHTML;
    alert(this.listTitle);
  }
  
  deleteList(){
    
  }


}