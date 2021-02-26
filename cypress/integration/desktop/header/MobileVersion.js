import { basicCom } from "@support/desktop/BasicCommands";

describe("Переключение на мобильную версию", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });
  it("Мобильная версия", function () {
    // проверяем наличие гамбургера
    cy.get(".burger-button")
          .should("not.exist");
    // переключаемся на мобильную версию
    cy.wait(2000);
    basicCom.switch_to_mobile();
    // проверяем наличие гамбургера
    cy.get(".burger-button")
        .should("exist");
    // проверяем видимость кнопки переключения на десктопную версию
    cy.get("footer .icon-app-desktop-circle")
          .should("be.visible");
  });
});
