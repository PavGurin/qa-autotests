export const basicCom = {

  // switch language
  switch_language (language) {
    cy.get("button.country-button")
      .first()
      .trigger("mouseover");
    cy.wait(1000);
    cy.contains(language)
      .click();
    cy.wait(1000);
  },
  // switch language for de
  switch_language_De () {
    cy.get("button.country-button")
        .first()
        .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-content .dropdown-item:nth-child(2)")
      .click();
    cy.wait(1000);
  },
  // switch language for es
  switch_language_Es () {
    cy.get("button.country-button")
        .first()
        .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-content .dropdown-item:nth-child(4)")
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
    cy.get(".header-line-left .icon-mobile", { timeout: 15000 })
      //.first()
      .click();
  },
  live_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(2)")
      .click();
  },
  live_button () {
    cy.contains("Live", { timeout: 10000 })
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
  casino_button () {
    cy.get("[href=\"/casino/\"] > .navigation-item-wrapper > .item-text-block > .item-text")
      .click();
  },
  casino_button_for_mobile () {
    cy.get("#navigation > section > a:nth-child(4)")
      .click();
  },
  casino_search (name) {
    cy.get(".search-input")
      .click()
      .type(name);
  },
  favorites_for_mobile () {
    cy.get("div[class*=\"loading-item__wrapper\"]")
      .first()
      .click();
  },

  casino_search_mobile (name) {
    cy.get(".all-games__search")
      .click();
    cy.get(".input")
      .click()
      .type(name);
  },
  assert_casino_for_mobile () {
    cy.get(".name")
      .should("have.text", "Ice Wolf");
  },
  assert_casino () {
    cy.get(".game-card-image")
      .should("exist");
  },

  assert2_casino_for_mobile () {
    cy.get("#search-result > div.result-wrapper > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div > div > div > div > div.preview > img")
      .should("have.class", "image");
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
  assert_casino_providers () {
    cy.get(".provider-list>li").should(($lis) => {
      expect($lis).to.have.length(38);
      expect($lis.eq(0)).to.contain("1x2");
      expect($lis.eq(1)).to.contain("Apollo");
      expect($lis.eq(2)).to.contain("BetSoft");
      expect($lis.eq(3)).to.contain("Betsolutions");
      expect($lis.eq(4)).to.contain("Booongo");
      expect($lis.eq(5)).to.contain("EAGaming");
      expect($lis.eq(6)).to.contain("Elk");
      expect($lis.eq(7)).to.contain("Evoplay");
      expect($lis.eq(8)).to.contain("Evolution");
      expect($lis.eq(9)).to.contain("Fazi");
      expect($lis.eq(10)).to.contain("Gamomat");
      expect($lis.eq(11)).to.contain("Gamshy");
      expect($lis.eq(12)).to.contain("Givme");
      expect($lis.eq(13)).to.contain("Goldenhero");
      expect($lis.eq(14)).to.contain("Habanero");
      expect($lis.eq(15)).to.contain("Hub88 Green Jade");
      expect($lis.eq(16)).to.contain("Hub88 OneTouch");
      expect($lis.eq(17)).to.contain("Iron dog");
      expect($lis.eq(18)).to.contain("Kalamba");
      expect($lis.eq(19)).to.contain("Kiron");
      expect($lis.eq(20)).to.contain("Leap");
      expect($lis.eq(21)).to.contain("Mascot");
      expect($lis.eq(22)).to.contain("MG");
      expect($lis.eq(23)).to.contain("MrSlotty");
      expect($lis.eq(24)).to.contain("NetEnt");
      expect($lis.eq(25)).to.contain("Oryx");
      expect($lis.eq(26)).to.contain("Pgsoft");
      expect($lis.eq(27)).to.contain("Platipus");
      expect($lis.eq(28)).to.contain("PlaysonDirect");
      expect($lis.eq(29)).to.contain("Pragmatic");
      expect($lis.eq(30)).to.contain("Quickspin");
      expect($lis.eq(31)).to.contain("Spadegaming");
      expect($lis.eq(32)).to.contain("Spinmatic");
      expect($lis.eq(33)).to.contain("Spinomenal");
      expect($lis.eq(34)).to.contain("TomHorn");
      expect($lis.eq(35)).to.contain("TrueLab");
      expect($lis.eq(36)).to.contain("VivoGaming");
      expect($lis.eq(37)).to.contain("Wazdan");
    });
  },
};
