class TransactionPage {
    elements = {
        addToCartButton: () => cy.get('.add-to-cart'), // Update with actual selector
        checkoutButton: () => cy.get('.checkout-button') // Update with actual selector
    }

    addItemToCart() {
        this.elements.addToCartButton().click();
    }

    checkout() {
        this.elements.checkoutButton().click();
    }
}

export default TransactionPage;
