// Import the LoginPage class
import LoginPage from '../pageObjects/LoginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Visit the NBA home page and navigate to login
        cy.visit('https://www.nba.com/');
        loginPage.goToLoginPage();
    });

    it('Should log in a user', () => {
        // Perform login
        loginPage.typeUsername('user@example.com');
        loginPage.typePassword('password123');
        loginPage.submitLogin();
        cy.url().should('include', '/profile');
    });
});
