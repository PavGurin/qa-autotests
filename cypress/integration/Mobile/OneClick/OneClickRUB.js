import { navReg } from '@support/desktop/NavReg'
import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { req } from '@support/desktop/Request'

describe('Sign up in One click', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
    navReg.click_register_for_mobile()
  })
  it('C396391 - One click sign up with default country without promo code', () => {
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(2000)
    navReg.close_new_user_info_for_mobile()
  })

  it('C396393 - One click sign up with Russia country with promo code', () => {
    navReg.add_promocode_for_mobile('test001')
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
  })

  it('C396392 - One click sign up with @country without promo code', () => {
    navReg.set_country('Andorra')
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
  })

  it('C396394 - One click sign up with @country with promo code', () => {
    navReg.set_country('Angola')
    navReg.add_promocode_for_mobile('test001')
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(1000)
    navReg.close_new_user_info_for_mobile()
  })
  it('C396395 - copy login/password', () => {
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(2000)
    navReg.copy_login_pass_for_mobile()
    auth.check_notification_for_mobile()
    navReg.close_new_user_info_for_mobile()
  })
  it('C396396 - send e-mail login/password', () => {
    navReg.sign_up_for_mobile()
    cy.wait(2000)
    navReg.check_reg_result_for_mobile()
    cy.wait(2000)
    navReg.send_login_pass_for_mobile()
    req.login_pass_for_mail_for_mobile()
    navReg.close_new_user_info_for_mobile()

  })
})
