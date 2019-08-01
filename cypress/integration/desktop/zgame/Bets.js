import {bets} from '@support/desktop/Bets';
import {auth} from '@support/desktop/Authorization';

describe('Ставки', () => {

    it('C18766 - Успешная ставка (Main page)', () => {
        auth.login();
        // делает ставку на главной странице
        bets.bet_main_page();
        cy.screenshot();
    });

    it('C18767 - Ставка с "Сумма ставки" = 0', () => {
        // делает нулевую ставку
        bets.bet_live_zero();
        cy.screenshot();
        // закрывает все отмеченные купоны
        bets.close_coupons();
    });

    it('C18783 - Успешная ставка (live)', () => {
        // переключается на вкладку 'live'
        cy.get('a.navigation-item:nth-child(2)')
          .click();
        // проверяет, что выбрана 'live' вкладка
        cy.get('a.active > div > div.item-text-active')
          .should('have.text', 'Live');
        // ожидание, необходимое для прогрузки элементов
        cy.wait(1000);
        // делает ставку на live-событие
        bets.bet_live_page();
        cy.screenshot();
        auth.logout();
    });
});
