import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Login {
  email;
  password;
  user;

  constructor(http) {
    this.http = http;
    // this.http.configure(config => {
    //   config
    //     .useStandardConfiguration();
    // });
  }

  login(email, password) {
    this.email = email;
    this.password = password;
    //let credentials = '[{"id": 1,"name": "AdamPiech","email": "adampiech7@op.pl"},{"id": 2,"name": "User","email": "user@user.pl"},{"id": 3,"name": "JamesBond","email": "jamesbond007@gmail.com"}]';
    this.http.fetch('http://localhost:9000/users', {
      method: "Get",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        this.user = JSON.parse(response);
      })
      
      alert('Logged in as: ' + this.user[1].name);

  }


  logout() {
    this.login = "";
    this.password = "";
    var button = this.loginButton;
    var logout = this.logoutButton;
    var text = this.loginInfo;
    button.style.visibility = "visible";
    text.style.visibility = "hidden";
    logout.style.visibility = "hidden";
  }
}