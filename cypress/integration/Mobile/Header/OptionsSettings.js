import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'
import { navReg } from '@support/desktop/NavReg'
import { prof } from '@support/desktop/Profile'

describe('Опции профиля', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C482801 - Отображение имени, id, баланс, бонусный счет', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.assert_name_id_balance_bonus()
  })
  it('C482802 - Пополнение', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.button_deposit_for_mobile()
    cy.wait(1000)
    prof.assert_button_deposit_for_mobile()

  })
  it('C482803 - Вывод средств', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.assert_button_withdrawal_for_mobile()
  })
  it('C482804 - Перевод', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.assert_button_transfer_for_mobile()
  })
  it('C482805 - Детализация', () => {
    auth.login_for_mobile()
    navReg.click_settings_main_page_for_mobile()
    prof.button_withdrawal_history_for_mobile()
    prof.assert_withdrawal_history_for_mobile()
  })
  it('C482806 - История ставок', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.button_bets_history_for_mobile()
    prof.assert_bets_history_for_mobile()
  })
  it('C482807 - Скрыть баланс', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.settings_for_mobile()
    prof.button_hide_balance_for_mobile()
    prof.assert_hide_balance_for_mobile()
    prof.button_hide_balance_for_mobile()
    prof.assert2_hide_balance_for_mobile()
  })
  it('C482808 - Избранное', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    prof.favorites_for_mobile()
    prof.assert_favorites_for_mobile()
  })
  it('C482809 - Кнопка выход', () => {
    auth.login_for_mobile2()
    navReg.click_settings_main_page_for_mobile()
    navReg.assert_login_for_mobile()
    cy.wait(1000)
    prof.button_exit_for_mobile()
    navReg.assert_logout_for_mobile()
  })
  it('C482810 - Служба поддержки', () => {
    auth.login_for_mobile()
    prof.profile_for_mobile()
    prof.support_for_mobile()
    cy.wait(1000)
    prof.assert_support_for_mobile()
  })
})
