describe("Star page", () => {
    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
    })

    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(3).find("a").click();
    });

    describe("Layout", () => {
        it('pupularity should be right of name 26px', () => {
            cy.get('.container-popularity').should('be.rightOf', '.container-name', 26)
        })
        it('right pagniation button should be fixed right', () => {
            cy.get('.pagenation-btn-right').should('be.rightOf', '.container-name');
        })
    })
})