import {baseCom} from '../../../support/desktop/baseCommands';

describe('Переключение языка', () => {
    const header_first_elem = 'a:nth-child(1) > div > div.item-text';

    it('C16323 Переключение языка', () => {
        cy.visit('/');
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Главная');
        // меняет язык
        baseCom.switch_language();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Home');
        // меняет язык
        baseCom.switch_language();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Главная');
    });
});
