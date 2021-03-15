import { basicCom } from "@support/desktop/BasicCommands";


describe("Result for mobile", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
  });
  beforeEach(function () {
  });
  it("Result", function () {
    basicCom.result_button_for_mobile();
    basicCom.assert_result_for_mobile();
  });
});
