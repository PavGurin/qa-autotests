import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { navReg } from '@support/desktop/NavReg'
import { bank } from '@support/desktop/Banking'


describe('Banking', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C636625 - вывод средств на карту', function () {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Вывести')
      .click()
    bank.withdrawal_visa()
    bank.assert_withdrawal_visa()
  })
  it('C636629 - вывод средств на Qiwi', function () {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Вывести')
      .click()
    bank.withdrawal_Qiwi()
    bank.assert_withdrawal_visa()
  })
})
