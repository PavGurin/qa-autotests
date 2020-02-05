import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { navReg } from '@support/desktop/NavReg'
import { bank } from '@support/desktop/Banking'

describe('Banking', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C636650 - пополнение cо счета мегафона', function () {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Пополнить')
      .click()
    bank.deposit_megafon()
    bank.assert_deposit_megafon()
  })
  it('C636645 - пополнение с карты', function () {
    auth.login_for_mobile2()
    navReg.click_green_plus_for_mobile()
    bank.visa_method_for_mobile()
    bank.deposit_visa_for_mobile()
  })
  it('C636646 - пополнение Яндекс деньги', function () {
    auth.login_for_mobile2()
    navReg.click_green_plus_for_mobile()
    bank.YandexCash_method_for_mobile()
    bank.YandexCash_for_mobile()
  })
  it('C636647 - пополнение Qiwi', function () {
    auth.login_for_mobile2()
    navReg.click_green_plus_for_mobile()
    bank.Qiwi_method_for_mobile()
    bank.Qiwi_for_mobile()
  })
  it('C636648 - пополнение Билайн', function () {
    auth.login_for_mobile2()
    navReg.click_green_plus_for_mobile()
    bank.Beeline_method_for_mobile()
    bank.Qiwi_for_mobile()
  })
  it('C636651 - пополнение Tele2', function () {
    auth.login_for_mobile2()
    navReg.click_green_plus_for_mobile()
    bank.Tele2_method_for_mobile()
    bank.Qiwi_for_mobile()
  })
})
