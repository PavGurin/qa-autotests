import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";
import { navReg } from "@support/desktop/NavReg";

describe("Ординар", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    cy.wait(2000);
  });
  it("C740703 - Добавление одного купона - сделать ставку", () => {
    cy.contains("Live")
      .click();
    cy.wait(1000);
    bets.bet_ordinar_for_mobile();
    bets.bets_series_in_one_match_for_mobile();
  });
  it("C740704 - Добавление двух купонов по одному матчу - сделать ставку", () => {
    bets.bet_two_ordinar_for_mobile();
  });
  it("C740705 - Добавление двух купонов по разным матчам - сделать ставку", () => {
    bets.bet_different_ordinar_for_mobile();
  });
  it("C740725 - Минимальная сумма ставки 10 руб", () => {
    auth.login_for_mobile2();
    navReg.click_settings_main_page_for_mobile();
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(1) > div > section.balance > a > svg")
      .click();
    cy.get("#wallets > section:nth-child(4) > ul > li:nth-child(1) > div.wallet__control > div")
      .click();
    cy.get(".close")
      .click();
    cy.get(":nth-child(2) > .wallet__control > .wallet__dots-wrapper")
      .click();
    cy.get(":nth-child(4) > .wallet-action__button")
      .click();
    cy.get("#header > a")
      .click();
    cy.wait(1000);
    bets.bet_minimum10_rub_for_mobile();
  });
  it("C740706 - Удаление одного купона ", () => {
    auth.login_for_mobile2();
    cy.wait(2000);
    bets.bet_coupons_delete_for_mobile();
  });
  it("C740707 - Удаление всех купонов", () => {
    auth.login_for_mobile2();
    cy.wait(2000);
    bets.bet_two_coupons_delete_for_mobile();
  });
});
