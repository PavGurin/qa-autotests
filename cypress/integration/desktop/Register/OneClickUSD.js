import { navReg } from '@support/desktop/NavReg'
import { multicurrency } from '@support/desktop/MultiCurrency'

describe('Sign up in One click', () => {
  it('C16283 - One click with USD', () => {
    navReg.click_register()
    navReg.check_country_default('Russia (Россия)')
    navReg.change_currency_USD()
    navReg.accept_agreement()
    navReg.sign_up()
    /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
    navReg.check_reg_result()
    navReg.close_new_user_info()
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_USD()
  })
  it('C16285 - One click with EUR and Russia country with promo code', () => {
    navReg.click_register()
    navReg.accept_agreement()
    navReg.add_promocode('test001')
    navReg.change_currency_USD()
    navReg.sign_up()
    navReg.check_reg_result()
    navReg.close_new_user_info()
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_USD()
  })

  it('C16284 - One click sign up with @country without promo code', () => {
    navReg.click_register()
    navReg.set_country('Andorra')
    navReg.accept_agreement()
    navReg.change_currency_USD()
    navReg.sign_up()
    navReg.check_reg_result()
    navReg.close_new_user_info()
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_USD()
  })
})
