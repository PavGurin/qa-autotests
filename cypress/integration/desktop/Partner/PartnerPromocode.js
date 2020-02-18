import { req } from '@support/desktop/Request'
import { navReg } from '@support/desktop/NavReg'
let dateNow = new Date()

describe('PartnerPromocode', () => {

  it('PartnerPromocode + assert statistic', function () {
    req.LoginPartner('test1winpartner@ahem.email', 'qwerty12', dateNow)
    navReg.click_register()
    navReg.add_promocode('1wintester')
    navReg.sign_up()
    cy.wait(5000)
    req.CheckStats(dateNow)
  })
})
