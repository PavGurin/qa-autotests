import { basicCom } from "@support/desktop/BasicCommands";

describe("Переключение языка", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
  });
  it("C471386 - Переключение языка", () => {
    basicCom.first_button_main_page_for_mobile();
    basicCom.switch_language_for_mobile("English / ENG");
    basicCom.first_button_main_page_English_version_for_mobile();
  });
});
