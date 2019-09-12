import {basicCom} from '@support/desktop/BasicCommands';

describe('Переключение языка', () => {
    const header_first_elem = 'a:nth-child(1) > div > div.item-text';

    it('C16323 - Переключение языка', () => {
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Главная');
        // меняет язык
        basicCom.switch_language();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Home');
        // меняет язык
        basicCom.switch_language();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
          .should('have.text', 'Главная');
    });
});
