/**
 * Для ставок
 */

const make_bet_button = '.base-coupon-submit'
const bet_amount_input = 'input[type=number]'
const bet_is_done = 'form > div.coupon-ordinary > div.coupon-card > div.base-coupon-status.success'
const bet_not_done = 'div.coupon-status.error'
const status_coupon = '.coupon-status-message'

const available_for_bet_element = () => cy
    .wait(1000)
    .get('#bets > div', { timeout: 20000 })
    .find('.odd-cell', { timeout: 10000 })
    .not('.disabled')
    .find('.odd-coefficient')
    .first()
    //.eq(3)
const available_for_bet_element2 = () => cy
    .get('.matches-block-content', { timeout: 20000 })
    .find('.odd-cell', { timeout: 10000 })
    .not('.disabled')
    .find('.odd-coefficient')
    .first()
const second_bets_in_one_match = () => cy
    .get('.matches-block-content')
    .find('.odd-cell', { timeout: 10000 })
    .not('.disabled')
    .find('.odd-coefficient')
    .eq(1)

const two_bets_in_different_match = () => cy
    .get('.matches-block-content')
    .find('.odd-cell')
    .not('.disabled', { timeout: 10000 })
    .find('.odd-coefficient')
    .eq(10)
const available_for_live_element = () => cy
    .get('.matches-block-content', { timeout: 20000 })
    .find('.odd-cell', { timeout: 10000 })
    .not('.disabled')
    .find('.odd-coefficient')
    .eq(1)
const available_for_bet_element_virtual_sport = () => cy
    .get('#main-container > main > div > div.main-content > div > div > div.virtual-sport-wrapper.virtual-sport-wrapper-body > table', { timeout: 20000 })
    .find('.odd-cell', { timeout: 10000 })
    .not('.disabled')
    .find('.odd-coefficient')
    .eq(1)
const bet_element_for_mobile = () => cy
    .get('#home > section:nth-child(2) > div > a:nth-child(2) > div', { timeout: 20000 })
    .find('.odd-values', { timeout: 10000 })
    .not('.disabled')
    .first()
const second_bet_in_one_match_for_mobile = () => cy
    .get('#bets > div > div > ul', { timeout: 20000 })
    .find('.odd-values', { timeout: 10000 })
    .not('.disabled')
    .eq(1)
const bet_two_element_for_mobile = () => cy
    .get('#home > section:nth-child(2) > div > a:nth-child(2) > div', { timeout: 20000 })
    .find('.odd-values', { timeout: 10000 })
    .not('.disabled')
    .eq(2)
const bet_different_element_for_mobile = () => cy
    .get('#home > section:nth-child(1) > div > a:nth-child(2) > div', { timeout: 20000 })
    .find('.odd-values', { timeout: 10000 })
    .not('.disabled')
    .last()

    //.contains(/\d{2,}/g);
//.contains(/[1-9]\{1,\}\.[0-9]\{2,\}/);

export const bets = {

  // делает ставку с главной страницы
  bet_main_page () {
    // выбирает первый доступный для ставки элемент
    // cy.xpath(available_for_bet_element)
    available_for_bet_element()
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
             .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
             .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принята')
  },
  bet_main_page_en () {
    // выбирает первый доступный для ставки элемент
    // cy.xpath(available_for_bet_element)
    available_for_bet_element()
      .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
      .type('{selectall}{del}')
      .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
      .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Successfully!Your bet is accepted')
  },
  // делает ставку с главной страницы
  bets_main_page_two_bets_in_one_match () {
    available_for_bet_element()
            .click()
    second_bets_in_one_match()
            .click()
    // выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
             .first()
           .type('{selectall}{del}')
            .type('{selectall}1')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // делает ставку с главной страницы
  bets_main_page_two_bets_in_different_match () {
    available_for_bet_element()
            .click()
    two_bets_in_different_match()
            .click()
    cy.get(':nth-child(1) > .radio-mark')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // делает ставку со страницы 'Live'
  bet_live_page () {
    // проверяет прогрузку страницы 'Live'
    cy.get('div.sport-title')
            .should('be.visible')
    // выбирает первый доступный для ставки элемент
    available_for_live_element()
            .trigger('mouseover')
            .click()
    // выделяет окно ввода суммы ставки, очищает данное поле и вводит '1'
    cy.get('input[type=number]')
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принята')
  },

  // делает ставку с нулевой суммой
  bet_live_zero () {
    // выбирает первый доступный для ставки элемент
    available_for_bet_element()
            .trigger('mouseover')
            .click()
    // выделяет окно ввода суммы ставки, очищает данное поле и вводит '0'
    cy.get('input[type=number]')
            .type('{selectall}{del}')
            .type('0')
    // жмет кнопку 'Сделать ставку'
    cy.get('.base-coupon-submit')
            .click()
    // сверяет, что ставка неверна
    cy.get(status_coupon, { timeout: 10000 })
      .should('have.text', 'Минимальная сумма ставки: 0.5 USD')
  },
  // закрывает все отмеченные купоны (жмет 'крестик')
  close_coupons () {
    cy.get('.buttons > .remove-button')
            .click()
  },
  // закрывает один купон (жмет 'крестик')
  close_one_coupons () {
    cy.get(':nth-child(3) > .coupon-card > .base-coupon-odd > .remove-button')
            .first()
            .click()
  },
  bet_main_page_without_click_ok () {
    available_for_bet_element2()
            .click()
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}10')
  },
  // проверка, что купон закрыт
  assert_close_coupons () {
    cy.get('div.coupons-list.panel-body > div')
            .should('not.exist')
  },
  // проверка, что купон закрыт
  assert_close_one_coupons () {
    cy.get('.coupon-card')
            .should('have.length', 2)

  },
  // ставка по двум разным матчам
  two_bets_in_different_match_without_ok () {
    available_for_bet_element()
            .click()
    two_bets_in_different_match()
            .click()
    cy.get(':nth-child(1) > .radio-mark')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}10')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}10')
  },
  // проверка, что серия купонов закрыта
  assert_all_close_coupons () {
    cy.get('.buttons > .remove-button')
            .should('not.exist')
  },
  // делает ставку с главной страницы
  two_bets_in_one_match_series () {
    available_for_bet_element()
            .click()
    cy.wait(2000)
    second_bets_in_one_match()
            .click()
    cy.get('.coupon-type-radiogroup > :nth-child(3)', { timeout: 2000 })
            .click()
    // выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // ставка по двум разным матчам
  two_bets_in_different_match_series () {
    available_for_bet_element()
            .click()
    two_bets_in_different_match()
            .click()
    cy.get('.coupon-type-radiogroup > :nth-child(3)')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // ставка по трем  матчам
  three_bets_in_different_match_series () {
    available_for_bet_element()
            .click()
    second_bets_in_one_match()
            .click()
    cy.get('.coupon-type-radiogroup > :nth-child(3)')
            .click()
    two_bets_in_different_match()
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // ставка по трем  матчам
  three_bets_in_different_match_without_ok_series () {
    available_for_bet_element()
            .click()
    second_bets_in_one_match()
            .click()
    cy.get('.coupon-type-radiogroup > :nth-child(3)')
            .click()
    two_bets_in_different_match()
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')

  },
  // ставка по двум разным матчам
  two_bets_in_different_match_express () {
    available_for_bet_element()
            .click()
    two_bets_in_different_match()
            .click()
    cy.get(':nth-child(2) > .radio-mark')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 15000 })
            .should('have.text', 'Успешно!Ваша ставка принята')
  },
  // проверка, что експресс нельзя выбрать
  assert_express_disabled () {
    cy.get('label.radio.disabled > input')
            .should('be.disabled')
  },
  // делает ставку с главной страницы
  two_bets_in_one_match_express () {
    available_for_bet_element()
            .click()
    second_bets_in_one_match()
            .click()
    cy.wait(1000)

  },
  // делает ставку
  bet_virtual_sport () {
    available_for_bet_element_virtual_sport()
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(make_bet_button)
            .click()
    // сверяет, что ставка сделана успешно
    cy.get(bet_is_done, { timeout: 10000 })
            .should('exist')
  },
  // делает ставку в мобиле
  bet_ordinar_for_mobile () {
    bet_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 10000 })
            .should('exist').and('have.text', 'Успешно!Ваша ставка принята')
  },
  // делает 2 ставки в мобиле
  bet_two_ordinar_for_mobile () {
    bet_element_for_mobile()
            .click()
    bet_two_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
            .click({ multiple: true })
    // сверяет, что ставка сделана успешно
    //cy.get('div > div > div > div.coupon-odd-wrapper > div.coupon-status > div.coupon-status-message', {timeout:10000})
    // .should('exist').and('have.text', 'Ваша ставка принята');
    cy.get('.base-coupon-status', { timeout: 10000 })
            .should('exist').and('have.text', 'Успешно!Ваша ставка принята')
  },
  // делает 2 ставки по разных играм в мобиле
  bet_different_ordinar_for_mobile () {
    bet_element_for_mobile()
            .click()
    bet_different_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(1)')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}1')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}1')
    // жмет кнопку 'Сделать ставку'
    cy.get(':nth-child(1) > .coupon-wrapper > .coupon-bet-wrapper > .coupon-bet > .coupon-bet-make > .button-content')
            .click()
    cy.get(':nth-child(2) > .coupon-wrapper > .coupon-bet-wrapper > .coupon-bet > .coupon-bet-make > .button-content')
      .click()
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 10000 })
      .should('exist').and('have.text', 'Успешно!Ваша ставка принята')
  },
  bet_different_express_for_mobile () {
    bet_element_for_mobile()
            .click()
    bet_different_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(1)')
            .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(2)')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}10')
    cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}10')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
            .click({ multiple: true })
    // сверяет, что ставка сделана успешно
    cy.get('.base-coupon-status', { timeout: 12000 })
      .should('exist').and('have.text', 'Успешно!Ваша ставка принята')
  },
  // делает ставку в мобиле
  bet_coupons_delete_for_mobile () {
    bet_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}10')
    cy.get('.coupon-odd-wrapper > :nth-child(1) > .coupon-odd')
            .should('exist')
    // жмем на крестик
    cy.get('.coupon-delete')
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.coupon-odd-wrapper > :nth-child(1) > .coupon-odd')
            .should('not.exist')
  },
  // делает ставку в мобиле
  bet_two_coupons_delete_for_mobile () {
    bet_element_for_mobile()
      .click()
    bet_two_element_for_mobile()
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    // жмем на крестик
    cy.get('.coupons-navigation-remove > .button-content')
      .click()
    // сверяет, что ставка сделана успешно
    cy.get('.coupon-odd-wrapper > :nth-child(1) > .coupon-odd')
      .should('not.exist')
  },
  // делает ставку в мобиле
  bet_minimum10_rub_for_mobile () {
    bet_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}0,05')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('.message-modal-block-content', { timeout: 10000 })
            .should('exist').and('have.text', 'Недостаточно средств!Измените сумму ставки или пополните балансПополнить счет')
  },
  // делает ставку в мобиле
  two_bets_series_in_one_match_for_mobile () {
    bet_element_for_mobile()
            .click()
    bet_two_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(2) > input')
            .should('be.disabled')
  },
  // делает ставку в серии
  bets_series_in_one_match_for_mobile () {
    bet_element_for_mobile()
      .click()
    bet_two_element_for_mobile()
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(3)')
      .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
      .first()
      .type('{selectall}{del}')
      .type('{selectall}10')
    cy.get(bet_amount_input)
      .last()
      .type('{selectall}{del}')
      .type('{selectall}10')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
      .click({ multiple: true })
    // сверяет, что ставка сделана успешно
    //cy.get('div > div > div > div.coupon-odd-wrapper > div.coupon-status > div.coupon-status-message', {timeout:10000})
    // .should('exist').and('have.text', 'Ваша ставка принята');
    cy.get('.base-coupon-status', { timeout: 15000 })
      .should('exist').and('have.text', 'Успешно!Ваша ставка принятаУспешно!Ваша ставка принята')
  },
  // делает ставку в мобиле
  one_bet_series_in_one_match_for_mobile () {
    bet_element_for_mobile()
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(2) > input')
      .should('be.disabled')
  },
  two_bets_series_in_different_match_for_mobile () {
    bet_element_for_mobile()
            .click()
    bet_different_element_for_mobile()
            .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
            .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(3)')
            .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}10')
    // жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
            .click()
    // сверяет, что ставка сделана успешно
    cy.get('div > div > div > div.coupon-odd-wrapper > div.coupon-status > div.coupon-status-message', { timeout: 15000 })
            .should('exist').and('have.text', 'Ваша ставка принятаВаша ставка принята')
  },
  // сразу три ставки
  three_bets_series_for_mobile () {
    bet_element_for_mobile()
      .click()
    cy.wait(1000)
    bet_two_element_for_mobile()
      .click()
    cy.wait(1000)
    bet_different_element_for_mobile()
      .click()
    cy.wait(1000)
    /* cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
       .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(3)')
       .click()
    cy.get(':nth-child(2) > .router-link')
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
    cy.get(bet_amount_input)
      .type('{selectall}{del}')
      .type('{selectall}10')
    //жмет кнопку 'Сделать ставку'
    cy.get('.coupon-bet-make > .button-content')
      .click()
    // сверяет, что ставка сделана успешно
    cy.get('div > div > div > div.coupon-odd-wrapper > div.coupon-status > div.coupon-status-message', { timeout: 10000 })
      .should('exist').and('have.text', 'Ваша ставка принятаВаша ставка принятаВаша ставка принята')*/
  },
  // делаем 2 ставки и удаляем одну из них
  two_bets_in_different_match_and_remove_for_mobile () {
    bet_element_for_mobile()
      .click()
    bet_different_element_for_mobile()
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(3)')
      .click()
    cy.get(':nth-child(1) > .coupon-odd-wrapper > .coupon-delete')
      .click()
    cy.get('#coupons > div.coupons-body > div > div.coupon-list')
      .should('have.length', '1')
  },
  // делаем 2 ставки и удаляем все купоны
  two_bets_in_different_match_and_remove_all_for_mobile () {
    bet_element_for_mobile()
      .click()
    bet_different_element_for_mobile()
      .click()
    cy.get('#tabbar > ul > li.tab.coupon-tab > a > div > svg')
      .click()
    cy.get('#coupons > div.coupons-navigation > label:nth-child(3)')
      .click()
    cy.get('.coupons-navigation-remove > .button-content')
      .click()
    cy.get('#coupons > div.coupons-body > div > div.coupon-list')
      .should('have.length', '0')
  },
}
