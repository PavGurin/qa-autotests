import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bank } from "@support/desktop/Banking";


describe("transfer", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.loginNew();
    cy.wait(2000);

  });
  it("C1086851 - RUB - Перевод", function () {
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintest123@ahem.email");
    prof.transfer_deposit("20");
    prof.transfer_button_click();
    // req.code_transfer()
    prof.assert_transfer_description();
  });
  it("C1086852 - RUB - Сумма меньше минимальной ", function () {
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_deposit("19");
    prof.transfer_assert_disabled();
  });
  it("C1086856 - RUB - Перевод не незарегистрированный e-mail ", function () {
    prof.withdrawal("Перевод");
    prof.transfer_mail("wuqidichbfbdmmc");
    prof.transfer_deposit("20");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it("C1086853 - RUB - Оставить поле ввода e-mail пустым  ", function () {
    prof.withdrawal("Перевод");
    prof.transfer_deposit("20");
    prof.transfer_assert_disabled2();
  });
  it("C1086854 - RUB - Оставить поле суммы пустым ", function () {
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_assert_disabled2();
  });
  it("C1086855 - RUB - Оставить обязательные поля пустыми ", function () {
    prof.withdrawal("Перевод");
    prof.transfer_assert_disabled();
  });
});
