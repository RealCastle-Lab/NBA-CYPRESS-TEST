// Import the ProfilePage class
import ProfilePage from '../pageObjects/ProfilePage';

describe('Profile Page Tests', () => {
    const profilePage = new ProfilePage();

    beforeEach(() => {
        // Setup code to ensure user is logged in and on their profile page
    });

    it('Should edit and save profile', () => {
        profilePage.editProfile();
        // Assume some edits are made here
        profilePage.saveProfile();
        cy.url().should('include', '/profile');
    });
});
