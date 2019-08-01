/**
 Registration commands
 **/

const password_input = '.input[name=password]';
const new_password = ':nth-child(2) > .control > .input-wrapper > .input';
const close_modal_windows = '.modal-container__header__row > :nth-child(2) > .icon';

export const navReg = {

    // registration button
    click_register() {
        cy.get('.level-item > .green')
            .click();
    },

    // radio button 'User Agreement of usage'
    accept_agreement() {
        cy.get('span.checkmark')
            .click();
    },

    // sign up button
    sign_up() {
        cy.get('.button-container > .button')
            .click();
    },

    sign_up_check(){
        cy.get('.button-container > .button')
            .should('be.visible');
    },

    // close window with new user's login/pass
    close_new_user_info() {
        cy.get('.modal-container__header__row__cell__overlay')
            .click();
    },

    // button click_next only for social
    click_next() {
        cy.get('button.button.dark')
            .click();
    },

    // enter promocode
    add_promocode(promocode) {
        cy.get('.add_promocode')
            .click()
            .get('.field > .control > .input-wrapper > .input')
            .type(promocode);
    },
    // закрыть (нажать крестик) поле промокода
    close_promocode() {
        cy.get('.form > .field > .button')
            .click();
    },
    // select country from registration page
    set_country(country) {
        cy.get('.trigger')
            .click()
            .get('div.dropdown-item span')
            .contains(country)
            .click();
    },

    // check default country
    check_country_default(country) {
        cy.get('.modal-container')
            .last()
            .as('selected_country');
        cy.get('@selected_country')
            .find('.country-select input')
            .should('have.value', country);
    },

    // switch registration form type
    registration_form(type) {
        cy.contains(type)
            .click();
    },

    // email form - name
    set_name(name) {
        cy.get('.form > :nth-child(1) > .input-wrapper > .input')
            .type(name);
    },

    set_date_of_birth(date) {
        cy.get(':nth-child(2) > .input-wrapper > .input')
            .type(date)
    },

    // email form - email
    set_email(email) {
        cy.get('.input-wrapper > .input')
            .type(email);
        cy.get('.user-info__email > .button')
            .click();
    },

    // email form - password
    set_pwd(password) {
        cy.get(':nth-child(6) > .input-wrapper > .input')
            .type(password);
    },

    // email form - repeat password field
    repeat_pwd(password2) {
        cy.get(':nth-child(7) > .input-wrapper > .input')
            .type(password2);
    },

    // email form - day of birth
    set_birth_day(day) {
        cy.get('.date .input')
            .type('{selectall}{del}')
            .type(day);
    },

    // email form - month of birth
    set_birth_month(month) {
        cy.get('.date-item.month')
            .click()
            .find('div.dropdown-item')
            .first();
    },

    // email form - year of birth
    set_birth_year(year) {
        cy.get('.year .input')
            .type('{selectall}{del}')
            .type(year);
    },

    // email form - country phone
    country_phone_field(country_phone) {
        cy.get('.form > .control > .separate-dial-code')
            .click(country_phone);
    },

    // email form -  phone
    set_phone_numb(phone) {
        cy.get('.intl-tel-input > .control > .input-wrapper > .input')
            .type(phone);
    },

    // choose social network for registration (both language versions got same social network names)
    set_social_network(social_network) {
        cy.contains(social_network)
            .click();
    },
    // social_network - OK
    set_social_network_OK(social_network) {
        cy.contains(social_network)
            .click();
    },
    //
    // social form - password
    password_input(password) {
        cy.get(password_input)
            .type(password);
    },

    // social form - password repeat
    password_input_repeat(password) {
        cy.get(new_password)
            .type(password);
    },

    click_ios_download() {
        cy.get('div:nth-child(2) > a.application-card.left-block-item-ios.application-card-ios > div > svg')
            .click();
    },

    application_ios_click() {
        cy.get('div:nth-child(2) > a.application-card.left-block-item-ios.application-card-ios > div > svg')
            .first()
            .click();
    },

    check_android_download() {
        cy.get('div:nth-child(2) > a.application-card.left-block-item-android.application-card-android')
            .should('be.visible');
        cy.get('.level-item > .application-card-android')
            .should('have.attr', 'href').and('include', '/apk-folder/1win-1wtis.xyz.apk');
    },


    check_reg_result() {
        cy.get('.modal-container .user-info .user-info__content__item')
            .then(($new_user_info) => {
                const login = $new_user_info[0].lastChild.outerText;
                const password = $new_user_info[1].lastChild.outerText;

                expect(login).not.to.be.empty;
                expect(password).not.to.be.empty;

                cy.log(`Логин - ${login}, Пароль - ${password}`);
                cy.screenshot();
            });
    },

    // check that reg window is closed and username equals requested during reg
    check_sign_up(userName) {
        cy.get('div.modal-container')
            .should('not.exist');
        cy.get('.user-name > span')
            .should('have.text', userName);
        cy.screenshot();
    },

    // check redirection to vk oauth page
    check_vk_reg() {
        cy.url()
            .should("contains", "oauth.vk.com");
    },
    // close modal container register
    close_modal_windows() {
        cy.get(close_modal_windows)
            .click();
    },
    //проверка модального окна "Регистрация"
    register_assert_modal_container() {
        cy.get('#main-container > div.modal-wrapper > div > div.modal-container__header')
            .should('have.text', 'Регистрация');
    },
    // Проверка, что кнопка "Зарегистрироваться"(внутри модального окна) неактивна
    register_assert_disabled() {
        cy.get('div.button-container > button')
            .should('be.disabled');
    },
    //проверка, что кнопка "Зарегистрироваться" активна
    register_assert_visible() {
        cy.get('div.button-container > button')
            .should('be.visible');
    },
    // Проверка, что кнопка "далее"(внутри модального окна регистрция-соц.сети) неактивна
    register_next_assert_disabled() {
        cy.get('div.button-container > button')
            .should('be.disabled');
    },
    //проверка, что кнопка "Зарегистрироваться" активна
    register_next_assert_visible() {
        cy.get('div.button-container > button')
            .should('be.visible');
    },
    //проверка модального окна "Приложение iOS"
    check_ios_download_window() {
        cy.get('#main-container > div.modal-wrapper > div > h1')
            .should('have.text', 'Приложение iOS');
        cy.get('#main-container > div.modal-wrapper > div > a.ios-instruction-details')
            .should('have.attr', 'href').and('include', 'https://support.apple.com/ru-ru/HT204460');
    },
    // email form - email
    button_set_email(email) {
        cy.get('.user-info__btns > :nth-child(3) > .icon')
            .click();
    },
    // Check on contains text in 1 click form
    contains_check_1click() {
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(0), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
    },
        // Check on contains text in social network form
    contains_check_social() {
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(1), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
    },
    // Check on contains text in e--mail form
    contains_check_mail() {
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(2), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
    },
    copy_login_password(){
    cy.get('div.modal-container__container > div > div > div.user-info__btns > button:nth-child(1)')
        .click();
    },
};
