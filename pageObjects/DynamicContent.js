class DynamicContentPage {
    elements = {
        liveUpdateSection: () => cy.get('selector-for-live-updates'),
        refreshButton: () => cy.get('selector-for-refresh-button')
    }

    viewLiveUpdates() {
        this.elements.liveUpdateSection().scrollIntoView();
    }

    refreshUpdates() {
        this.elements.refreshButton().click();
    }
}

export default DynamicContentPage;
