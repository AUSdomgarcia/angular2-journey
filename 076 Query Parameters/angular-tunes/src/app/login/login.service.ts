export class LoginService {

  loggedIn = false;

  login(user, password) {
    if (user && password) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

}
