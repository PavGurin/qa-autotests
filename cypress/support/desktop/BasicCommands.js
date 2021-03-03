export const basicCom = {

  // switch language
  switch_language (language) {
    cy.get(":nth-child(2) > :nth-child(3) > .dropdown > .dropdown-trigger > .button")
      .first()
      .trigger("mouseover");
    cy.wait(1000);
    cy.contains(language)
      .click();
    cy.wait(1000);
  },
  // switch language for de
  switch_language_De () {
    cy.get(":nth-child(2) > :nth-child(3) > .dropdown > .dropdown-trigger > .button")
      .first()
      .trigger("mouseover");
    cy.wait(1000);
    cy.get("#header > div.level.header__line--bottom > div:nth-child(2) > div:nth-child(3) > div > div.dropdown-menu > div > div:nth-child(1)")
      .click();
    cy.wait(1000);
  },
  // switch language for es
  switch_language_Es () {
    cy.get(":nth-child(2) > :nth-child(3) > .dropdown > .dropdown-trigger > .button")
      .first()
      .trigger("mouseover");
    cy.wait(1000);
    cy.get("#header > div.level.header__line--bottom > div:nth-child(2) > div:nth-child(3) > div > div.dropdown-menu > div > div:nth-child(3)")
      .click();
    cy.wait(1000);
  },
  // switch language
  switch_language_for_mobile (lang) {
    cy.get(".lang-input")
    //.trigger('mouseover')
    //cy.get('#footer > section.license > label > select > option:nth-child(2)')
      .select(lang);
  },

  // switch to mobile version
  switch_to_mobile () {
    // click mobile version button
    cy.get(".header__line--top .icon-mobile", { timeout: 15000 })
      //.first()
      .click({ force: true });
  },
  live_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(2)")
      .click();
  },
  live_button () {
    cy.contains("Live")
      .click();
  },
  live_games_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(5)")
      .click();
  },
  games_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(3)")
      .click();
  },
  first_button_main_page_for_mobile () {
    cy.get("#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active", { timeout: 10000 })
      .should("have.text", "Главная");
  },
  first_button_main_page_English_version_for_mobile () {
    cy.get("#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active")
      .should("have.text", "Main");
  },
  result_button () {
    cy.get("div.navigation-item > .dropdown > .dropdown-trigger > .item-text")
      .trigger("mouseover");
    cy.get("[href=\"/results\"]")
      .click();
  },
  assert_result () {
    cy.get("#main-container > div.content-wrapper > div > div > div.main-content > div")
      .should("not.to.be.empty");
  },
  result_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(2)")
      .click();
    cy.get("#navigation > section > a:nth-child(3)")
      .click();
    cy.get("#results > section > header > a")
      .click();
  },
  assert_result_for_mobile () {
    cy.get("#results-last > ul")
      .should("not.to.be.empty");
  },
  bonus_main_page () {
    cy.get(".user-bonus > .dropdown > .dropdown-trigger")
      .trigger("mouseover");
    cy.get(".bonus-info-message")
      .should("have.text", "Делайте ординарные ставки с коэффициентом больше 3 и получайте деньги с бонусного счета в размере 5% от суммы выигранной ставки!");
  },
  casino_button_for_mobile () {
    cy.contains("Казино")
      .click();
  },
  casino_search (name) {
    cy.get(".search-input")
      .click()
      .type(name);
  },
  favorites_for_mobile () {
    cy.get(".match-card .favourite-icon").first()
      .click();
  },

  casino_search_mobile (name) {
    cy.get(".search-input input")
      .click()
      .type(name);
  },
  assert_casino_for_mobile () {
    cy.get(".searched-games-block .casino-games-list .name")
      .should("have.text", "Ice Wolf");
  },
  assert_casino () {
    cy.get(".casino-game-line .game-card-image")
      .should("exist");
  },

  assert2_casino_for_mobile () {
    cy.get(".searched-games-block .casino-game-line .game-preview img")
      .should("be.visible");
  },
  more_button () {
    cy.contains("Ещё")
      .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-content.theme-default")
      .contains("Казино")
      .click();
  },
  assert_casino_category () {
    cy.get(".category-list>li").should(($lis) => {
      expect($lis).to.have.length(16);
      expect($lis.eq(0)).to.contain("Demi Gods");
      expect($lis.eq(1)).to.contain("Все игры");
      expect($lis.eq(2)).to.contain("Лайв Казино");
      expect($lis.eq(3)).to.contain("Рулетка");
      expect($lis.eq(4)).to.contain("Новые");
      expect($lis.eq(5)).to.contain("Слоты");
      expect($lis.eq(6)).to.contain("Блекджек");
      expect($lis.eq(7)).to.contain("Настольные");
      expect($lis.eq(8)).to.contain("Джекпоты");
      expect($lis.eq(9)).to.contain("Виртуальные игры");
      expect($lis.eq(10)).to.contain("Видео покер");
      expect($lis.eq(11)).to.contain("Скретч-карты");
      expect($lis.eq(12)).to.contain("Лотереи");
      expect($lis.eq(13)).to.contain("Другие");
    });
  },

};
