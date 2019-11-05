const notification = '.notification-content';
export const bank = {
    // visa
    withdrawal_visa() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payments > div.payments-header > button > span')
            .click();
        cy.get(':nth-child(1) > .input-container > .input')
            .type('4276534242213219');
        cy.get(':nth-child(2) > .input-container > .input')
            .type('100');
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
            .should('be.visible').click();
    },
    // visa
    withdrawal_Qiwi() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payments > div.payments-row > button:nth-child(1) > span')
            .click();
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div:nth-child(1) > div.input-container > input')
            .type('+79213453232');
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div:nth-child(2) > div.input-container')
            .type('100');
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button > span')
            .should('be.visible').click();
    },
    assert_withdrawal_visa() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-confirmation > div.withdrawal-confirmation-info')
            .should('have.text', 'На Ваш email адрес noGm75@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.');
    },
    assert_withdrawal_Qiwi() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-confirmation > div.withdrawal-confirmation-info')
            .should('have.text', 'На Ваш email адрес noGm75@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.');
    },
    deposit_megafon() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > div.payments-row > button:nth-child(5)')
            .click();
        cy.get(':nth-child(1) > .input-container > .input')
            .type('+79313909537');
        cy.get('div:nth-child(2) > div.input-container > .input')
            .type('10');
        cy.get('.button-wrapper > .button > .button-content')
            .should('be.visible').click();
    },
    assert_deposit_megafon() {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.instructions',{timeout:10000})
            .should('have.text', 'Уважаемый клиент! Ваш запрос успешно принят. Вам отправлено СМС с подробной инструкцией для завершения оплаты. Просим Вас следовать указанным действиям. Вы можете закрыть эту страницу, после подтверждения оплаты платеж будет обработан автоматически. Абонентам Мегафон: После списания суммы покупки на вашем счете должно остаться не менее 10 руб. Минимальная сумма единовременного платежа 10 руб. Максимальный разовый платеж - 5000 руб. Максимальная сумма платежей за сутки - 15000 руб. Максимальная сумма платежей за месяц – 40000 руб. Недоступна мобильная коммерция абонентам: с корпоративным клиентам и абонентам с кредитным тарифом. ');
    },
    assert_deposit_desktop() {
        cy.get('.modal-container__body > div',{timeout:10000})
            .should('have.text', 'Уважаемый клиент! Ваш запрос успешно принят. Вам отправлено СМС с подробной инструкцией для завершения оплаты. Просим Вас следовать указанным действиям. Вы можете закрыть эту страницу, после подтверждения оплаты платеж будет обработан автоматически. Абонентам Мегафон: После списания суммы покупки на вашем счете должно остаться не менее 10 руб. Минимальная сумма единовременного платежа 10 руб. Максимальный разовый платеж - 5000 руб. Максимальная сумма платежей за сутки - 15000 руб. Максимальная сумма платежей за месяц – 40000 руб. Недоступна мобильная коммерция абонентам: с корпоративным клиентам и абонентам с кредитным тарифом. ');
    },
    transfer_for_mobile(mail) {
        cy.get('#main-layout > div.wrapper.has-tabs > div > div > section > form > div:nth-child(2) > div.input-container > input')
            .type(mail);
        cy.get('div:nth-child(3) > div.input-container > .input')
            .type('20');
        cy.get('.button-wrapper > .button > .button-content')
            .should('be.visible').click();
    },
    check_notification_valid_transfer_for_mobile() {
        cy.get('#notifications-container')
            .should('be.visible')
            .and('have.text', 'Перевод совершен успешно');
    },
    check_notification_invalid_transfer_for_mobile() {
        cy.get('#notifications-container')
            .should('be.visible')
            .and('have.text', 'Получатель не найден');
    },
    assert_witdrawal() {
        cy.get('.description')
            .should('have.text', 'На Ваш email адрес noGm75@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.');
    },
    assert_transfer2() {
        cy.get('#app-overlay-wrapper > div > div > div.modal-container__container > div.modal-container__body > form > div.transfer__description')
            .should('have.text', 'На Ваш email адрес noGm75@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.');
    },
    assert_transfer() {
        // проверяем ошибку и ее текст
        cy.get(notification)
            .should('visible')
            .and('have.text', 'Средства успешно переведены.');
    },
    wrong_transfer() {
        // проверяем ошибку и ее текст
        cy.get(notification)
            .should('visible')
            .and('have.text', 'Получатель не найден');
    },
};