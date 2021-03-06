import { timeout } from "rxjs/operators";

export const shot = {

  screen_headers () {
    cy.get("#header")
            .toMatchImageSnapshot();
  },
  screen_nav_menu () {
    cy.get("#navigation")
            .matchImageSnapshot();
  },
  case_button () {
    cy.contains("Ещё")
            .trigger("mouseover");
    cy.wait(1000);
    cy.get(".sub-item-text")
      .last()
      .click();
  },
  case_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(6)")
            .click();
  },
  case_classic () {
    cy.get(".case-modal-button-inner", { timeout: 5000 })
            .click();
  },
  case_memes () {
    cy.get(".navigation-item-menu > :nth-child(2)")
            .click();
  },
  screen_cases () {
    cy.get("#main-container > main > article > main > div")
            .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 1149, height: 500 } });
  },
  screen_cases_for_mobile () {
    cy.get("#cases-list > div.cases-list")
            //.scrollIntoView({ duration: 10000 })
            .matchImageSnapshot();
  },
  screen_cases_for_mobile2 () {
    cy.get("#cases-list > div.cases-list")
            .matchImageSnapshot();
  },
  casino () {
    cy.get(":nth-child(6) > .item-text-block > .item-text")
            .click();
  },
  casino_for_mobile () {
    cy.get("#navigation > section > a:nth-child(4)")
            .click();
  },
  screen_casino () {
    cy.get("#casino > aside > section")
            .toMatchImageSnapshot();
  },
  screen_casino_provider () {
    cy.get(".provider-list")
      .scrollIntoView({ duration: 10000 });
    cy.get(".provider-list > :nth-child(4) > .item-link")
      .toMatchImageSnapshot();
  },
  line_for_mobile () {
    cy.get("#navigation > section > a:nth-child(3)")
            .click();
  },
  screen_footer () {
    cy.get("#main-container > div.content-wrapper > div > div > div.main-content")
            .scrollTo("bottom", { duration: 10000 });
    cy.get("#footer > div.license")
            .matchImageSnapshot();
  },
  rules () {
    cy.get("#footer > div:nth-child(1) > nav > ul > li:nth-child(1) > a")
            .click();
  },
  screen_rules () {
    cy.get("body", { timeout: 10000 })
            .toMatchImageSnapshot();
  },
  bonuses () {
    cy.get("#footer > div:nth-child(1) > nav > ul > li:nth-child(4) > a")
            .click();
  },
  screen_bonuses () {
    cy.get("body", { timeout: 10000 })
            .toMatchImageSnapshot();
  },
  screen_history_bets () {
    cy.get("#main-container > main")
            .toMatchImageSnapshot();
  },
  screen_coupons_and_bets () {
    cy.get("#main-container > main > div > div.aside.aside-right > div")
            .toMatchImageSnapshot();
  },
  screen_cases_inTest () {
    cy.get("#main-container > main > article > main > div")
            .toMatchImageSnapshot("Кейсы - Classic");
  },
  screen_support_for_mobile () {
    cy.get("#jcont")
            .matchImageSnapshot();
  },
  screen_down_bar_for_mobile () {
    cy.get("#main-layout > div.tabs")
            .matchImageSnapshot();
  },
  rules_for_mobile () {
    cy.get("#footer > section.links-list > a:nth-child(4)")
            .click();
  },
  bonuses_for_mobile () {
    cy.get("#footer > section.links-list > a:nth-child(2)")
            .click();
  },
  site_access_for_mobile () {
    cy.get("#footer > section.links-list > a:nth-child(3)")
            .click();
  },
  search_for_mobile () {
    cy.get("#navigation > div")
            .click();
  },
  bonus200 () {
    cy.get("#rules > section:nth-child(4) > div.section-body > div:nth-child(1) > a > img")
            .click();
  },
  bonus_express () {
    cy.get("#rules > section:nth-child(4) > div.section-body > div:nth-child(2) > a > img")
            .click();
  },
};
