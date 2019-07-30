/**
 * Для ставок
 */

const make_bet_button = 'button.make-bet';
const bet_amount_input = 'input[type=number]';
const bet_is_done = 'div.coupon-status.success';
const bet_not_done = 'div.coupon-status.error';
const available_for_bet_element = () => cy
    .get('div.matches-block > div.matches-block-content.matches-block')
    .find('.odd-cell')
    .not('.disabled')
    .find('.odd-coefficient')
    .first();

export const bets = {

    // делает ставку с главной страницы
    bet_main_page() {
        // выбирает первый доступный для ставки элемент
        // cy.xpath(available_for_bet_element)
        available_for_bet_element()
          .click();
        // выделяет окно ввода суммы ставки, очищает данное поле и вводит '1'
        cy.get(bet_amount_input)
          .type('{selectall}{del}')
          .type('{selectall}1');
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
    }
};
