import { navReg } from "@support/desktop/NavReg";
import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
let randomNum;
let randomStr;

describe("Registration by email", () => {
  beforeEach(function () {
    randomNum = Math.floor(Math.random() * 9999999) + 1;
    randomStr = Math.random()
            .toString(36)
            .slice(-6);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    navReg.click_register_for_mobile();
    navReg.registration_form("По email");
  });
  it("C464244 - without promocode", () => {
    // navReg.set_name_for_mobile(`test_${randomStr}`)
    // navReg.set_date_of_birth_for_mobile('2000-12-31')
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
  });

  it("C464245 - with promocode", () => {
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.add_promocode_by_email_for_mobile("test123");
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
  });
  it("C464246 - with another country", () => {
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.set_country_for_mobile("Andorra");
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
  });
  it("C464247 - with another number phone", () => {
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.set_country_for_mobile("Andorra");
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
  });
  it("C464248 - номер телефона уже используется ", () => {
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile("9211111111}");
    navReg.sign_up_for_mobile();
    auth.check_notification_bad_number_phone_for_mobile();
  });
  it("C464249 - email уже используется ", () => {
    navReg.set_email_register_for_mobile("nogm75@1win.xyz");
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`911${randomNum}`);
    navReg.sign_up_for_mobile();
    auth.check_notification_bad_mail_for_mobile();
  });
  it("C2171287 - регистрация USD ", () => {
    cy.get("#reg-full > form > div:nth-child(6) > div > div > label")
      .click();
    cy.get("#modal-container > section > main > section > form > label:nth-child(2)")
      .click();
    cy.get(".wallet-input__value > span")
      .should("have.text", "Доллар");
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
    cy.get(".balance__amount-currency")
      .should("have.text", "$");
  });
  it("C2171288 - регистрация EUR ", () => {
    cy.get("#reg-full > form > div:nth-child(6) > div > div > label")
      .click();
    cy.get("#modal-container > section > main > section > form > label:nth-child(3)")
      .click();
    cy.get(".wallet-input__value > span")
      .should("have.text", "Евро");
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`921${randomNum}`);
    navReg.sign_up_for_mobile();
    navReg.check_sign_up_for_mobile("1win");
    cy.get(".balance__amount-currency")
      .should("have.text", "€");
  });
});
