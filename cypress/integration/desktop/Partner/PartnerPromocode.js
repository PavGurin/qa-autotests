import { req } from '@support/desktop/Request'
import { navReg } from '@support/desktop/NavReg'
let dateNow = new Date()
const randomStr = Math.random()
  .toString(36)
  .slice(-5)
const randomNum = Math.floor(Math.random() * 9999999) + 1

describe('Partner', () => {

  it('C1961996 - PartnerPromocode + rega OneCLick', function () {
    req.LoginPartner('test1winpartner@ahem.email', 'qwerty12', dateNow)
    navReg.click_register()
    navReg.add_promocode('1wintester')
    navReg.sign_up()
    cy.wait(10000)
    req.CheckStats(dateNow)

  })
  it('C1961997 - PartnerPromocode + rega Email', function () {
    req.LoginPartner('test1winpartner@ahem.email', 'qwerty12', dateNow)
    navReg.click_register()
    navReg.registration_form('По e-mail')
    navReg.set_email(`${randomStr}test@zyx.com`)
    navReg.set_pwd('111111')
    navReg.repeat_pwd('111111')
    navReg.set_phone_numb(`911${randomNum}`)
    navReg.add_promocode('1wintester')
    navReg.sign_up()
    cy.wait(7000)
    req.CheckStats(dateNow)

  })
  it('C1961998 - PartnerURL + rega OneCLick', function () {
    req.LoginPartnerWithURL('test1winURL@ahem.email', 'qwerty12', dateNow)
    cy.visit('https://1wagg.xyz#2vwp')
    cy.wait(2000)
    navReg.click_register()
    cy.wait(2000)
    navReg.sign_up()
    cy.wait(7000)
    req.CheckStats(dateNow)
  })
  it('C1961999 - PartnerURL + rega Email', function () {
    req.LoginPartnerWithURL('test1winURL@ahem.email', 'qwerty12', dateNow)
    cy.visit('https://1wagg.xyz#2vwp')
    cy.wait(2000)
    navReg.click_register()
    navReg.registration_form('По e-mail')
    navReg.set_email(`${randomStr}test@zyx.com`)
    navReg.set_pwd('111111')
    navReg.repeat_pwd('111111')
    navReg.set_phone_numb(`911${randomNum}`)
    navReg.add_promocode('1wintester')
    navReg.sign_up()
    cy.wait(7000)
    req.CheckStats(dateNow)
  })
})
