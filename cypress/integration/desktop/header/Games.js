import { auth } from '@support/desktop/Authorization'
import { games } from '@support/desktop/Games'

describe('Games', () => {
  it('C16790 - Open games', function () {
    auth.login()
    games.choose_games()
    games.play_games()
    games.games_visible()
    games.casino_active()
  })
})
