//Профиль игрока
const notification = '.notification-content';
export const prof = {
    // Кнопка "войти в профиль"
    profile_for_mobile() {
        cy.get('#header > div > div > div.control-item > button > span')
            .click();
    },
    // служба поддержки
    support_for_mobile() {
        cy.get('#main-layout > div.wrapper > div > div > div:nth-child(2) > div:nth-child(1) > div > div')
            .click();
    },
    // история ставок
    bets_history_for_mobile() {
        cy.get('#main-layout > div.wrapper > div > div > div:nth-child(2) > div:nth-child(1) > div > a:nth-child(2) > div')
            .click();
    },
    // настройки в моб.версии
    settings_for_mobile() {
        cy.get('#main-layout > div.wrapper > div > div > div:nth-child(2) > div:nth-child(1) > a')
            .click();
    },
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
            .should('have.text', 'Пополнение');
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
    open_close_withdrawal_history() {
        cy.get('.swiper')
            .click();
    },
    //проверка модального окна "Вывод средств"
    withdrawal_history_modal_container() {
        cy.get('div:nth-child(2) > div.modal-container__header')
            .should('have.text', 'История выводов');
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
            .should('have.text', 'Вывод средств');
    },
    //Ввести почту
    transfer_mail_() {
        cy.get('div.modal-container__container > div.modal-container__body > form > div.control > div > input')
            .type('where100@mail.ru');
    },
    //проверка модального окна "Перевод средств"
    transfer_assert_modal_container() {
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text', 'Перевод средств');
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
            .should('have.text', 'Настройки');
    },
    //Заполнение и проверка полей и кнопок в настройках
    settings_form() {
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .clear()
            .type('test1234');
        cy.get('div:nth-child(2) > div > input')
            .clear()
            .type('01061999');
        cy.get('div.country-select.row > div > div > div > div')
            .click();
        cy.get('div.modal-container__container > div > form > div.field > div > div > input')
            .type('testerQA');
        cy.get('div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input')
            .clear()
            .type('905999888700');

    },
    //проверка модального окна "Настройки"
    settings_mail_disabled() {
        cy.get('div:nth-child(5) > div > input')
            .should('be.disabled');
    },
    //Cохранить настройки
    click_save_settings() {
        cy.get('.button-wrapper > .button')
            .click();
    },
    //Cохранить настройки y на моб.версии
    click_save_settings_for_mobile() {
        cy.get('.submit-btn > .button-content')
            .click();
    },
    // проверяем, что изменение пароля успешно
    check_change_settings() {
        cy.get(notification)
            .should('be.visible')
            .and('have.text', 'Настройки сохранены');
    },
    // проверяем, что изменение пароля успешно на моб.версии
    check_change_settings_for_mobile() {
        cy.get('#notifications-container')
            .should('be.visible')
            .and('have.text', 'Настройки сохранены');
    },
    //Заполнение поля "имя" в настройках
    settings_form_name(name) {
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .clear()
            .type(name);
    },
    //Заполнение поля "имя" в настройках на моб.версии
    settings_form_name_for_mobile(name) {
        cy.get('.form > :nth-child(1) > .control > .input-container > .input')
            .clear()
            .type(name);
    },
    //Заполнение поля "пароль" в настройках на моб.версии
    settings_form_pass_for_mobile(pass) {
        cy.get('.form > :nth-child(6) > .control > .input-container > .input')
            .clear()
            .type(pass);
    },
    //Заполнение поля "имя" в настройках
    settings_form_pass() {
        cy.get('div.modal-container__container > div > form > div.field > div > div > input')
            .type('testerQA');
    },
    //Заполнение поля "имя" в настройках
    settings_form_name_2or16_symbols() {
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .clear()
            .type('Q2');
        cy.get('div.modal-container__container > div > form > div.button-wrapper > button')
            .should('be.disabled');
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .clear()
            .type('Q2Bvfrbkdblgblfgnflnfnlflglndsvsdv');
        cy.get('div.modal-container__container > div > form > div.button-wrapper > button')
            .should('be.disabled');
    },
    //Заполнение поля "имя" в настройках для мобильной версии
    settings_form_name_4_or_16_symbols() {
        cy.get('#profile-edit > form > div:nth-child(1) > div > div.input-container > input')
            .clear()
            .type('T2w');
        cy.get('#profile-edit > form > div:nth-child(1) > div > div.input-container > div')
            .should('have.text', 'Минимум 4 символов');
        cy.get('#profile-edit > form > div:nth-child(1) > div > div.input-container > input')
            .clear()
            .type('Q2Bvfrbkdblgblfgnflnfnlflglndsvsdv');
        cy.get('#profile-edit > form > div:nth-child(1) > div > div.input-container > div')
            .should('have.text', 'Максимум 16 символов');
    },
    //Заполнение поля "дата рождения" в настройках
    settings_form_birthday() {
        cy.get('div:nth-child(2) > div > input')
            .clear()
            .type('00000000');
        cy.get('div.modal-container__container > div > form > div.button-wrapper > button')
            .should('be.disabled');
        cy.get('div:nth-child(2) > div > input')
            .clear()
            .type('02082015');
        cy.get('div.modal-container__container > div > form > div.button-wrapper > button')
            .should('be.disabled');
        cy.get('div:nth-child(2) > div > input')
            .clear()
            .type('30022000');
        cy.get('div.modal-container__container > div > form > div.button-wrapper > button')
            .should('be.disabled');
        cy.get('div:nth-child(2) > div > input')
            .clear()
            .type('15011990');

    },
    //Заполнение поля "дата рождения" в настройках моб.версии
    settings_birthday_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(2) > div > div.input-container > input')
            .clear()
            .type('2006-12-31');
    },
    settings_correct_birthday_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(2) > div > div.input-container > input')
            .clear()
            .type('2000-01-30');
    },
    //Заполнение поля "номер телефона" в настройках
    settings_form_numbPhone_Andorra() {
        cy.get('div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input')
            .clear()
            .type('666321');
    },
    // Выбор страны, где номер телефона
    set_country_number_phone(country) {
        cy.get('.intl-tel-input > .control > .input-wrapper > .dropdown-container > .country-dropdown > .dropdown > .dropdown-trigger > .trigger')
            .click()
            .get('.recycle-list')
            .contains(country)
            .click();
    },
    //Заполнение поля "номер телефона" в настройках
    settings_form_numbPhone() {
        cy.get('div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input')
            .clear()
            .type('9219963214');
    },
    //Заполнение поля "номер телефона" в настройках
    settings_form_numbPhone_for_mobile(phone) {
        cy.get('#profile-edit > form > div:nth-child(4) > div > div > div.input-container > input')
            .clear()
            .type(phone);
    },
    //Заполнение поля "Текущий пароль" в настройках
    settings_form_newpass() {
        cy.get('div.modal-container__container > div > form > div.field > button > span')
            .click();
        cy.get('div.modal-container__container > div > form > div.field > div > div > input')
            .type('qwerty1');
        cy.get('div.modal-container__container > div > form > div:nth-child(7) > div > input')
            .type('qwerty');
        cy.get('div.modal-container__container > div > form > div:nth-child(8) > div > input')
            .type('qwerty');


    },
    // проверяем, что изменение пароля  не успешно
    new_pass_wrong() {
        cy.get(notification)
            .should('be.visible')
            .and('have.text', 'Неверный пароль');
    },
    //Заполнение поля "Текущий пароль" в настройках
    correct_pass() {
        cy.get('div.modal-container__container > div > form > div.field > div > div > input')
            .clear()
            .type('qwerty');
    },
    // Раскрыть ставку
    bets_history() {
        cy.get('.level-center > :nth-child(2) > .button > span')
            .click();
    },
    // проверка, что внутри ставки отображаются данные
    bets_history_notBeEmpty() {
        cy.get('#main-container > div.content-wrapper > div > div > div > div.panel-body > div > div:nth-child(1)')
            .should('not.to.be.empty');
    },

    error_date_birthday_for_mobile() {
    cy.get('#profile-edit > form > div:nth-child(2) > div > div.input-container > div')
        .should('have.text', 'Вам меньше 18 лет');
    },
    // проверка, что внутри ставки отображаются данные
    assert_date_birthday_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(2) > div > div.input-container')
            .should('not.be.empty');
    },
    // проверка, что внутри ставки отображаются данные
    change_pass_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(6) > div > div.control-right > button > span')
            .click();
    },
    old_pass_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(6) > div > div.input-container > input')
            .click()
            .type('qwerty');
    },
    new_pass_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(7) > div > div.input-container > input')
            .click()
            .type('qwerty');
        cy.get('#profile-edit > form > div:nth-child(8) > div > div.input-container > input')
            .click()
            .type('qwerty');
    },
    // проверка, что внутри ставки отображаются данные
    assert_mail_visible_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(5) > div > div.input-container > input')
            .should('be.visible');
    },
    // проверка, что внутри ставки отображаются данные
    assert_mail_disabled_for_mobile() {
        cy.get('#profile-edit > form > div:nth-child(5) > div > div.input-container > input')
            .should('be.disabled');
    },
};

