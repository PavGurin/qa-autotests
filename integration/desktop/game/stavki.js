import {bets} from '../../../support/desktop/bets';
import {auth} from '../../../support/desktop/authorization';

describe('Ставки', () => {
    it('C18766 - Успешная ставка (Main page)', () => {
        cy.visit('/');
        // авторизация
        auth.login();
        // делает ставку на главной странице
        bets.bet_main_page();
        cy.screenshot();
        // logout
        auth.logout();
    });

    it('C18767 - Ставка с "Сумма ставки" = 0', () => {
        cy.visit('/');
        // авторизация
        auth.login();
        // делает нулевую ставку
        bets.bet_live_zero();
        cy.screenshot();
        // logout
        auth.logout();
    });

    it('C18783 - Успешная ставка (Live)', () => {
        cy.visit('/');
        // авторизация
        auth.login();
        // переключается на вкладку 'Live'
        cy.get('a.navigation-item:nth-child(2)')
          .click();
        // проверяет, что выбрана 'Live' вкладка
        cy.get('div.navigation-navbar > a.active')
          .contains('Live');
        // делает ставку на live-событие
        bets.bet_live_page();
        // logout
        auth.logout();
        cy.screenshot();
    });
});