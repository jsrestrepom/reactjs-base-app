const AUTHENTICATED_USER_KEY = 'authenticatedUser';

class AuthenticationService {
  registerSuccesfulLogin(username) {
    sessionStorage.setItem(AUTHENTICATED_USER_KEY, username);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER_KEY);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER_KEY);
    return (user !== null);
  }

  getLoggedInUsername() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER_KEY);
    if (user === null) {
      return '';
    } else {
      return user;
    }
  }

}

export default new AuthenticationService();
