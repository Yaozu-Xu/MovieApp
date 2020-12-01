describe('Login page', () => {
    it('should login successfully', () => {
        cy.login(Cypress.env(
            "TEST_UID"
        ));
        cy.wait(500)
        cy.url().should('not.include', '/login')
    })
})