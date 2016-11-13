export class Card {
    cardTitle = "Card";
    description;


    saveCardName(nameCard, description){
    var cardLabel = this.cardNameLabel;
    var inputCardArea = this.inputCardNameArea;
    var editCardBt = this.editCardButton;
    var saveCardBt = this.saveCardButton;
    var desc = this.desc;
    cardLabel.style.display = "inline";
    cardLabel.value = nameCard;
    inputCardArea.style.display = "none";
    saveCardBt.style.display = "none";
    editCardBt.style.display = "inline";
    this.cardTitle = nameCard;
    this.description = description;
    desc.readOnly = true;
  }

  editCardName(){
    var cardLabel2 = this.cardNameLabel;
    var inputCardArea2 = this.inputCardNameArea;
    var editCardBt2 = this.editCardButton;
    var saveCardBt2 = this.saveCardButton;
    cardLabel2.style.display = "none";
    inputCardArea2.style.display = "inline";
    editCardBt2.style.display = "none";
    saveCardBt2.style.display = "inline";
    inputCardArea2.value=this.cardTitle;
    var desc2 = this.desc;
    desc2.readOnly = false;
  }

    deleteCard(){
        
    }
}