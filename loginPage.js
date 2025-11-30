class LoginPage {
  username = '#user-name';
  password = '#password';
  submitBtn = '#login-button';

  getUsername() { return cy.get(this.username); }
  getPassword() { return cy.get(this.password); }
  getSubmitBtn() { return cy.get(this.submitBtn); }
}

export default new LoginPage();
