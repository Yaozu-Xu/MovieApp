describe("Star page", () => {
    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
    })

    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(3).find("a").click();
        cy.getCypressElement('poster').eq(0).click()
    });

    describe("Layout", () => {
        it('left btn should fixed at the left ', () => {
            cy.getCypressElement('left-btn').should('be.rightOf', '.right-btn')
        })
    })

    describe('Star card', () => {
        it('should render properly', () => {
            cy.getCypressElement('card').invoke('outerWidth').should('eq', 240);
        })
    })
})