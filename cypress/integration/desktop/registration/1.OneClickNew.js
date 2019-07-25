import {navReg} from '@support/desktop/NavReg';
describe('Registration', () => {
    const button_registration = '.level-right > :nth-child(2) > .button';
    const acceptance_of_terms = 'label.control.control-checkbox.radio > span.checkmark';
    const user_agreement_of_usage =  '.button-container > .button';
    it('Регистрация в 1 клик', function () {
        // нажатие на кнопку "регистрация"
        cy.get(button_registration)
            .click();
        // проверка страны по умолчанию
        navReg.check_country_default;
            cy.wait(5000);
        // нажатие на кнопку "согласие с условиями"
        cy.get(acceptance_of_terms)
            .click();
        //проверка правильности текста условий соглашения
        cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с Условиями Соглашения об использовании сайта 1WIN');
        // нажатие на кнопку "Зарегистрироваться"
        cy.get(user_agreement_of_usage)
            .click();
            cy.wait(5000);
             // проверка успешной регистрации
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Регистрация прошла успешно!' );
        // проверка поля логин/пароль
        navReg.check_reg_result();
    });
    it('Регистрация в 1 клик + промокод', function () {
        // нажатие на кнопку "регистрация"
        cy.get(button_registration)
            .click();
        // проверка страны по умолчанию
        navReg.check_country_default;
        // нажать на кнопку "добавить промокод"
        cy.get('.add_promocode')
            .click();
        // ввести в поле промокод
        cy.get('.field > .control > .input-wrapper > .input')
            .type('Stest001');
        // нажатие на кнопку "согласие с условиями"
        cy.get(acceptance_of_terms)
            .click();
        //проверка правильности текста условий соглашения
        cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с Условиями Соглашения об использовании сайта 1WIN');
        // нажатие на кнопку "Зарегистрироваться"
        cy.get(user_agreement_of_usage)
            .click();
        // проверка успешной регистрации
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Регистрация прошла успешно!' );
        // проверка поля логин/пароль
        navReg.check_reg_result();
    });
    it('Регистрация в 1 клик с другой страной', function () {
        // нажатие на кнопку "регистрация"
        cy.get(button_registration)
            .click();
        // проверка страны по умолчанию
        navReg.check_country_default;
        navReg.set_country( "Angola");
        // нажатие на кнопку "согласие с условиями"
        cy.get(acceptance_of_terms)
            .click();
        //проверка правильности текста условий соглашения
        cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с Условиями Соглашения об использовании сайта 1WIN');
        // нажатие на кнопку "Зарегистрироваться"
        cy.get(user_agreement_of_usage)
            .click();
        // проверка успешной регистрации
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Регистрация прошла успешно!' );
        // проверка поля логин/пароль
        navReg.check_reg_result();
        // копирование логина/пароля
        cy.get(`.user-info__btns > :nth-child(1)`)
            .click();
    });
    it('Регистрация в 1 клик с другой страной+ промокод', function () {
        // нажатие на кнопку "регистрация"
        cy.get(button_registration)
            .click();
        // проверка страны по умолчанию
        navReg.check_country_default;
        navReg.set_country( "Angola");
        // нажать на кнопку "добавить промокод"
        cy.get('.add_promocode')
            .click();
        // ввести в поле промокод
        cy.get('.field > .control > .input-wrapper > .input')
            .type('Stest001');
        // нажатие на кнопку "согласие с условиями"
        cy.get(acceptance_of_terms)
            .click();
        //проверка правильности текста условий соглашения
        cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с Условиями Соглашения об использовании сайта 1WIN');
        // нажатие на кнопку "Зарегистрироваться"
        cy.get(user_agreement_of_usage)
            .click();
        // проверка успешной регистрации
        cy.get('.modal-container__header__row__cell__title')
            .should('have.text','Регистрация прошла успешно!' );
        // проверка поля логин/пароль
        navReg.check_reg_result();
    });
    it('Регистрация в 1 клик с отправкой логина/пароля на почту', function () {
        // нажатие на кнопку "регистрация"
        cy.get(button_registration)
            .click();
        // проверка страны по умолчанию
        navReg.check_country_default;
        // нажатие на кнопку "согласие с условиями"
        cy.get(acceptance_of_terms)
            .click();
        //проверка правильности текста условий соглашения
        cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с Условиями Соглашения об использовании сайта 1WIN');
        // нажатие на кнопку "Зарегистрироваться"
        cy.get(user_agreement_of_usage)
            .click();
        cy.get('.user-info__btns > :nth-child(3) > .icon')
            .click();
        cy.get('.input-wrapper > .input')
            .type('test@ahem.email');
        cy.get('.user-info__email > .button')
            .click();
        cy.window().should('have.text', '1WIN');
        //cy.get('.user-info__email__success')
           // .should('have.text', 'Письмо успешно отправлено')
        //await sleep(5000);
        //const mail1=await mail.getMessage('test@ahem.email');
        //console.log(mail1);
        //mail1.should('have.text','1Win - Ваш аккаунт 1win');
    });
});
