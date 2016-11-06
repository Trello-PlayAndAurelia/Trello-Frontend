import $ from 'jquery';
import jQuery from 'jquery';
import { log } from "./log";

export class Login {
  email;
  password;
  user;


  login(email, password) {
    this.email = email;
    this.password = password;
    let credentials = { email: this.email, password: this.password };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:9000/login",
      data: JSON.stringify(credentials),
      dataType: "json",
      success: function (data) {
        log.debug(data.success.message + ' as ' + data.success.user.name);
        alert(data.success.message + ' as ' + data.success.user.name);

      }, error: function (xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText)
        alert(json.error.message);
      }
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