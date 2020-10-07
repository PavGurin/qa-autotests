import { navReg } from "@support/desktop/NavReg";
import { basicCom } from "@support/desktop/BasicCommands";
import { text } from "@support/desktop/Descriptions";

describe.skip("Rules agreement", () => {
  it("C16787 - Rules agreement rus", () => {

    cy.contains("Регистрация");
    navReg.click_register();

    // Check on contains text in 1 click form
    text.text_ru_rule_reg();

    // Check on contains text in social network form
    navReg.registration_form("Соц. сети");
    text.text_ru_rule_reg();

    // Check on contains text in e--mail form
    navReg.registration_form("По e-mail");
    text.text_ru_rule_reg();
  });

  it("C18765 - Rules agreement eng", () => {
    basicCom.switch_language();
    // Check on contains text in 1 click form
    cy.contains("Registration");
    navReg.click_register();
    navReg.contains_check_1click();
    text.text_eng_rule_reg();

    // Check on contains text in social network form
    navReg.registration_form("Social networks");
    navReg.contains_check_social();
    text.text_eng_rule_reg();

    // Check on contains text in e--mail form
    navReg.registration_form("By e-mail");
    navReg.contains_check_mail();
    text.text_eng_rule_reg();
  });
});
