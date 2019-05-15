describe('Switch to mobile version', () => {
    it('C16321 Мобильная версия', function () {
        cy.visit('/');
        // Проверяем видимость навигации ставок
        cy.get('div.bets-navigation')
            .should('visible', 'div.bets-navigation');
        // жмем на кнопку мобильной версии
        cy.get('div.mobile > div > svg')
            .click();
        // проверяем количество секций на сайте (4 - Live/Линия/Live Games/Casino)
        cy.get('section.section')
            .should('have.length', 4);
        // проверяем видимость кнопки переключения на десктопную версию
        cy.get('svg.icon-app-desktop')
            .should('visible', 'svg.icon-app-desktop');
    });
});
