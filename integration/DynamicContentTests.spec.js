// Import the DynamicContentPage class
import DynamicContentPage from '../pageObjects/DynamicContentPage';

describe('Dynamic Content Tests', () => {
    const dynamicContentPage = new DynamicContentPage();

    beforeEach(() => {
        // Navigate to a page that has dynamic content, like live sports scores or news updates
        cy.visit('https://www.nba.com/live-updates'); // Adjust URL based on actual usage
    });

    it('Should view live updates', () => {
        // View the section containing live updates
        dynamicContentPage.viewLiveUpdates();
        // Assert something about the live updates, like checking for non-empty content
        cy.get('selector-for-live-update-content').should('not.be.empty');
    });

    it('Should refresh live updates', () => {
        // View and then refresh live updates
        dynamicContentPage.viewLiveUpdates();
        dynamicContentPage.refreshUpdates();
        // You could add a timestamp check or similar to verify new content has loaded
        // Assuming there's a timestamp element that updates upon refresh
        cy.get('selector-for-timestamp').should('contain', 'just now');
    });
});
