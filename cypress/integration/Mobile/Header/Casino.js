import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Казино", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
  });
  it("C636617 - Поиск в казино", function () {
    auth.login_for_mobile2();
    basicCom.casino_button_for_mobile();
    basicCom.casino_search_mobile("ice Wolf");
    basicCom.assert_result_for_mobile();
    basicCom.assert_casino_for_mobile();
    cy.wait(1000);
    basicCom.assert2_casino_for_mobile();
  });
});
