export class Card {
    cardTitle;
    description;


    submit(title, description) {
        this.cardTitle = title;
        this.description = description;
        var title = this.title;
        var desc = this.desc;
        var edit = this.editButton;
        var save = this.saveButton;
        edit.style.visibility = "visible";
        save.style.visibility = "hidden";
        desc.readOnly = true;
        title.readOnly = true;
    }
    edit(){
        var title = this.title;
        var desc = this.desc;
        var edit = this.editButton;
        var save = this.saveButton;
        edit.style.visibility = "hidden";
        save.style.visibility = "visible";
        desc.readOnly = false;
        title.readOnly = false;
    }
}