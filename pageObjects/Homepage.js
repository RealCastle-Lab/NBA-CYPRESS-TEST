class HomePage {
    elements = {
        loginButton: () => cy.get('selector-for-login-button'),
        latestGamesSection: () => cy.get('selector-for-latest-games'),
        newsArticleLinks: () => cy.get('selector-for-news-articles')
    }

    goToLoginPage() {
        this.elements.loginButton().click();
    }

    viewLatestGames() {
        this.elements.latestGamesSection().scrollIntoView();
    }

    readArticle(articleIndex) {
        this.elements.newsArticleLinks().eq(articleIndex).click();
    }
}

export default HomePage;
