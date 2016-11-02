import $ from 'jquery';
import jQuery from 'jquery';

export class Signup {
  login;
  email;
  password;

  signup(login, email, password, retypedPassword) {
    if (password === retypedPassword) {
      this.login = login
      this.email = email;
      this.password = password;
      let credentials = { name: this.login, email: this.email, password: this.password };

      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "http://localhost:9000/signup",
        crossDomain: true,
        data: JSON.stringify(credentials),
        dataType: "json",
        success: function (data) {
          alert(data.success.message);
        }, error: function (xhr, ajaxOptions, thrownError) {
          var json = JSON.parse(xhr.responseText)
          alert(json.error.message);
        }
      });
    } else {
      alert("Passwords doesn't match");
    }
  }
}