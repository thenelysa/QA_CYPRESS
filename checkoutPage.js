class CheckoutPage {
  
  addToCartBtn = '.inventory_item:first button';
  cartLink = '.shopping_cart_link';
  cartItem = '.cart_item';

  checkoutBtn = '[data-test="checkout"]';
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueBtn = '[data-test="continue"]';

  overviewSection = '.summary_info';
  finishBtn = '[data-test="finish"]';
  successMsg = '.complete-header';

  getAddToCartBtn() { return cy.get(this.addToCartBtn); }
  getCartLink() { return cy.get(this.cartLink); }
  getCartItem() { return cy.get(this.cartItem); }

  getCheckoutBtn() { return cy.get(this.checkoutBtn); }

  getFirstName() { return cy.get(this.firstName); }
  getLastName() { return cy.get(this.lastName); }
  getPostalCode() { return cy.get(this.postalCode); }
  getContinueBtn() { return cy.get(this.continueBtn); }

  getOverviewSection() { return cy.get(this.overviewSection); }
  getFinishBtn() { return cy.get(this.finishBtn); }
  getSuccessMsg() { return cy.get(this.successMsg); }
cccccc
}

export default new CheckoutPage();