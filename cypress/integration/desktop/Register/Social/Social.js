import { navReg } from "@support/desktop/NavReg";

const password = 111111;

describe("Registration by social network", () => {
  it("C16293 - VK with promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    navReg.set_social_network("ВКонтакте");
    navReg.add_promocode("test001");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input(password);
    navReg.password_input_repeat(password);
    navReg.sign_up_check();
    //cy.url().should('include', 'oauth.vk.com')
  });

  it("C16294 - Ok with promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    navReg.set_social_network_OK("Одноклассники");
    navReg.add_promocode("test001");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input("111111");
    navReg.password_input_repeat("111111");
    navReg.sign_up_check();
    //cy.url().should('include', 'connect.ok.ru')
  });

  it("C16295 - Google with promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    cy.wait(1000);
    navReg.set_social_network("Google");
    navReg.add_promocode("autotest1");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input("111111");
    navReg.password_input_repeat("111111");
    navReg.sign_up_check();
    //cy.location().should('include', 'https://accounts.google.com')
  });
  it("C16290 - VK without promocode", () => {
    cy.wait(5000);
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    navReg.set_social_network("ВКонтакте");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input("111111");
    navReg.password_input_repeat("111111");
    navReg.sign_up_check();
  });

  it("C16291 - Ok without promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    navReg.set_social_network_OK("Одноклассники");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input("111111");
    navReg.password_input_repeat("111111");
    navReg.sign_up_check();
  });
  it("C16292 - Google without promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    cy.wait(1000);
    navReg.set_social_network("Google");
    navReg.accept_agreement();
    navReg.click_next();
    navReg.password_input("111111");
    navReg.password_input_repeat("111111");
    navReg.sign_up_check();
  });
});
