class GuestLoginPage {
  login() {
    console.log("Basic login");
  }
}

class RegisterLoginPage extends GuestLoginPage {
  login() {
    console.log("Login with OTP");
  }
}

const page = new GuestLoginPage();
page.login(); // Login with OTP