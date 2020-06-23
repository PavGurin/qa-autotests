import { navReg } from '@support/desktop/NavReg'
import { auth } from '@support/desktop/Authorization'

describe('LiveGames', () => {

  it('C636689 - choose games', () => {
    auth.login()
    navReg.button_LiveGames()
    cy.wait(1000)
    cy.get('#casino > main > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > div:nth-child(1) > section > div.game-card-overview > button')
      .click({ force: true })
    cy.get('.game > iframe', { timeout: 15000 })
     .should('be.visible')
    cy.get('.game > iframe')
      .its('0.contentDocument').should('exist')
  })
})
