import { List } from './list';

export class App {
  lists = [];
  heading = "Trello";
  login;
  password;

  newList() {
    this.lists.push(new List());
  }

  loggin(login) {
    this.login = login;
    var button = this.loginButton;
    var logout = this.logoutButton;
    var text = this.loginInfo;
    button.style.visibility = "hidden";
    text.style.visibility = "visible";
    logout.style.visibility="visible";
  }
    logout() {
    var button = this.loginButton;
    var logout = this.logoutButton;
    var text = this.loginInfo;
    button.style.visibility = "visible";
    text.style.visibility = "hidden";
    logout.style.visibility="hidden";
  }

}