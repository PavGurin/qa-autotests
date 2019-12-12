import { navReg } from '@support/desktop/NavReg'
import { multicurrency } from '@support/desktop/MultiCurrency'

describe('Sign up in One click', () => {
  it('C1460947 - One click with EUR', () => {
    navReg.click_register()
    navReg.check_country_default('Russia (Россия)')
    navReg.change_currency_EUR()
    navReg.sign_up()
    /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
    navReg.check_reg_result()
    navReg.close_new_user_info()
    cy.wait(1000)
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_EUR()
  })
  it('C1460948 - One click with EUR and Russia country with promo code', () => {
    navReg.click_register()
    navReg.add_promocode('test001')
    navReg.change_currency_EUR()
    navReg.sign_up()
    navReg.check_reg_result()
    navReg.close_new_user_info()
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_EUR()
  })

  it('C1460949 - One click sign up with @country without promo code', () => {
    navReg.click_register()
    navReg.set_country('Andorra')
    navReg.change_currency_EUR()
    navReg.sign_up()
    navReg.check_reg_result()
    navReg.close_new_user_info()
    multicurrency.button_multicurrency()
    multicurrency.assert_currency_EUR()
  })
})
