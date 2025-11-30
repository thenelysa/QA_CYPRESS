import loginPage from '../pages/loginPage';

describe('User data Login Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login with valid credentials', () => {
    cy.fixture('userData').then((user) => {
      loginPage.getUsername().type(user.username);
      loginPage.getPassword().type(user.password);
      loginPage.getSubmitBtn().click();

      // Verify successful login
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });

});
