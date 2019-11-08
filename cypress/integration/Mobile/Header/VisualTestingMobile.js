import { auth } from '@support/desktop/Authorization'
import { shot } from '@support/desktop/Screenshots'
import { prof } from '@support/desktop/Profile'
import { basicCom } from '@support/desktop/BasicCommands'
import { cases } from '@support/desktop/Case'

describe('Visual regression tests for mobile', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C103822 - главная страница хэдер', () => {
    cy.wait(2000)
    //shot.screen_headers();
    cy.get('#header')
            .toMatchImageSnapshot()
  })
  it('C103823 - главная страница хэдер-зареганный пользователь', () => {
    auth.login_for_mobile()
    cy.wait(2000)
    //shot.screen_headers();
    cy.get('#header')
            .toMatchImageSnapshot()
  })
  it('C380576 - навигационное меню', () => {
    cy.wait(2000)
    //shot.screen_nav_menu();
    cy.get('#navigation')
            .toMatchImageSnapshot()
  })
  it('C385879 - Кейсы - Classic', () => {
    shot.case_button_for_mobile()
    cases.open_case_classic()
    cy.wait(1000)
    cy.get('#cases-list > div.cases-list > div.case-wrapper.theme-container.case.theme-container-rang-0.theme-container-theme-classic')
            .toMatchImageSnapshot()
  })
  it('C385880 - Кейсы - Memes', () => {
    shot.case_button_for_mobile()
    cy.wait(1000)
    cy.get('#cases-list > div.cases-list > div.case-wrapper.theme-container.case.theme-container-rang-0.theme-container-theme-memes')//.scrollIntoView({ duration: 2000 })
            .toMatchImageSnapshot()
  })
  it('C385881 - Казино', () => {
    shot.casino_for_mobile()
    cy.wait(2000)
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.categories')
            .toMatchImageSnapshot()
  })
  it('C385882 - Казино зареганый пользователь', () => {
    auth.login_for_mobile()
    shot.casino_for_mobile()
    cy.wait(2000)
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.categories')
            .toMatchImageSnapshot()
  })
  it('C389820 - нижняя навигация', () => {
    cy.wait(1000)
    //shot.screen_down_bar_for_mobile();
    cy.get('#main-layout > div.tabs')
            .toMatchImageSnapshot()
  })
  it('C389821 - Профиль', () => {
    auth.login_for_mobile()
    prof.profile_for_mobile()
    cy.wait(1000)
    cy.get('#main-layout')
            .toMatchImageSnapshot({ capture: 'viewport' })
  })
  it('C389822 - Служба поддержки', () => {
    auth.login_for_mobile()
    prof.profile_for_mobile()
    prof.support_for_mobile()
    cy.wait(1000)
    cy.get('#app')
            .toMatchImageSnapshot()
  })
  it('C390479 - История ставок', () => {
    auth.login_for_mobile()
    prof.profile_for_mobile()
    prof.bets_history_for_mobile()
    cy.wait(2000)
    cy.get('#bets-history')
            .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 375, height: 500 } })
  })
  it('C390480 - Редактировать профиль', () => {
    auth.login_for_mobile()
    prof.profile_for_mobile()
    prof.settings_for_mobile()
    cy.wait(2000)
    cy.get('#main-layout > div.wrapper.has-tabs > div')
            .toMatchImageSnapshot()
  })
  it('C390481 - Правила', () => {
    shot.rules_for_mobile()
    cy.wait(1000)
    cy.get('#rules > section:nth-child(3)')
            .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 375, height: 700 } })
  })
  it('C390482 - Бонус +200% ', () => {
    shot.bonuses_for_mobile()
    shot.bonus200()
    cy.wait(1000)
    cy.get('#main-layout > div.wrapper.has-tabs')
        .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 375, height: 650 } })
  })
  it('C391797 - Бонус на экспресс', () => {
    shot.bonuses_for_mobile()
    shot.bonus_express()
    cy.wait(1000)
    cy.get('#main-layout > div.wrapper.has-tabs > div > div')
            .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 375, height: 650 } })
  })
  it('C390483 - Доступ к сайту', () => {
    shot.site_access_for_mobile()
    cy.wait(1000)
    cy.get('#app > div')
            .toMatchImageSnapshot({ capture: 'fullPage' })
  })
  it('C391140 - Поиск', () => {
    shot.search_for_mobile()
    cy.wait(1000)
    cy.get('#main-layout > div.wrapper.has-tabs')
            .toMatchImageSnapshot({ capture: 'fullPage' })
  })
  it('C391140 - Игры', () => {
    basicCom.live_games_button_for_mobile()
    basicCom.games_button_for_mobile()
    cy.wait(1000)
    cy.get('#main-layout > div.wrapper > div.body.main-layout-item')
             .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 375, height: 580 } })
  })
})
