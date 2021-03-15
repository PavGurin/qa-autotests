import { auth } from "@support/desktop/Authorization";
import { cases } from "@support/desktop/Case";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Play Case", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
    auth.login_for_mobile2();
    cy.wait(1000);
    cases.open_for_mobile();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Case \"Newby\"", function () {

    cases.choose_case_for_mobile();
    cases.button_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
  });
  it("Button \"Play again\" ", function () {
    cases.repeat_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
  });
  it("Button \"Close modal\" ", function () {
    cases.close_modal_container_case_for_mobile();
    cases.assert_case_for_mobile();
  });
});
