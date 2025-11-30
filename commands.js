Cypress.Commands.add('login', () => {
  cy.visit('https://www.saucedemo.com/',{timeout:10000}); // Increased timeout for page load
  cy.fixture('userData').then((user) => {
    cy.get('#user-name', {timeout:10000}).type(user.username);
    cy.get('#password').type(user.password);
    cy.get('#login-button').click();

    // Verify login
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });
});
