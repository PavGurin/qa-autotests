import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'

describe('Bonus', () => {
  it('C674173 - Бонус', function () {
    auth.login3()
    basicCom.bonus_main_page()
  })
})
