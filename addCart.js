class AddCartPage {

  inventoryItem = '.inventory_item';
  addCartBtn = 'button';
  cartBadge = '.shopping_cart_badge';
  cartLink = '.shopping_cart_link';
  cartItem = '.cart_item';

  getInventoryItem(index) { 
    return cy.get(this.inventoryItem).eq(index); 
  }

  getFirstInventoryItem() { 
    return cy.get(this.inventoryItem).first(); 
  }

  getCartBadge() { 
    return cy.get(this.cartBadge); 
  }

  getCartLink() { 
    return cy.get(this.cartLink); 
  }

  getCartItems() { 
    return cy.get(this.cartItem); 
  }
}

export default new AddCartPage();
