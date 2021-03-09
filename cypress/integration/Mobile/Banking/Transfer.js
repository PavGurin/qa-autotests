import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
import { bank } from "@support/desktop/Banking";

describe("Banking", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile_mail();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Перевод")
        .click();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Transfer", function () {
    bank.transfer_for_mobile("transferMobile2@ahem.email");
    bank.assert_transfer();
  });
  it("Transfer to non-registered email", function () {
    cy.get(".input.light-grey").last()
        .clear();
    bank.transfer_for_mobile("sdbghfhftras@mail.ru");
    bank.check_notification_invalid_transfer_for_mobile();
  });
});
