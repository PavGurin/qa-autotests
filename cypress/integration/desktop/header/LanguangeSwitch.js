import { basicCom } from "@support/desktop/BasicCommands";

describe("Переключение языка", () => {
  const header_first_elem = "a.navigation-item.active .item-text-active";

  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });
  it("Переключение языка на английский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("en");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should("have.text", "Home");
  });
  it("Переключение языка на итальянский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("it");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Principale ");
  });
  it("Переключение языка на немецкий", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("de");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Startseite");
  });
  it("Переключение языка на испанский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("es");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Inicio");
  });
  it("Переключение языка на украинский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("ua");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Головна");
  });
  it("Переключение языка на португальский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("pt");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Principal");
  });
  it("Переключение языка на польский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("pl");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Główna");
  });
  it("Переключение языка на индонезийский", () => {
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Главная");
    // меняет язык
    basicCom.switch_language("id");
    // сверяет текст активного элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should("have.text", "Laman");
  });
});
