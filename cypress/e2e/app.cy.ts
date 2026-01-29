describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click({ multiple: true });

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("About");
  });
  it("should navigate to the news page", () => {
    cy.visit("/");
    cy.get('a[href*="news"]').click({ multiple: true });
    cy.url().should("include", "/news");
    cy.get("h1").contains("News");
  });
});

describe("Not Found", () => {
  it("should display not found", () => {
    cy.visit("/blah");
    cy.get("h1").contains("404");
    cy.get("h2").contains("This page could not be found.");
  });
});
