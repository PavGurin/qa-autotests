import { basicCom } from "@support/desktop/BasicCommands";

describe("Переключение языка", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("C471386 - Переключение языка", () => {
    basicCom.switch_language_for_mobile("English / ENG");
    basicCom.first_button_main_page_English_version_for_mobile();
  });
});
