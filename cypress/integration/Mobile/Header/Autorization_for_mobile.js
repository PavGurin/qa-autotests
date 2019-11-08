import { auth } from '@support/desktop/Authorization'
import { navReg } from '@support/desktop/NavReg'
import { prof } from '@support/desktop/Profile'
import { basicCom } from '@support/desktop/BasicCommands'

describe('Autorization', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C471380 - Авторизация', function () {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.assert_name_id_balance_bonus()
  })
  it('C471382 - Авторизация  несуществующим пользователем', function () {
    auth.login_nonexistent_user_for_mobile()
  })
  it('C471381 - Авторизация', function () {
    auth.login_empty_pass_for_mobile('blabla123')
    auth.check_notification_invalid_login_for_mobile()
  })
})
