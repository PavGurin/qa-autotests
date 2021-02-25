import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bank } from "@support/desktop/Banking";


describe("transfer", () => {
  it("C1086851 - RUB - Перевод", function () {
    auth.loginNew();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintest123@ahem.email");
    prof.transfer_deposit("20");
    prof.transfer_button_click();
    // req.code_transfer()
    prof.assert_transfer_description();
  });
  it("C1086852 - RUB - Сумма меньше минимальной ", function () {
    auth.loginNew();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_deposit("19");
    prof.transfer_assert_disabled();
  });
  it("C1086856 - RUB - Перевод не незарегистрированный e-mail ", function () {
    auth.loginNew();
    prof.withdrawal("Перевод");
    prof.transfer_mail("wuqidichbfbdmmc");
    prof.transfer_deposit("20");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it("C1086853 - RUB - Оставить поле ввода e-mail пустым  ", function () {
    auth.loginNew();
    prof.withdrawal("Перевод");
    prof.transfer_deposit("20");
    prof.transfer_assert_disabled2();
  });
  it("C1086854 - RUB - Оставить поле суммы пустым ", function () {
    auth.loginNew();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_assert_disabled2();
  });
  it("C1086855 - RUB - Оставить обязательные поля пустыми ", function () {
    auth.login_mail();
    prof.withdrawal("Перевод");
    prof.transfer_assert_disabled();
  });
  it("C1086859 - Перевод новых валют", function () {
    auth.loginNew();
    prof.wallet("Управление счетами");
    let genArr = Array.from({ length: 5 }, (v, k) => k + 1);

    cy.wrap(genArr).each((index) => {
      cy.get(`:nth-child(${index}) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon`)
        .last()
        .trigger("mouseover");
      cy.wait(1000);
      cy.contains("Сделать основным")
        .click();
      prof.close_modal_container();
      prof.withdrawal("Перевод");
      prof.transfer_mail("ginl39@1win.xyz");
      prof.transfer_deposit("1000");
      prof.transfer_button_click();
      prof.assert_transfer_description();
      cy.get(".modal-content__header__row__cell__overlay > path")
        .click();
      cy.wait(1000);
      prof.wallet("Управление счетами");
      cy.wait(2000);
    });
  });
  it(" - USD - Перевод новых валют 2", function () {
    auth.loginNew();
    prof.wallet("Управление счетами");
    let genArr = Array.from({ length: 6 }, (v, k) => k + 6);

    cy.wrap(genArr).each((index) => {
      cy.get(".account-management-group").scrollTo("bottom");
      cy.wait(1000);
      cy.get(`:nth-child(${index}) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon`)
        .last()
        .trigger("mouseover", { force: true });
      cy.wait(1000);
      cy.contains("Сделать основным")
        .click();
      prof.close_modal_container();
      prof.withdrawal("Перевод");
      prof.transfer_mail("ginl39@1win.xyz");
      prof.transfer_deposit("1000");
      prof.transfer_button_click();
      prof.assert_transfer_description();
      cy.get(".modal-content__header__row__cell__overlay > path")
        .click();
      cy.wait(1000);
      prof.wallet("Управление счетами");
      cy.wait(2000);
    });
    cy.get(":nth-child(2) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon")
      .last()
      .trigger("mouseover");
    cy.wait(1000);
    cy.contains("Сделать основным")
      .click();
  });
  it("C1086860 - USD - Сумма меньше минимальной ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_deposit("0.05");
    prof.transfer_assert_disabled();
  });
  it("C1086864 - USD - Перевод не незарегистрированный e-mail ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_mail("wuqidichbfbdmmc");
    prof.transfer_deposit("0.1");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it.skip("C1086861 - USD - Оставить поле ввода e-mail пустым  ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_deposit("0.1");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it("C1086862 - USD - Оставить поле суммы пустым ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_assert_disabled();
  });
  it("C1086863 - USD - Оставить обязательные поля пустыми ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_assert_disabled();
  });
  it.skip("C1086865 - EUR - Перевод", function () {
    auth.login();
    prof.withdrawal("Перевод");
    cy.contains("EUR")
            .click();
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_deposit("0.1");
    prof.transfer_button_click();
    bank.assert_transfer2();
  });
  it("C1086866 - EUR - Сумма меньше минимальной ", function () {
    auth.loginNew();
    prof.wallet("Управление счетами");
    cy.get(":nth-child(2) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon")
      .last()
      .trigger("mouseover");
    cy.wait(1000);
    cy.contains("Сделать основным")
      .click();
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_deposit("0.05");
    prof.transfer_assert_disabled();
  });
  it.skip("C1086870 - EUR - Перевод не незарегистрированный e-mail ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    cy.contains("EUR")
            .click();
    prof.transfer_mail("wuqidichbfbdmmc");
    prof.transfer_deposit("0.1");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it.skip("C1086867 - EUR - Оставить поле ввода e-mail пустым  ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    cy.contains("EUR")
            .click();
    prof.transfer_deposit("0.1");
    prof.transfer_button_click();
    bank.wrong_transfer();
  });
  it("C1086868- EUR - Оставить поле суммы пустым ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_mail("1wintesting2@mail.ru");
    prof.transfer_assert_disabled();
  });
  it("C1086869 - EUR - Оставить обязательные поля пустыми ", function () {
    auth.login();
    prof.withdrawal("Перевод");
    cy.contains("EUR")
            .click();
    prof.transfer_assert_disabled();
  });
});
