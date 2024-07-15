// Import the HomePage class
import HomePage from '../pageObjects/HomePage';

describe('Home Page Tests', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        // Visit the NBA home page before each test
        cy.visit('https://www.nba.com/');
    });

    it('Should navigate to login page', () => {
        // Use the HomePage to navigate to the login page
        homePage.goToLoginPage();
        cy.url().should('include', '/login');
    });

    it('Should view latest games', () => {
        // Interact with the latest games section
        homePage.viewLatestGames();
        cy.url().should('include', '/games');
    });
});
