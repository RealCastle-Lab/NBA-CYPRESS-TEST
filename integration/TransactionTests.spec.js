// Import the TransactionPage class
import TransactionPage from '../pageObjects/TransactionPage';

describe('Transaction Tests', () => {
    const transactionPage = new TransactionPage();

    beforeEach(() => {
        // Assume the user is logged in and on a page where they can perform transactions
        // This could be a page with merchandise or tickets
        cy.visit('https://www.nba.com/merchandise'); // Modify this URL to the correct one for your testing
    });

    it('Should add an item to the cart', () => {
        // Simulate adding an item to the cart
        transactionPage.addItemToCart();
        // You should replace 'selector-for-cart-item-count' with the actual selector that shows cart item count
        cy.get('selector-for-cart-item-count').should('contain', '1');
    });

    it('Should proceed to checkout', () => {
        // Add an item first
        transactionPage.addItemToCart();
        // Now proceed to checkout
        transactionPage.checkout();
        // Verify that the checkout page URL is correct
        cy.url().should('include', '/checkout');
    });
});