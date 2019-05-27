/**
 Registration commands
 **/

const password_input = '.input[name=password]';
const password_input_repeat = 'input[name=repeatPassword]';

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

    // close window with new user's login/pass
    close_new_user_info() {
        cy.get('i.fa-times')
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

    // select country from registration page
    set_country(country) {
        cy.get('.trigger')
          .click()
          .get('div.modal-container span')
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

    // email form - email
    set_email(email) {
        cy.get(':nth-child(5) > .input-wrapper > .input')
          .type(email);
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
        cy.get('div:nth-child(1) > .default-select > .select')
          .select(day);
    },

    // email form - month of birth
    set_birth_month(month) {
        cy.get('div:nth-child(2) > .default-select > .select')
          .select(month);
    },

    // email form - year of birth
    set_birth_year(year) {
        cy.get('div:nth-child(3) > .default-select > .select')
          .select(year);
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

    // social form - password
    password_input(password) {
        cy.get(password_input)
          .type(password);
    },

    // social form - password repeat
    password_input_repeat(password) {
        cy.get(password_input_repeat)
          .type(password);
    },

    application_ios() {
        cy.get('.application-items > .application-card-ios')
          .first();
    },

    application_ios_click() {
        cy.get('.application-items > .application-card-ios')
          .first()
          .click();
    },

    application_android() {
        cy.get('.application-items > .application-card-android')
          .first();
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
        cy.url().should("include", "oauth.vk.com")

    }
};
