 /** describe('SauceDemo UI Tests', () => {

   context('Checkout Scenarios', () => {
    beforeEach(() => {
      // Step 1: Log in and add an item to cart
      cy.login()
      // Step 2: Add product and go to cart
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_link').click()
      // Verify we're on the cart page
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 1)
    })
     // Test: Successful checkout flow
    it('completes checkout successfully', () => {
      // Click Checkout
      cy.get('[data-test="checkout"]').click()
      cy.url().should('include', '/checkout-step-one.html')
      // Fill in checkout info
      cy.get('[data-test="firstName"]').type('Rohan')
      cy.get('[data-test="lastName"]').type('Nepal')
      cy.get('[data-test="postalCode"]').type('44600')
      cy.get('[data-test="continue"]').click()
      // Verify checkout overview
      cy.url().should('include', '/checkout-step-two.html')
      cy.get('.summary_info').should('be.visible')
      // Finish checkout
      cy.get('[data-test="finish"]').click()
      // Verify success message
      cy.url().should('include', '/checkout-complete.html')
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
    })
  })
})         
**/
import checkoutPage from '../pages/checkoutPage';

describe('SauceDemo UI Tests', () => {

  context('Checkout Scenarios', () => {

    beforeEach(() => {

      // Step 1: Login using custom command
      cy.login();

      // Step 2: Add 1 item to cart
      checkoutPage.getAddToCartBtn().click();

      // Step 3: Go to cart
      checkoutPage.getCartLink().click();

      // Assert: On cart page
      cy.url().should('include', '/cart.html');
      checkoutPage.getCartItem().should('have.length', 1);
    });

    it('completes checkout successfully', () => {

      // Click Checkout
      checkoutPage.getCheckoutBtn().click();
      cy.url().should('include', '/checkout-step-one.html');

      // Fill Checkout Information
      checkoutPage.getFirstName().type('Neelisha');
      checkoutPage.getLastName().type('Shrestha');
      checkoutPage.getPostalCode().type('1');
      checkoutPage.getContinueBtn().click();

      // Step Two - Overview
      cy.url().should('include', '/checkout-step-two.html');
      checkoutPage.getOverviewSection().should('be.visible');

      // Finish checkout
      checkoutPage.getFinishBtn().click();

      // Success Confirmation
      cy.url().should('include', '/checkout-complete.html');
      checkoutPage.getSuccessMsg()
        .should('contain.text', 'Thank you for your order!');
    });

  });

});
