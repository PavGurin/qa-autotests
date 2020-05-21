import { bets } from '@support/desktop/Bets'
import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { prof } from '@support/desktop/Profile'

describe('Ставки', () => {
  beforeEach(() => {
    auth.login()
    // auth.login_stage()
  })
  it('C18766 - Успешная ставка (Main page)', () => {
    basicCom.live_button()
    // делает ставку на главной странице
    bets.bet_main_page(10)
  })

  it('C18767 - Ставка с "Сумма ставки" = 0', () => {
    basicCom.live_button()
    // делает нулевую ставку
    bets.bet_live_zero()
  })

  it('C18783 - Успешная ставка (live)', () => {
    basicCom.live_button()
    // переключается на вкладку 'live'
    cy.get('a.navigation-item:nth-child(2)')
          .click()
    // проверяет, что выбрана 'live' вкладка
    cy.get('a.active > div > div.item-text-active', { timeout: 10000 })
          .should('have.text', 'Live')
    // ожидание, необходимое для прогрузки элементов
    cy.wait(2000)
    // делает ставку на live-событие
    bets.bet_live_page(10)
  })
})
