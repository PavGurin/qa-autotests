import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";

describe("Авторизация", () => {

  beforeEach(function () {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
  });
  it("C16300 - Авторизация по email", () => {
    auth.login();
    auth.logout();
  });

  it("C18784 - Авторизация с пустым полем email/телефон или пароль", () => {
    auth.login_empty_mandatory_fields();
  });

  it("C18786 - Авторизация с несуществующим пользователем", () => {
    auth.login_nonexistent_user();

  });

  it("C18769 - Авторизация по email с неверным паролем", () => {
    auth.login_invalid_password();
  });
});
