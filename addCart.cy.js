/**describe('SauceDemo UI Tests', () => {

  context('Add to Cart Scenarios', () => {

    // Login once before each test using custom command
    beforeEach(() => {
      cy.login()
    })

    it('adds a single product to the cart', () => {
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.inventory_item').first().find('button').should('have.text', 'Remove')
    })

    it('adds multiple products to the cart', () => {
      cy.get('.inventory_item').eq(0).find('button').click()
      cy.get('.inventory_item').eq(1).find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '2')
    })

    it('verifies items appear in the cart page', () => {
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.shopping_cart_link').click()
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 1)
    })

  })

})
**/
import addCartPage from '../pages/addCart';

describe('SauceDemo UI Tests', () => {

  context('Add to Cart Scenarios', () => {

    beforeEach(() => {
      cy.login();   // Custom login command
      cy.wait(1000); // Wait for 1 second to ensure page loads
    });

    it('adds a single product to the cart', () => {
      addCartPage.getFirstInventoryItem().find('button').click();
      cy.wait(500); // Wait for half a second
      addCartPage.getCartBadge().should('contain', '1');
      cy.wait(500); // Wait for half a second
      addCartPage.getFirstInventoryItem().find('button').should('have.text', 'Remove');
    });

    it('adds multiple products to the cart', () => {
      addCartPage.getInventoryItem(3).find('button').click();
      cy.wait(500); // Wait for half a second
      addCartPage.getInventoryItem(5).find('button').click();
      cy.wait(500); // Wait for half a second
      addCartPage.getCartBadge().should('contain', '2');
    });

    it('verifies items appear in the cart page', () => {
      addCartPage.getFirstInventoryItem().find('button').click();
      cy.wait(500); // Wait for half a second
      addCartPage.getCartBadge().should('contain', '1');
      cy.wait(500); // Wait for half a second
      addCartPage.getCartLink().click();
      cy.wait(1000); // Wait for 1 second
      //checks that the URL contains '/cart.html' to confirm we're on the cart page
      cy.url().should('include', '/cart.html');
      //checks that the cart only contains exactly one item
      addCartPage.getCartItems().should('have.length', 1); 
    });

  });

});
