const user = require("../fixtures/user.json");
const selector = require("../fixtures/selector.json");

describe("Admin login", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/");
  });

  it("must log in to your personal account with the correct username and password", () => {
    cy.login(user.login, user.password);
    cy.contains(selector.signEntering).should("be.visible");
  });

  it("must not log in to your personal account with the  incorrect username and password", () => {
    cy.login(user.login, user.wrongPassword);
    cy.contains(selector.loginError).should("be.visible");
  });
});
