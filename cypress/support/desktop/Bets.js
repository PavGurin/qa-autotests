/**
 * Для ставок
 */

const make_bet_button = 'button.make-bet';
const bet_amount_input = 'input[type=number]';
const bet_is_done = 'div.coupon-status.success';
const bet_not_done = 'div.coupon-status.error';
const available_for_bet_element = () => cy
    .get('div.matches-block-content.matches-block')
    .find('.odd-cell')
    .not('.disabled')
    .find('.odd-coefficient')
    .first();


const second_bets_in_one_match = () => cy
    .get('.matches-block-content')
    .find('.odd-cell')
    .not('.disabled')
    .find('.odd-coefficient')
    .eq(2);
const two_bets_in_different_match = () => cy
    .get('.matches-block-content')
    .find('.odd-cell')
    .not('.disabled')
    .find('.odd-coefficient')
    .eq(10);





export const bets = {

    // делает ставку с главной страницы
    bet_main_page() {
        // выбирает первый доступный для ставки элемент
        // cy.xpath(available_for_bet_element)
        available_for_bet_element()
            .click();
        //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
         cy.get(bet_amount_input)
            .type('{selectall}{del}')
             .type('{selectall}10');
         // жмет кнопку 'Сделать ставку'
         cy.get(make_bet_button)
             .click();
         // сверяет, что ставка сделана успешно
         cy.get(bet_is_done)
             .should('exist');
    },
    // делает ставку с главной страницы
    bets_main_page_two_bets_in_one_match() {
        available_for_bet_element()
            .click();
        second_bets_in_one_match()
            .click();
        // выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
         cy.get(bet_amount_input)
             .first()
           .type('{selectall}{del}')
            .type('{selectall}10');
        cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}10');
        // жмет кнопку 'Сделать ставку'
        cy.get(make_bet_button)
            .click();
        // сверяет, что ставка сделана успешно
        cy.get(bet_is_done)
            .should('exist');
    },
    // делает ставку с главной страницы
    bets_main_page_two_bets_in_different_match() {
        available_for_bet_element()
            .click();
        two_bets_in_different_match()
            .click();
        cy.get(':nth-child(1) > .radio-mark')
            .click();
        //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
        cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}10');
        cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}10');
        // жмет кнопку 'Сделать ставку'
        cy.get(make_bet_button)
            .click();
        // сверяет, что ставка сделана успешно
        cy.get(bet_is_done)
            .should('exist');
    },

    // делает ставку со страницы 'Live'
    bet_live_page() {
        // проверяет прогрузку страницы 'Live'
        cy.get('div.sport-title')
            .should('be.visible');
        // выбирает первый доступный для ставки элемент
        available_for_bet_element()
            .click();
        // выделяет окно ввода суммы ставки, очищает данное поле и вводит '1'
        cy.get('input[type=number]')
            .type('{selectall}{del}')
            .type('{selectall}1');
        // жмет кнопку 'Сделать ставку'
        cy.get(make_bet_button)
            .click();
        // сверяет, что ставка сделана успешно
        cy.get(bet_is_done)
            .should('exist');
    },

    // делает ставку с нулевой суммой
    bet_live_zero() {
        // выбирает первый доступный для ставки элемент
        available_for_bet_element()
            .trigger('mouseover')
            .click();
        // выделяет окно ввода суммы ставки, очищает данное поле и вводит '0'
        cy.get('input[type=number]')
            .type('{selectall}{del}')
            .type('0');
        // жмет кнопку 'Сделать ставку'
        cy.get(make_bet_button)
            .click();
        // проверяет, что ставка невозможна, выходит ошибка
        cy.get(bet_not_done)
            .should('exist');
    },
    // закрывает все отмеченные купоны (жмет 'крестик')
    close_coupons() {
        cy.get('svg.coupon-close')
            .click({multiple: true});
    },
    // делает ставку с главной страницы
    bet_main_page_without_click_ok() {
        available_for_bet_element()
            .click();
        cy.get(bet_amount_input)
            .type('{selectall}{del}')
            .type('{selectall}10');
    },
    // проверка, что купон закрыт
    assert_close_coupons() {
        cy.get('div.coupons-list.panel-body > div')
            .should('not.exist');
    },
    // ставка без подтверждения
    two_bets_in_different_match_without_ok() {
        available_for_bet_element()
            .click();
        two_bets_in_different_match()
            .click();
        cy.get(':nth-child(1) > .radio-mark')
            .click();
        //выделяет окно ввода суммы ставки, очищает данное поле и вводит '10'
        cy.get(bet_amount_input)
            .first()
            .type('{selectall}{del}')
            .type('{selectall}10');
        cy.get(bet_amount_input)
            .last()
            .type('{selectall}{del}')
            .type('{selectall}10');
    },
    // проверка, что серия купонов закрыта
    assert_all_close_coupons() {
        cy.get('div.coupons-list.panel-body')
            .should('not.exist');
    },
};
