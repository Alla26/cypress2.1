const selector = require("../fixtures/selector.json");

describe("the main page should be displayed", () => {
  it("should show the correct components", () => {
    cy.visit("/");
    cy.get(selector.title).should("contain.text", "Идёмвкино");
    cy.get(selector.weekday).should("be.visible");
    cy.get(selector.poster).should("be.visible");
  });
});
