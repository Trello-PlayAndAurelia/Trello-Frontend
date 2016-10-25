import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
  
let httpClient = new HttpClient();

export class Login {
  email;
  password;


  // constructor(http) {
  //   this.http = http;
    // this.http.configure(config => {
    //   config
    //     .useStandardConfiguration();
    // });
  // }

  login(email, password) {
    this.email = email;
    this.password = password;
    let credentials = {
      email: this.email,
      password: this.password
    };
    httpClient.fetch('http://localhost:9000/login',{
       method:"POST",
       mode:"no-cors",
       body:JSON.stringify(credentials),
       headers:{
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"
       }
    })
      .then(response =>{
        alert(response);
      })

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