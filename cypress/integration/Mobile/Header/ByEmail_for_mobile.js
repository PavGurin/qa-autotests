import { navReg } from "@support/desktop/NavReg";
import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
let randomNum;
let randomStr;

describe("Registration by email", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close svg", { timeout: 50000 }).first()
        .click({ force: true });
  });
  beforeEach(function () {
    randomNum = Math.floor(Math.random() * 9999999) + 1;
    randomStr = Math.random()
            .toString(36)
            .slice(-6);
    navReg.click_register_for_mobile();
    navReg.registration_form("Email");
  });
  it("Without promocode", () => {
    cy.get(".reg-full .submit-btn").first().click();
    // navReg.set_name_for_mobile(`test_${randomStr}`)
    // navReg.set_date_of_birth_for_mobile('2000-12-31')
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_email_continue();
    navReg.check_sign_up_for_mobile("1win");
    auth.logout_for_mobile2();
    cy.wait(1000);
  });

  it("With promocode", () => {
    cy.get(".reg-full .submit-btn").first().click();
    navReg.add_promocode_by_email_for_mobile("test123");
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_email_continue();
    navReg.check_sign_up_for_mobile("1win");
    auth.logout_for_mobile2();
  });
  it("With another country", () => {
    cy.get(".reg-full .submit-btn").first().click();
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.set_country_for_mobile("Andorra");
    navReg.set_phone_numb_for_mobile(`312${randomNum}`);
    navReg.sign_up_email_continue();
    navReg.check_sign_up_for_mobile("1win");
    auth.logout_for_mobile2();
  });
  it("Existing phone number", () => {
    cy.get(".reg-full .submit-btn").first().click();
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile("9211111111}");
    navReg.sign_up_email_continue();
    auth.check_notification_bad_number_phone_for_mobile();
    navReg.clear_mail_for_mobile();
    navReg.clear_number_phone_for_mobile();
    cy.get("header button.close").click();
  });
  it("Existing email ", () => {
    cy.get(".reg-full .submit-btn").first().click();
    navReg.set_email_register_for_mobile("nogm75@1win.xyz");
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`911${randomNum}`);
    navReg.sign_up_email_continue();
    auth.check_notification_bad_mail_for_mobile();
    navReg.clear_mail_for_mobile();
    navReg.clear_number_phone_for_mobile();
    cy.get("header button.close").click();
  });
  it("Registration with USD", () => {
    cy.get("#reg-full .currency-dropdown")
      .click();
    cy.get(".dropdown-content").contains("USD")
      .click();
    cy.get(".currency-input .currency-icon")
      .should("have.text", "$");
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_email_continue();
    cy.get(".balance-value")
        .should("have.text", "0,00 $");
    navReg.check_sign_up_for_mobile("1win");
    auth.logout_for_mobile2();

  });
  it("Registration with EUR ", () => {
    cy.get("#reg-full .currency-dropdown")
        .click();
    cy.get(".dropdown-content").contains("EUR")
        .click();
    cy.get(".currency-input .currency-icon")
      .should("have.text", "€");
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_email_continue();
    cy.get(".balance-value")
        .should("have.text", "0,00 €");
    navReg.check_sign_up_for_mobile("1win");
  });
});
