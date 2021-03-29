import { basicCom } from "@support/desktop/BasicCommands";

describe("Переключение языка", () => {
  const header_first_elem = "a.navigation-item.active .item-text-active";

  beforeEach(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });
  it("Russian/English", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("en");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should("have.text", "Home");
  });
  it("Random language", () => {
    // меняет язык
    basicCom.switch_language_rand();
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("not.have.text", "Home").and("not.have.text", "Главная");

  });
});
