describe('SauceDemo UI Tests', () => {
  context('Login Scenarios', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
    })
    // Positive Test: Valid login credentials
    it('logs in successfully with valid credentials', () => {
      cy.get('#login-button').click()
      // Verify user is redirected to the Products page
      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('have.text', 'Products')
    })

    // Negative Test: Invalid username and password
    it('shows error message for invalid credentials', () => {
      cy.get('#user-name').type('wrong_user')
      cy.get('#password').type('wrong_pass')
      cy.get('#login-button').click()
      // Verify error message is displayed
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password do not match')
    })
  })
})
  describe('Sacuce UI Tests', () => {
   beforeEach(() => {
     cy.visit('https://www.saucedemo.com/');
     })
     it('shows error when username is missing', () => {
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      // Verify error message is displayed
      cy.get('[data-test="error"]').should('contain.text', 'Username is required')
    })
  })
  

  describe('SauceDemo UI Tests', () => {

   context('Add to Cart Scenarios', () => {
    // Runs before each test — logs in and lands on the Products page
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      // Nagivate to inventory page
      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('have.text', 'Products')
    })

    // Test: Add one product to cart
    it('adds a single product to the cart', () => {
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      // Verify button text changes to "Remove"
      cy.get('.inventory_item').first().find('button').should('have.text', 'Remove')
    })

    //  Test: Add multiple products to cart
    it('adds multiple products to the cart', () => {
      // Add first two products
      cy.get('.inventory_item').eq(0).find('button').click()
      cy.get('.inventory_item').eq(1).find('button').click()
      // Verify cart badge shows count = 2
      cy.get('.shopping_cart_badge').should('contain', '2')
    })

    // Test: Verify items appear in the cart page
    it('verifies items appear in the cart page', () => {
      // First add one product 
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      // Open cart page
      cy.get('.shopping_cart_link').click()
      // Verify correct URL and product count
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 1)
    })
  })

  context('Checkout Scenarios', () => {
    beforeEach(() => {
      // Step 1: Log in and add an item to cart
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
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
      cy.get('[data-test="firstName"]').type('Neelisha')
      cy.get('[data-test="lastName"]').type('Shrestha')
      cy.get('[data-test="postalCode"]').type('12345')
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
