import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Bonus", () => {


  it(" - Бонус", function () {
    auth.login3();
    basicCom.bonus_main_page();
  });
});
