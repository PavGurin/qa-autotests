import { navReg } from '@support/desktop/NavReg'
import { basicCom } from '@support/desktop/BasicCommands'

describe('OneClick - USD', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
    navReg.click_register_for_mobile()
  })
  it('C1598942 - One click sign up with default country without promo code', () => {
    navReg.choose_wallet_for_mobile()
    navReg.currency_USD_for_mobile()
    navReg.sign_up_for_mobile()
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
    navReg.assert_currency_USD_for_mobile()
  })

  it('C1598944 - One click sign up with Russia country with promo code', () => {
    navReg.choose_wallet_for_mobile()
    navReg.currency_USD_for_mobile()
    navReg.add_promocode_for_mobile('test001')
    navReg.sign_up_for_mobile()
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
    navReg.assert_currency_USD_for_mobile()
  })

  it('C1598943 - One click sign up with @country without promo code', () => {
    navReg.set_country('Andorra')
    navReg.choose_wallet_for_mobile()
    navReg.currency_USD_for_mobile()
    navReg.sign_up_for_mobile()
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
    navReg.assert_currency_USD_for_mobile()
  })

})
