class LoginPage {
    elements = {
        usernameInput: () => cy.get('selector-for-username-input'),
        passwordInput: () => cy.get('selector-for-password-input'),
        submitButton: () => cy.get('selector-for-submit-button')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    submitLogin() {
        this.elements.submitButton().click();
    }
}

export default LoginPage;
