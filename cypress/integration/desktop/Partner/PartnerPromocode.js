import { req } from "@support/desktop/Request";
import { navReg } from "@support/desktop/NavReg";
let dateNow = new Date();

describe("Partner", () => {
  const randomStr = Math.random()
    .toString(36)
    .slice(-5);
  const randomNum = Math.floor(Math.random() * 9999999) + 1;

  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
    req.LoginPartner("test1winpartner@ahem.email", "qwerty12", dateNow);
    cy.wait(2000);

  });
  it("C1961996 - PartnerPromocode + rega OneCLick", function () {
    navReg.click_register();
    navReg.add_promocode("1wintester");
    navReg.sign_up();
    cy.wait(10000);
    req.CheckStats(dateNow);
  });
  it("C1961997 - PartnerPromocode + rega Email", function () {
    navReg.registration_form("По e-mail");
    navReg.set_email(`${randomStr}test@zyx.com`);
    navReg.set_pwd("111111");
    navReg.repeat_pwd("111111");
    navReg.set_phone_numb(`911${randomNum}`);
    navReg.add_promocode("1wintester");
    navReg.sign_up();
    cy.wait(10000);
    req.CheckStats(dateNow);

  });
  it("C1961998 - PartnerURL + rega OneCLick", function () {
    cy.clearCookies();
    cy.visit("https://1wlbs.top/bets/home#x0k4");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
    navReg.click_register();
    cy.wait(2000);
    navReg.sign_up();
    cy.wait(10000);
    req.CheckStats(dateNow);
  });
  it("C1961999 - PartnerURL + rega Email", function () {
    cy.clearCookies();
    cy.visit("https://1wsnr.xyz/#x0k4");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
    navReg.click_register();
    navReg.registration_form("По e-mail");
    navReg.set_email(`${randomStr}test123@zyx.com`);
    navReg.set_pwd("111111");
    navReg.repeat_pwd("111111");
    navReg.set_phone_numb(`921${randomNum}`);
    navReg.add_promocode("1wintester");
    navReg.sign_up();
    cy.wait(10000);
    req.CheckStats(dateNow);
  });
  it("C2050648 - PartnerURL + rega Email into TV", function () {
    cy.clearCookies();
    cy.visit("https://1wsnr.xyz/tv/172#x0k4");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
    navReg.registration_form("По e-mail");
    navReg.set_email(`${randomStr}test457@zyx.com`);
    navReg.set_pwd("111111");
    navReg.repeat_pwd("111111");
    navReg.set_phone_numb(`931${randomNum}`);
    navReg.add_promocode("1wintester");
    navReg.sign_up();
    cy.wait(10000);
    req.CheckStats(dateNow);
  });
  it("C2050649 - PartnerURL + rega OneCLick into TV", function () {
    cy.clearCookies();
    cy.visit("https://1wsnr.xyz/tv/172");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
    cy.wait(2000);
    navReg.add_promocode("1wintester");
    navReg.sign_up();
    cy.wait(10000);
  });
});
