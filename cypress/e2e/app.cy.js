describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/list-tasks-server-props"]').click();

    cy.get("h1").contains("This is list tasks page using server side props!");
  });
});
