import { basicCom } from '@support/desktop/BasicCommands'
import { auth } from '@support/desktop/Authorization'
let money
let money2

describe('Search Casino', () => {
  it('C636575 - Result', function () {
    auth.login2()
    basicCom.casino_button()
    basicCom.casino_search('Ice Wolf')
    cy.wait(1000)
    basicCom.assert_casino_for_mobile()
  })
  it('C1678732 - Result', function () {
    basicCom.casino_button()
    cy.wait(2000)
    cy.get('.jackpot-panel-value-container > :nth-child(3)')
      .invoke('text').then((price) => {
        money = price
      }).then(() => {
        cy.wait(10000)
      }).then(() => {
        cy.get('.jackpot-panel-value-container > :nth-child(3)')
        .invoke('text').then((price2) => {
          money2 = price2
        }).then(() => {
          expect(Number(money)).to.be.lessThan(Number(money2))
        })
      })
  })
})

