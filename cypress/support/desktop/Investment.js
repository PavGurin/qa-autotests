/**
 Investment page commands
 **/
export const invest = {

/** кнопка "Инвестировать"**/
  click_invest () {
    cy.get(".invest-section-1-buttons .button-invest:nth-child(1)", { timeout: 10000 })
            .click();
  },
  /** ввести сумму"**/
  invest_money (text) {
    cy.get(".invest-modal-input input", { timeout: 10000 })
        .clear()
        .type(text);
  },
  /** нажать "Инвестировать" в модальном окне**/
  click_invest_modal () {
    cy.get(".button-invest.invest-modal-button", { timeout: 10000 })
        .click();
  },
  /** закрыть модальное окно **/
  click_close_modal () {
    cy.get(".invest-modal-close", { timeout: 10000 })
        .click();
  },
};
