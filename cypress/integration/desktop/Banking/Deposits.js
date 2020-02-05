import { auth } from '@support/desktop/Authorization'
import { prof } from '@support/desktop/Profile'
import { bank } from '@support/desktop/Banking'

describe('Deposit', () => {
  it('C1086820 - RUB - пополнение cо счета мегафона', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('С мобильного Мегафон')
    prof.deposit_number()
    prof.deposit_number_phone()
    prof.deposit_button()
    bank.assert_deposit_desktop()
  })
  it('C1086815 - RUB - Пополнение с банковской карты', function () {
    auth.login()
    prof.deposit()
    prof.credit_card_deposit_number()
  })
  it('C1086816 - RUB - пополнение Яндекс.деньги', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('Яндекс.Деньги')
  })
  it('C1086817 - RUB - Пополнение Qiwi', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('QIWI-кошелек')
  })
  it('C1086818 - RUB - Пополнение Билайн', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('С мобильного Билайн')
  })
  it('C1086822 - RUB - кошелек Piastrix', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('Кошелек Piastrix')
  })
  it('C1086823 - RUB - кошелек Bitcoin', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('BitCoin')
  })
  it('C1086824 - RUB - кошелек Ethereum', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    prof.deposit_change_switch('Ethereum')
  })
  it('C1086825 - USD - пополнение c банковской карты', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    cy.contains('USD')
            .click()
    prof.credit_card_deposit_number()
    //prof.withdrawal_number_EUR()
    //prof.deposit_assert_visible()
  })
  it('C1086835 - EUR - пополнение c банковской карты', function () {
    auth.login()
    prof.deposit()
    prof.deposit_change()
    cy.contains('EUR')
            .click()
    prof.credit_card_deposit_number()
    //prof.withdrawal_number_EUR()
    //prof.deposit_assert_visible()
  })
})
