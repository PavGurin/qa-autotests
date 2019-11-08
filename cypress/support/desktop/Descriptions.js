export const text = {

  // Ru language
  text_ru_rule_reg () {

    cy.contains('Я подтверждаю, что я ознакомлен и полностью согласен с ')
    cy.contains('Условиями Соглашения об использовании сайта 1WIN')

  },

  // Eng language
  text_eng_rule_reg () {

    cy.contains('I agree with ')
    cy.contains('User Agreement of usage 1WIN site')

  },
}
