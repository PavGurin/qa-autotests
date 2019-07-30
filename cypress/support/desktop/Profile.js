//Профиль игрока

export const prof = {
    // Кнопка "пополнить"
    deposit() {
        cy.get('.level-center > :nth-child(2) > .button > span')
            .click();
    },
    // Проверка, что кнопка "пополнить"(внутри модального окна) неактивна
    deposit_assert() {
        cy.get('#main-container > div.modal-wrapper > div > div.modal-container__container > div.modal-container__body > form > div.send-row > button')
            .should('be.disabled');
    },
    // раскрыть весь список способов пополнения
    deposit_change() {
        cy.get('.select-icon')
           .first()
           .trigger('mouseover');
        cy.get('.name')
            .click();
    },
    // выбрать последний элемент из списка
    deposit_change_switch(text) {
        cy.contains(text)
            .click();
    },
    // Ввести номер карты
    credit_card_number() {
        cy.get(':nth-child(2) > .control > .input-wrapper > .input')
             .type('55504321554321');
    },
    //Внести сумму(модальное окно "пополнить"
    deposit_number() {
        cy.get('.send-row > .control > .input-wrapper > .input')
            .type('750');
    },
    //проверка, что кнопка "пополнить" активна
    deposit_assert_visible() {
    cy.get('div.modal-container__body > form > div.send-row > button')
        .should('be.visible');
    },
    //проверка модального окна "Пополнение"
    deposit_assert_modal_container() {
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Пополнение');
    },
    //вывод средств
    withdrawal(text) {
        cy.get('.user-name > span')
            .trigger("mouseover");
        cy.get('.dropdown-content')
            .contains(text)
            .click();
    },
    // Кнопка "открыть/закрыть историю выводов"
    open_close_withdrawal_history(){
        cy.get('.swiper')
            .click();
    },
    //проверка модального окна "Вывод средств"
    withdrawal_history_modal_container() {
        cy.get('div:nth-child(2) > div.modal-container__header')
            .should('have.text','История выводов');
    },
    //Внести сумму(модальное окно "Вывод")
    withdrawal_number_() {
        cy.get(':nth-child(3) > .control > .input-wrapper > .input')
            .type('750');
    },
    // Проверка, что кнопка "вывести"(внутри модального окна) неактивна
    withdrawal_assert_disabled() {
        cy.get('div:nth-child(3) > button')
            .should('be.disabled');
    },
    //проверка, что кнопка "пополнить" активна
    withdrawal_assert_visible() {
        cy.get('div:nth-child(3) > button')
            .should('be.visible');
    },
    //проверка модального окна "Вывод средств"
    withdrawal_assert_modal_container() {
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Вывод средств');
    },
    //Ввести почту
    transfer_mail_() {
        cy.get('div.modal-container__container > div.modal-container__body > form > div.control > div > input')
            .type('where100@mail.ru');
    },
    //проверка модального окна "Перевод средств"
    transfer_assert_modal_container() {
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Перевод средств');
    },
    // Проверка, что кнопка "Перевести"(внутри модального окна) неактивна
    transfer_assert_disabled() {
        cy.get('div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button')
            .should('be.disabled')
    },
    //проверка, что кнопка "перевести" активна
    transfer_assert_visible() {
        cy.get('div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button')
            .should('be.visible');
    },
    //ввести сумму
    transfer_deposit() {
        cy.get('.transfer__send-container > .control > .input-wrapper > .input')
            .type('1000');
    },
    //кнопка "скрыть баланас"
    settings_hidebalance() {
        cy.get('.swiper')
            .click();
        cy.get('#header > div.container.level.header__line.header__line--top > div.level-center.gap-md.header-block-center > div:nth-child(1) > div > div:nth-child(2)')
            .should('not.exist');
        cy.wait(1000);
        cy.get('.swiper')
            .click();
        cy.get('#header > div.container.level.header__line.header__line--top > div.level-center.gap-md.header-block-center > div:nth-child(1) > div > div:nth-child(2)')
            .should('exist');
    },
    //проверка модального окна "Настройки"
    settings_assert_modal_container() {
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Настройки');
    },
    //Заполнение и проверка полей и кнопок в настройках
    settings_form() {
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .type('1234');
        cy.get('div:nth-child(2) > div > input')
          .clear()
            .type('01061999');
        cy.get('div.country-select.row > div > div > div > div')
            .click();
        cy.get('div.modal-container__container > div > form > div.field > div > div > input')
            .type('123456');
    },
    //проверка модального окна "Настройки"
    settings_mail_disabled() {
         cy.get('div:nth-child(5) > div > input')
             .should('be.disabled');
},

};

