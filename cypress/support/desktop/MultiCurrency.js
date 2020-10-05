export const multicurrency = {
//нажать на  кнопку "нажать на кейс новичок"
  button_multicurrency () {
    cy.get(".user-balance-dots-icon")
            .trigger("mouseover");
    cy.get(".button.button.open-account-management-button.blue")
            .click();
  },
  assert_currency_EUR () {
    cy.get(":nth-child(1) > .currency-item > .currency > .currency-title")
            .should("have.text", "Евро");
  },
  assert_currency_USD () {
    cy.get(":nth-child(1) > .currency-item > .currency > .currency-title")
            .should("have.text", "Доллар");
  },
};
