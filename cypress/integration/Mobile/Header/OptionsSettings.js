import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
import { prof } from "@support/desktop/Profile";

describe("Опции профиля", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
    auth.login_for_mobile2();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Deposit", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.button_deposit_for_mobile();
    cy.wait(1000);
    prof.assert_button_deposit_for_mobile();

  });
  it("Withdrawal", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.assert_button_withdrawal_for_mobile();
  });
  it("Transfer", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.assert_button_transfer_for_mobile();
  });
  it("Detailization", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.button_withdrawal_history_for_mobile();
    cy.wait(1000);
    prof.assert_withdrawal_history_for_mobile();
  });
  it("Bets history", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.button_bets_history_for_mobile();
    prof.assert_bets_history_for_mobile();
  });
  it("Hide balance", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.button_hide_balance_for_mobile();
    prof.assert_hide_balance_for_mobile();
    prof.button_hide_balance_for_mobile();
    prof.assert2_hide_balance_for_mobile();
  });
  it("Support iframe", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.support_for_mobile();
    cy.wait(1000);
    prof.assert_support_for_mobile();
  });
  it("Button Logout", () => {
    navReg.click_settings_main_page_for_mobile();
    prof.button_exit_for_mobile();
    navReg.assert_logout_for_mobile();
  });
});
