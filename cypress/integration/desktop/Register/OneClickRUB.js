import { navReg } from '@support/desktop/NavReg'
import { auth } from '@support/desktop/Authorization'

describe('Sign up in One click', () => {
  it('C1460940 - One click sign up with default country without promo code', () => {
    navReg.click_register()
    navReg.check_country_default('Russia (Россия)')
    navReg.sign_up()
    /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
    navReg.check_reg_result()
    navReg.close_new_user_info()
    auth.logout()
  })
  it('C1460941- One click sign up with Russia country with promo code', () => {
    navReg.click_register()
    navReg.add_promocode('test001')
    navReg.sign_up()
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result()
    navReg.close_new_user_info()
    auth.logout()
  })

  it('C1460942 - One click sign up with @country without promo code', () => {
    navReg.click_register()
    navReg.set_country('Andorra')
    navReg.sign_up()
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result()
    navReg.close_new_user_info()
    auth.logout()
  })

  it('C1460943 - One click sign up with @country with promo code', () => {
    navReg.click_register()
    navReg.set_country('Angola')
    navReg.add_promocode('test001')
    navReg.sign_up()
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result()
    navReg.close_new_user_info()
    auth.logout()
  })
})
