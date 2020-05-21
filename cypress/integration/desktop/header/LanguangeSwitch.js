import { basicCom } from '@support/desktop/BasicCommands'

describe('Переключение языка', () => {
  const header_first_elem = 'a:nth-child(1) > div > div.item-text'

  it('C16323 - Переключение языка на английский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
          .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('en')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
          .should('have.text', 'Home')
  })
  it('C16323 - Переключение языка на итальянский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('it')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Principale ')
  })
  it('C16323 - Переключение языка на немецкий', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language_De()
    cy.wait(1000)
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Startseite')
  })
  it('C16323 - Переключение языка на испанский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language_Es()
    cy.wait(1000)
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Al inicio')
  })
  it('C16323 - Переключение языка на украинский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('ua')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Головна')
  })
  it('C16323 - Переключение языка на португальский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('pt')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Principal')
  })
  it('C16323 - Переключение языка на польский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('pl')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Główna')
  })
  it('C16323 - Переключение языка на индонезийский', () => {
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Главная')
    // меняет язык
    basicCom.switch_language('id')
    // сверяет текст первого элемента меню
    cy.get(header_first_elem)
      .should('have.text', 'Laman')
  })
})
