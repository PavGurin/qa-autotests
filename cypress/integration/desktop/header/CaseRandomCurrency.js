import { auth } from "@support/desktop/Authorization";
import { shot } from "@support/desktop/Screenshots";
import { cases } from "@support/desktop/Case";
import { prof } from "@support/desktop/Profile";

describe("Open cases:random currency", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    auth.login();
    cy.wait(2000);
    cy.get(".header-balance__value")
        .trigger("mouseover");
    cy.get(".currency-dropdown")
        .eq(Math.floor(Math.random() * 9) + 3) //выбор рандомной валюты
        .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-item.nowrap")
        .first()
        .click();
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
