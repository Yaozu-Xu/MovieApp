describe('Favourite Movie Page', () => {

    before(() => {
        cy.login(Cypress.env(
            "TEST_UID"
        ));
    })

    beforeEach(() => {
        cy.visit(`/`);
        localStorage.setItem('login', '1')
        cy.get("nav").find("li").eq(2).find("a").click();
    });

    describe('UI rendering test', () => {
        it('should toggle side drawer when clicking', () => {
            cy.getCypressElement('toggle-btn').click()
            cy.getCypressElement('side-drawer').should('be.visible')
        })
    })

    describe('Saved stars rendering tests', () => {
        it('should render saved stars for specific login user ', () => {
            cy.getCypressElement('toggle-btn').click()
            cy.getCypressElement('side-drawer').should('be.visible')
            cy.getCypressElement('star-container').should('not.have.length', 0)
        })
    })
})