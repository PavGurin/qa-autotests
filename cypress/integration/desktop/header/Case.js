import { auth } from "@support/desktop/Authorization";
import { shot } from "@support/desktop/Screenshots";
import { cases } from "@support/desktop/Case";
import { navReg } from "@support/desktop/NavReg";

describe("Play Case", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Case \"Новичок\"", function () {
    shot.case_button();
    cases.button_open_case();
    shot.case_classic();
    cy.wait(1000);
    cases.modal_container_case();
  });
  it("Кнопка- моментальное открытие", function () {
    cases.momentOpenCase();
    shot.case_classic();
    cases.modal_container_case();
  });
  it("Кнопка- Автооткрытие", function () {
    cases.autoOpenCase();
    cy.wait(1000);
    cases.modal_container_case();
  });
  /*рандомная смена основной валюты*/
  it.skip("Random currency: case \"Новичок\"", function () {
    navReg.change_currency_random();
    shot.case_button();
    cases.button_open_case();
    shot.case_classic();
    cy.wait(1000);
    cases.modal_container_case();
  });
});
