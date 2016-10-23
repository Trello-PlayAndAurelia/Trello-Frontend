import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Login {
  email;
  password;

  constructor(http) {
    this.http = http;
  }

  login(email, password) {
    this.email = email;
    this.password = password;
    let credentials = {
      email: this.email,
      password: this.password
    };
    this.http.fetch('http://localhost:9000/login', {
      method: 'post',
      body: json(credentials)
    }).then(response => response.json())
      .then(credentials => {
        alert(credentials.msg);
      })
      .catch(error => {
        alert('Error saving user!');
      });
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