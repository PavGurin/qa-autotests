import { auth } from "@support/desktop/Authorization";
import { navReg } from "@support/desktop/NavReg";
import { prof } from "@support/desktop/Profile";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Authorization", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);

  });
  it("Authorization", function () {
    auth.login_for_mobile2();
    cy.wait(1000);
    navReg.click_settings_main_page_for_mobile();
    cy.wait(1000);
    prof.assert_name_id_balance_bonus();
  });
  it("Authorization by non-existent user", function () {
    auth.login_nonexistent_user_for_mobile();
  });
  it("Authorization with empty email/phone/password", function () {
    auth.login_empty_pass_for_mobile("blabla123");
    auth.check_notification_invalid_login_for_mobile();
  });
});
