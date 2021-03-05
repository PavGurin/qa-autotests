import { auth } from "@support/desktop/Authorization";
import { cases } from "@support/desktop/Case";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Play Case", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
            .click();
  });
  it("Case \"Newby\"", function () {
    auth.login_for_mobile2();
    cases.open_for_mobile();
    cases.choose_case_for_mobile();
    cases.button_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
  });
  it("Button \"Play again\" ", function () {
    auth.login_for_mobile2();
    cases.open_for_mobile();
    cases.choose_case_for_mobile();
    cases.button_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
    cases.repeat_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
    cases.close_modal_container_case_for_mobile();
    cases.assert_case_for_mobile();
  });
  it("Button \"Close modal\" ", function () {
    auth.login_for_mobile2();
    cases.open_for_mobile();
    cases.choose_case_for_mobile();
    cases.button_open_case_for_mobile();
    cases.modal_container_case_for_mobile();
    cases.close_modal_container_case_for_mobile();
    cases.assert_case_for_mobile();
  });
});
