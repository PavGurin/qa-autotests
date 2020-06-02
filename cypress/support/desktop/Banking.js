const notification = '.notification-item'

export const bank = {
  // visa
  withdrawal_visa () {
    cy.get('.payments-row > :nth-child(1) > .button-content')
            .click()
    cy.get(':nth-child(1) > .input-container > .input')
            .type('4276550033908289')
    cy.get(':nth-child(2) > .input-container > .input')
            .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
            .should('be.visible').click()
  },
  // QIWI
  withdrawal_Qiwi () {
    cy.get('.payments-row > :nth-child(2) > .button-content')
            .click()
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div:nth-child(1) > div.input-container > input')
            .type('+79213453232')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div:nth-child(2) > div.input-container')
            .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button > span')
            .should('be.visible').click()
  },
  // WebMoney
  withdrawal_WebMoney () {
    cy.get('.payments-row > :nth-child(3) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('Z123456789012')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // Яндекс деньги
  withdrawal_YandexMoney () {
    cy.get(':nth-child(4) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('410010101021023')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // Билайн
  withdrawal_Beeline () {
    cy.get(':nth-child(7) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('+79054567843')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // Мегафон
  withdrawal_Megafon () {
    cy.get(':nth-child(9) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('+79214567843')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // Теле 2
  withdrawal_Tele2 () {
    cy.get(':nth-child(10) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('+79114567843')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // MTC
  withdrawal_MTC () {
    cy.get(':nth-child(8) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('+79114567843')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  // AdvaCash
  withdrawal_AdvCash () {
    cy.get(':nth-child(6) > .button-content')
      .click()
    cy.get(':nth-child(1) > .input-container > .input')
      .type('lina.solodova@gmail.com')
    cy.get(':nth-child(2) > .input-container > .input')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.withdrawal-payment > form > div.button-wrapper > button')
      .should('be.visible').click()
  },
  assert_withdrawal_visa () {
    cy.get('.description')
            .should('have.text', 'На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.')
  },
  assert_withdrawal () {
    cy.get('.description')
            .should('have.text', 'На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения')
  },
  assert_withdrawalMobile () {
    cy.get('.withdrawal-confirmation-info')
      .should('have.text', 'На Ваш email адрес Ginl39@1win.xyz был отправлен код подтверждения')
  },
  deposit_megafon () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > div.payments-row > button:nth-child(5)')
            .click()
    cy.get(':nth-child(1) > .input-container > .input')
            .type('+79313909537')
    cy.get('div:nth-child(2) > div.input-container > .input')
            .type('10')
    cy.get('.button-wrapper > .button > .button-content')
            .should('be.visible').click()
  },
  assert_deposit_megafon () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div.instructions', { timeout: 10000 })
            .should('have.text', 'Уважаемый клиент! Ваш запрос успешно принят. Вам отправлено СМС с подробной инструкцией для завершения оплаты. Просим Вас следовать указанным действиям. Вы можете закрыть эту страницу, после подтверждения оплаты платеж будет обработан автоматически. Абонентам Мегафон: После списания суммы покупки на вашем счете должно остаться не менее 10 руб. Минимальная сумма единовременного платежа 10 руб. Максимальный разовый платеж - 5000 руб. Максимальная сумма платежей за сутки - 15000 руб. Максимальная сумма платежей за месяц – 40000 руб. Недоступна мобильная коммерция абонентам: с корпоративным клиентам и абонентам с кредитным тарифом. ')
  },
  assert_deposit_desktop () {
    cy.get('.modal-container__body > :nth-child(2)', { timeout: 10000 })
            .should('have.text', 'Уважаемый клиент! Ваш запрос успешно принят. Вам отправлено СМС с подробной инструкцией для завершения оплаты. Просим Вас следовать указанным действиям. Вы можете закрыть эту страницу, после подтверждения оплаты платеж будет обработан автоматически. Абонентам Мегафон: После списания суммы покупки на вашем счете должно остаться не менее 10 руб. Минимальная сумма единовременного платежа 10 руб. Максимальный разовый платеж - 5000 руб. Максимальная сумма платежей за сутки - 15000 руб. Максимальная сумма платежей за месяц – 40000 руб. Недоступна мобильная коммерция абонентам: с корпоративным клиентам и абонентам с кредитным тарифом. ')
  },
  transfer_for_mobile (mail) {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > section > form > div:nth-child(2) > div.input-container > input')
            .type(mail)
    cy.get('div:nth-child(3) > div.input-container > .input')
            .type('20')
    cy.get('.button-wrapper > .button > .button-content')
            .should('be.visible').click()
  },
  check_notification_valid_transfer_for_mobile () {
    cy.get('#notifications-container')
            .should('be.visible')
            .and('have.text', 'Перевод совершен успешно')
  },
  check_notification_invalid_transfer_for_mobile () {
    cy.get('#notifications-container')
            .should('be.visible')
            .and('have.text', 'Получатель не найден')
  },
  assert_witdrawal () {
    cy.get('.description')
            .should('have.text', 'На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.')
  },
  assert_transfer2 () {
    cy.get('#app-overlay-wrapper > div > div > div.modal-container__container > div.modal-container__body > form > div.transfer__description')
            .should('have.text', 'На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.')
  },
  assert_transfer () {
    // проверяем ошибку и ее текст
    cy.get(notification)
            .should('visible')
            .and('have.text', 'Средства успешно переведены.')
  },
  wrong_transfer () {
    // проверяем ошибку и ее текст
    cy.get(notification)
            .should('visible')
            .and('have.text', 'Получатель не найден')
  },
  button_transfer_for_mobile () {
    cy.get('.transfer-confirmation-button > .button-content')
      .should('be.visible').click()
  },
  button_continue_visible_for_mobile () {
    cy.get('.button-wrapper > .button > .button-content')
      .should('be.visible')
  },
  button_continue_disabled_for_mobile () {
    cy.get('.button-wrapper > .button')
      .should('be.disabled')
  },
  visa_method_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > div.payments-row > button:nth-child(1) > span')
      .click()
  },
  YandexCash_method_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > div.payments-row > button:nth-child(3) > span')
      .click()
  },
  Qiwi_method_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > div.payments-row > button:nth-child(2) > span')
      .click()
  },
  Beeline_method_for_mobile () {
    cy.get(':nth-child(6) > .button-content')
      .click()
  },
  Mts_method_for_mobile () {
    cy.get(':nth-child(4) > .button-content')
      .click()
  },
  Piastrix_method_for_mobile () {
    cy.get(':nth-child(8) > .button-content')
      .click()
  },
  Bitcoin_method_for_mobile () {
    cy.get(':nth-child(9) > .button-content')
      .click()
  },
  BitcoinUSD_method_for_mobile () {
    cy.get(':nth-child(3) > .button-content > .payment-icon')
      .click()
  },
  InvoiceUSD_method_for_mobile () {
    cy.get(':nth-child(4) > .button-content > .payment-icon')
      .click()
  },
  Invoice_method_for_mobile () {
    cy.get(':nth-child(10) > .button-content')
      .click()
  },
  Tele2_method_for_mobile () {
    cy.get(':nth-child(7) > .button-content')
      .click()
  },
  deposit_visa_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button')
      .should('be.disabled')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div:nth-child(1) > div.input-container > input')
      .click()
      .type('4276550033908289')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div:nth-child(2) > div.input-container')
      .type('100')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button > span')
      .should('be.visible')
  },
  YandexCash_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button')
      .should('be.disabled')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.control.payment-form-input.default > div.input-container > input')
      .click()
      .type('10')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button > span')
      .should('be.visible')
  },
  Qiwi_for_mobile () {
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button')
      .should('be.disabled')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div:nth-child(1) > div.input-container')
      .click()
      .type('+79213990990')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div:nth-child(2) > div.input-container')
      .click()
      .type('10')
    cy.get('#main-layout > div.wrapper.has-tabs > div > div > div > form > div.button-wrapper > button')
      .should('be.visible')
  },
  Piastrix_for_mobile (sum) {
    cy.get('.input')
      .click()
      .type(sum)
  },
  changeRUB_for_mobile () {
    cy.get('.wallet-input__change')
      .click()
    cy.get('.wallet-select-list > :nth-child(1)')
      .click()
  },
  changeEUR_for_mobile () {
    cy.get('.wallet-input__change')
      .click()
    cy.get('.wallet-select-list > :nth-child(3)')
      .click()
  },
  changeUAH_for_mobile () {
    cy.get('.wallet-input__change')
      .click()
    cy.get('.wallet-select-list > :nth-child(4)')
      .click()
  },
}
