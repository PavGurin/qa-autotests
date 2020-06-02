import { basicCom } from '@support/desktop/BasicCommands'

describe('Переключение языка', () => {
  const header_first_elem = 'a:nth-child(1) > div > div.item-text'

  it('C16323 - Переключение языка на английский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('en')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
          .should('have.text', 'Home')
  })
  it('C2145689 - Переключение языка на итальянский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('it')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Principale ')
  })
  it('C2145688 - Переключение языка на немецкий', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language_De()
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Startseite')
  })
  it('C2145690 - Переключение языка на испанский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language_Es()
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Al inicio')
  })
  it('C2145691 - Переключение языка на украинский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('ua')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Головна')
  })
  it('C2145692 - Переключение языка на португальский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('pt')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Principal')
  })
  it('C2145693 - Переключение языка на польский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('pl')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Główna')
  })
  it('C2145694 - Переключение языка на индонезийский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('id')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem, { timeout: 10000 })
      .should('have.text', 'Laman')
  })
})
