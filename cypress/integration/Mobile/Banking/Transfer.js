import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { navReg } from '@support/desktop/NavReg'
import { bank } from '@support/desktop/Banking'
import { req } from '@support/desktop/Request'

describe('Banking', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C636655 - перевод', function () {
    auth.login_for_mobile_mail()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Перевести')
      .click()
    bank.transfer_for_mobile('transferMobile2@ahem.email')
    req.code_transfer_for_mobile()
    bank.button_transfer_for_mobile()
    bank.check_notification_valid_transfer_for_mobile()
    cy.wait(1000)
    auth.logout_for_mobile2()
    auth.login_for_mobile_mail2()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Перевести')
      .click()
    bank.transfer_for_mobile('transferMobile@ahem.email')
    req.code_transfer_for_mobile2()
    bank.button_transfer_for_mobile()
    bank.check_notification_valid_transfer_for_mobile()
  })
  it('C636660 - Перевод на незарегистрированный mail', function () {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    cy.contains('Перевести')
      .click()
    bank.transfer_for_mobile('sdbghfhftras@mail.ru')
    bank.check_notification_invalid_transfer_for_mobile()
  })
})
