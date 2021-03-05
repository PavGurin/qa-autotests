import { auth } from "@support/desktop/Authorization";

describe("Выход", () => {

  it("Выход", () => {
    auth.login();
    auth.logout();
  });
});
