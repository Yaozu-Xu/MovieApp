let movieId = null
let movie;
let reviews;
describe("Movie Details Page", () => {
  cy.visit(`/`);
  cy.get(".card").eq(2).find("img").click();

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  
  it("should display the poster image correctly", () => {
  cy.get("img")
    .should("have.attr", "src")
    .should("include", movie.poster_path)
  });  
});
