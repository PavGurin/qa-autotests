// ***********************************************
// This file only for registration commands
// ***********************************************

export const navReg = {

    // button Регистрация
    click_register() {

        cy.get('.level-item > .green')
          .click();
    },

    //Radio button User Agreement of usage
    agreement() {

        cy.get('.checkmark')
          .click();
    },

    //Button Sign up not social
    sign_up() {

        cy.get('.button-container > .button')
          .click();
    },

    //Button next only for social
    next() {

        cy.contains('Далее')
          .click();
    },

    //Button add promocode
    add_promocode(promo) {

        cy.get('.add_promocode')
          .click()
          .get('.field > .control > .control-input-wrapper > .input')
          .type(promo);
    },

    //Select country
    set_country(country) {

        cy.get('.trigger')
          .click()
          .get(country)
          .click();
    },

    //Ckeck country
    check_country(country1) {
        cy
            .get('.modal-container')
            .last()
            .as('modal');

        cy
            .get('@modal')
            .find('.country-select input')
            .should('have.value', country1);
    },

    //Switch on e-mail form registration
    registration_form(button) {

        cy.contains(button)
          .click();
    },

    //email form - name
    name_field(name) {

        cy.get('.form > :nth-child(1) > .control-input-wrapper > .input')
          .type(name);
    },

    //email form - email
    email_field(email) {

        cy.get(':nth-child(5) > .control-input-wrapper > .input')
          .type(email);
    },

    //email form - password
    password_field(password) {

        cy.get(':nth-child(6) > .control-input-wrapper > .input')
          .type(password);
    },

    //email form - password second field
    password2_field(password2) {

        cy.get(':nth-child(7) > .control-input-wrapper > .input')
          .type(password2);
    },

    //email form - day
    day_field(day) {

        cy.get('div:nth-child(1) > .default-select > .select')
          .select(day);
    },

    //email form - month
    month_field(month) {

        cy.get('div:nth-child(2) > .default-select > .select')
          .select(month);
    },

    //email form - year
    year_field(year) {

        cy.get('div:nth-child(3) > .default-select > .select')
          .select(year);
    },

    //email form - country phone
    country_phone_field(country_phone) {

        cy.get('.form > .control > .separate-dial-code')
          .click(country_phone);
    },

    //email form -  phone
    phone_field(phone) {

        cy.get('.intl-tel-input > .control > .control-input-wrapper > .input')
          .type(phone);
    },

    //social form -  vk
    vk() {
        cy.get(' div.block.lg.level-center.gap-sm.register-block > div > div:nth-child(1)')
          .click();
    },

    //social form -  ok
    ok() {

        cy.get(' div.block.lg.level-center.gap-sm.register-block > div > div:nth-child(2)')
          .click();

    },

    //social form -  google
    google() {

        cy.get(' div.block.lg.level-center.gap-sm.register-block > div > div:nth-child(3)')
          .click();
    },

    //social form - password
    password_social(password) {

        cy.get(':nth-child(1) > .control > .control-input-wrapper > .input')
          .type(password);
    },

    //social form - password2
    password2_social(password2) {
        cy.get(':nth-child(2) > .control > .control-input-wrapper > .input')
          .type(password2);
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
    }
};
