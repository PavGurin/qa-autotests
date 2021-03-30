import { basicCom } from "@support/desktop/BasicCommands";

describe("Result", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });
  it("Result", function () {
    basicCom.result_button();
    cy.wait(1000);
    basicCom.assert_result();
  });
});
