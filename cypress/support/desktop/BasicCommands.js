export const basicCom = {

  // switch language
  switch_language () {
    cy.get('img.country-icon')
      .first()
      .trigger('mouseover')
    cy.get('.dropdown-item > .country-icon')
      .click()
  },
  // switch language
  switch_language_for_mobile () {
    cy.get('#footer > section.license > label > select')
    //.trigger('mouseover')
    //cy.get('#footer > section.license > label > select > option:nth-child(2)')
      .select('English / ENG')
  },

  // switch to mobile version
  switch_to_mobile () {
    // click mobile version button
    cy.get('div:nth-child(2) > svg', { timeout: 6000 })
      .first()
      .click()
  },
  live_button_for_mobile () {
    cy.get('#navigation > section > a:nth-child(2)')
      .click()
  },
  live_button () {
    cy.get('.navigation > .level > .level-left > :nth-child(2)')
      .click()
  },
  live_games_button_for_mobile () {
    cy.get('#navigation > section > a:nth-child(5)')
      .click()
  },
  games_button_for_mobile () {
    cy.get('#navigation > section > a:nth-child(3)')
      .click()
  },
  first_button_main_page_for_mobile () {
    cy.get('#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active')
      .should('have.text', 'Главная')
  },
  first_button_main_page_English_version_for_mobile () {
    cy.get('#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active')
      .should('have.text', 'Main')
  },
  result_button () {
    cy.get('#header > div.level.header__line--bottom > div:nth-child(1) > nav > div.level > div > a:nth-child(8) > div')
      .click()
  },
  assert_result () {
    cy.get('#main-container > div.content-wrapper > div > div > div.main-content > div')
      .should('not.to.be.empty')
  },
  result_button_for_mobile () {
    cy.get('#navigation > section > a:nth-child(2)')
      .click()
    cy.get('#navigation > section > a:nth-child(3)')
      .click()
    cy.get('#results > section > header > a')
      .click()
  },
  assert_result_for_mobile () {
    cy.get('#results-last > ul')
      .should('not.to.be.empty')
  },
  bonus_main_page () {
    cy.get('.user-bonus > .dropdown > .dropdown-trigger')
      .trigger('mouseover')
    cy.get('.bonus-info-message')
      .should('have.text', 'Делайте ординарные ставки с коэффициентом больше 3 и получайте деньги с бонусного счета в размере 5% от суммы выигранной ставки!')
  },
  casino_button () {
    cy.get(':nth-child(6) > .item-text-block > .item-text')
      .click()
  },
  casino_button_for_mobile () {
    cy.get('#navigation > section > a:nth-child(4)')
      .click()
  },
  casino_search (name) {
    cy.get('.search-input')
      .click()
      .type(name)
  },
  casino_search_mobile (name) {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.all-games > div > div.all-games__header > svg')
      .click()
    cy.get('.input')
      .click()
      .type(name)
  },
  assert_casino_for_mobile () {
    cy.get('.game-card-image')
      .should('exist')
  },
  assert2_casino_for_mobile () {
    cy.get('#search-result > div.result-wrapper > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div > div > div > div > div.preview > img')
      .should('have.class', 'image')
  },
}
