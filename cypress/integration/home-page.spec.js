describe("Home Page tests", () => {
  it("should have linked in button and link to linked in", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".home-linked-in-link")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/jdiperi");
    cy.get(".home-linked-in-link").click();
  });
  it("should have github in button and link to github in", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".home-github-link")
      .should("have.attr", "href")
      .and("include", "https://github.com/jdiperi88");
    cy.get(".home-github-link").click();
  });

  it("should have resume in button and link to resume in", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".home-resume-link")
      .should("have.attr", "href")
      .and("include", "jdiperi_resume.pdf");
    cy.get(".home-resume-link").click();
  });
});
