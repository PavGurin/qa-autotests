
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
import "cypress-plugin-snapshots/commands";
import "./commands";


beforeEach(function () {
  cy.log("I run before every test in every spec file!!!!!!");
  //cy.setCookie("session-id", "", { domain: "1win-auth.com" });
  // cy.reload();
  // cy.visit("");
});
