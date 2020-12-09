describe("Star Detail page", () => {
    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
        cy.login(Cypress.env(
            "TEST_UID"
        ));
    })

    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(3).find("a").click();
        cy.wait(500)
    });

    describe("Layout", () => {
        it('left btn should fixed at the left ', () => {
            cy.getCypressElement('star-name').eq(0).click()
            cy.getCypressElement('left-btn').should('be.rightOf', '.right-btn')
        })
        it('should naviagate to next page', () => {
            cy.getCypressElement('star-name').eq(0).click()
            cy.getCypressElement('right-btn').click({force: true})
            cy.url().should('include', '/people')
        })
    })

    describe('Star card', () => {
        it('should render properly', () => {
            cy.getCypressElement('star-name').eq(0).click()
            cy.getCypressElement('card').invoke('outerWidth').should('eq', 240);
        })
    })
})