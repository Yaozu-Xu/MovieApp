const page = 1
let starsList
let specifiedStar

describe("Star page", () => {
    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
        cy.request(
                `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                    "TMDB_KEY"
                  )}&language=en-US&page=${page}`
            )
            .its("body")
            .then((response) => {
                starsList = response.results
                specifiedStar = starsList[0]
            })
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

    describe('Render api data', () => {
        it('should render stars list', () => {
            cy.getCypressElement('star-list').should('have.length', starsList.length)
        })
    })

    describe('Specfic star', () => {
        it('should render specfied star properly', () => {
            cy.getCypressElement('star-name').eq(0).should('have.text', specifiedStar.name)
        })
        it('should load the profile properly', () => {
            cy.getCypressElement('star-profile').eq(0).invoke('attr', 'src').should('include', specifiedStar.profile_path)
        })
        it('should load the known_for movies properly', () => {
            const selector = 'known-for-' + specifiedStar.id
            cy.getCypressElement(selector).should('have.length', specifiedStar.known_for.length)
        })
    })
})