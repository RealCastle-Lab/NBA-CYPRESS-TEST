class ProfilePage {
    elements = {
        profileName: () => cy.get('selector-for-profile-name'),
        editProfileButton: () => cy.get('selector-for-edit-profile-button'),
        saveProfileButton: () => cy.get('selector-for-save-profile-button')
    }

    getProfileName() {
        return this.elements.profileName().text();
    }

    editProfile() {
        this.elements.editProfileButton().click();
    }

    saveProfile() {
        this.elements.saveProfileButton().click();
    }
}

export default ProfilePage;
