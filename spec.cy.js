describe('Login Page', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    describe('Sauce Demo Login Test', () => {

  it('logs in successfully with valid credentials', () => {
    //Open the website
    cy.visit('https://www.saucedemo.com/');

    //username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    //login button
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html'); // check if it works or not
  });
});
  })
  it('Shouldnot login with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('Neelisha');
    cy.get('#password').type('nelboo123');
    cy.get('#login-button').click();
  })
})