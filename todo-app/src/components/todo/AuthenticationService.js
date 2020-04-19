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

}

export default new AuthenticationService();
