describe('Language switch', () => {
    const header_first_elem = 'a:nth-child(1) > div > div.item-text';
    const lang_switcher = 'img.country.size-xxl';
    const second_lang = 'img.country.size-xl';

    it('C16323 Переключение языка', () => {
        cy.visit('/');
        // наводит курсор на кнопку выбора языка
        cy.get(lang_switcher)
            .trigger('mouseover');
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
            .should('have.text', 'Главная');
        // выбирает второй язык (переключает нынешний)
        cy.get(second_lang)
            .click();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
            .should('have.text', 'Home');
         // наводит курсор на кнопку выбора языка
        cy.get(lang_switcher)
            .trigger('mouseover');
        // выбирает второй язык (переключает нынешний)
        cy.get(second_lang)
            .click();
        // сверяет текст первого элемента меню
        cy.get(header_first_elem)
            .should('have.text', 'Главная');
    });
});
