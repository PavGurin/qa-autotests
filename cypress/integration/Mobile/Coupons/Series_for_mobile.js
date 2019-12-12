import { basicCom } from '@support/desktop/BasicCommands'
import { bets } from '@support/desktop/Bets'
import { auth } from '@support/desktop/Authorization'

describe('Серия', () => {
  beforeEach(function () {
    basicCom.switch_to_mobile()
    cy.viewport(375, 812)
  })
  it('C740717 - Добавление двух купонов по одному матчу - сделать ставку', () => {
    auth.login_for_mobile2()
    basicCom.live_button_for_mobile()
    bets.two_bets_series_in_one_match_for_mobile()
  })
  it('С740718 - Добавление двух купонов по разным матчам - сделать ставку', () => {
    auth.login_for_mobile2()
    basicCom.live_button_for_mobile()
    bets.two_bets_series_in_different_match_for_mobile()
  })
  it('С740719 - Добавление трех купонов - сделать ставку', () => {
    auth.login_for_mobile2()
    basicCom.live_button_for_mobile()
    bets.three_bets_series_for_mobile()
  })
  it('С740720 - Удалить один из купонов', () => {
    auth.login_for_mobile2()
    basicCom.live_button_for_mobile()
    bets.two_bets_in_different_match_and_remove_for_mobile()
  })
  it('С740721 - Удалить все купоны', () => {
    auth.login_for_mobile2()
    basicCom.live_button_for_mobile()
    bets.two_bets_in_different_match_and_remove_all_for_mobile()
  })
})
