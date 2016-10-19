export class Card {
    cardTitle;
    description;


    submit(description) {
        this.cardTitle = document.getElementById("cardName").innerHTML;
        this.description = description;
        var desc = this.desc;
        var edit = this.editCardButton;
        var save = this.saveCardButton;
        edit.style.visibility = "visible";
        save.style.visibility = "hidden";
        desc.readOnly = true;
    }

    editCard(){
        var desc = this.desc;
        var edit = this.editCardButton;
        var save = this.saveCardButton;
        edit.style.visibility = "hidden";
        save.style.visibility = "visible";
        desc.readOnly = false;
    }

    deleteCard(){
        
    }
}