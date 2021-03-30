import { auth } from "@support/desktop/Authorization";
import { games } from "@support/desktop/Games";

describe("Games", () => {

  it("Open games", function () {
    cy.visit("");
    auth.login();
    games.choose_games();
    games.play_games();
    games.games_visible();
  });
});
