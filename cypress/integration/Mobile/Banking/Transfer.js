import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
import { bank } from "@support/desktop/Banking";
import { req } from "@support/desktop/Request";

describe("Banking", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
  });
  it("C636655 - перевод", function () {
    auth.login_for_mobile_mail();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Перевод")
      .click();
    bank.transfer_for_mobile("transferMobile2@ahem.email");
    bank.assert_transfer();
  });
  it("C636660 - Перевод на незарегистрированный mail", function () {
    auth.login_for_mobile_mail();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Перевод")
      .click();
    bank.transfer_for_mobile("sdbghfhftras@mail.ru");
    bank.check_notification_invalid_transfer_for_mobile();
  });
});
