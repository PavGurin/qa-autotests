import {basicCom} from '@support/desktop/BasicCommands';

describe('Переключение на мобильную версию', () => {

    it('C16321 - Мобильная версия', function () {
        // проверяем видимость навигации ставок
        cy.get('div.bets-navigation')
          .should('be.visible');
        // переключаемся на мобильную версию
        cy.wait(1000);
        basicCom.switch_to_mobile();
        // проверяем количество секций на сайте (4 - Live/Линия/Live Games/Casino)
        cy.get('section.section')
          .should('have.length', 4);
        // проверяем видимость кнопки переключения на десктопную версию
        cy.get('svg.icon-app-desktop')
          .should('be.visible');
        cy.screenshot();
    });
});
