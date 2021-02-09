import { auth } from "@support/desktop/Authorization";
import { shot } from "@support/desktop/Screenshots";
import { cases } from "@support/desktop/Case";

describe("Play Case", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    auth.loginNew();
    cy.wait(2000);

  });
  it("C521875 - Case \"Новичок\"", function () {
    shot.case_button();
    cases.button_open_case();
    shot.case_classic();
    cy.wait(1000);
    cases.modal_container_case();
  });
  it("Кнопка- моментальное открытие", function () {
    shot.case_button();
    cases.button_open_case();
    cases.momentOpenCase();
    shot.case_classic();
    cases.modal_container_case();
  });
  it("Кнопка- Автооткрытие", function () {
    shot.case_button();
    cases.button_open_case();
    cases.autoOpenCase();
    cy.wait(1000);
    cases.modal_container_case();
  });
});
