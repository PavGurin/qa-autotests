import { bets } from '@support/desktop/Bets'
import { auth } from '@support/desktop/Authorization'
import { basicCom } from '@support/desktop/BasicCommands'

describe('Ставки', () => {

  it('C459478 - добавление 2ух купонов по разным матчам - сделать ставку ', () => {
    auth.login()
    basicCom.live_button()
    // делает ставку на главной странице
    bets.two_bets_in_different_match_express()
  })
  // данный кейс пока не реализовать
  it.skip('C459480 - Экспресс без бонуса, но с добавленными более 5 купонов', () => {
    auth.login()
    bets.three_bets_in_different_match_series()
  })
  it('C459481 - Невозможность выбора экспресс при наличии купонов по одному матчу', () => {
    auth.login()
    basicCom.live_button()
    bets.two_bets_in_one_match_express()
    bets.assert_express_disabled()
  })
  it('C459482 - Невозможность выбора экспресс при наличии одного купона', () => {
    auth.login()
    basicCom.live_button()
    bets.bet_main_page_without_click_ok()
    bets.assert_express_disabled()
  })
})
