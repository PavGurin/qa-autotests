//Профиль игрока

const notification = ".notification-item";
const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const NumCh = getRandomInteger(5, 10);
const NumPay = getRandomInteger(1, 10);
/**
 * Возвращает случайное целое число
 * @param min {number} - значение от
 * @param max {number} - значение до
 * @returns {number}
 */

export const prof = {

  close_modal_transfer () {
    cy.get(".modal-content__header__row__account-number > .icon")
      .click();
  },
  // Кнопка "войти в профиль"
  profile_for_mobile () {
    cy.get("#header > div > div > div.control-item > button > span")
      .click();
  },
  // служба поддержки
  support_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > div.big-links__item")
      .click();
  },
  // история ставок
  bets_history_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > a:nth-child(3) > div > div.big-links__name")
      .click();
  },
  // настройки в моб.версии
  settings_for_mobile () {
    cy.get(".icon-profile-settings-double")
      .click({ force: true });
  },
  // Кнопка "пополнить"
  deposit () {
    cy.get(".button.green.theme-default", { timeout: 7000 })
      .click();
  },
  // Проверка, что кнопка "пополнить"(внутри модального окна) неактивна
  deposit_assert () {
    cy.get("#main-container > div.modal-wrapper > div > div.modal-container__container > div.modal-container__body > form > div.send-row > button")
      .should("be.disabled");
  },
  // раскрыть весь список способов пополнения
  deposit_change () {
    cy.get(".select-icon")
      .click();
  },
  // Заполнить поле мобильный номер
  type_numberPhone (number) {
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input")
      .click()
      .type(number);
  },
  change_currency_RUB () {
    cy.get(":nth-child(1) > .currency-chip")
      .click();
  },
  // выбрать последний элемент из списка
  deposit_change_switch (text) {
    cy.contains(text)
      .click();
  },
  // Ввести номер карты
  credit_card_number () {
    cy.get(":nth-child(4) > .control > .input-wrapper > .input")
      .type("4276550033908289");
  },
  // Ввести номер карты
  credit_card_deposit_number () {
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input", { timeout: 5000 })
      .clear();
    cy.get(".form > .button", { timeout: 5000 })
      .should("be.disabled");
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input", { timeout: 5000 })
      .type("4276554443216987");
    cy.get(".input-message-container input.input.icon-left", { timeout: 5000 })
      .clear()
      .type(100);
    cy.get(".form > .button", { timeout: 5000 })
      .should("be.visible");
  },
  //Внести сумму(модальное окно "пополнить")
  deposit_number (card) {
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input")
      .clear()
      .type(card);
  },
  //Внести номер телефона(модальное окно "пополнить")
  deposit_number_phone () {
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input")
      .type("+79215432312");
  },
  //Внести номер телефона(модальное окно "вывести")
  number_phone (phone) {
    cy.get(":nth-child(4) > .control > .input-wrapper > .input")
      .type(phone);
  },
  //Внести номер телефона(модальное окно "пополнить")
  deposit_button () {
    cy.get(".form > .button")
      .click();
  },
  //проверка, что кнопка "пополнить" активна
  deposit_assert_disabled () {
    cy.get("#app-overlay-wrapper > div > div > div.modal-container__container > div.modal-container__body > form > div.send-row > button")
      .should("be.disabled");
  },
  //проверка, что кнопка "пополнить" активна
  deposit_assert_visible () {
    cy.get("#app-overlay-wrapper > div > div > div > div.modal-container__container > div.modal-container__body > form > div.send-row > button")
      .should("be.visible");
  },

  //проверка модального окна "Пополнение"
  deposit_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Пополнение");
  },
  //перевод средств
  withdrawal (text) {
    cy.get(".user-menu__toggle")
      .click();
    cy.wait(1000);
    cy.contains(text)
      .click();
  },
  //управление счетами
  wallet (text) {
    cy.get("#header > div.header__line--top > div.header__profile-block > div > div.header-balance > div.header-balance__bottom-line > div")
      .trigger("mouseover");
    cy.contains(text)
      .click();
  },
  // Кнопка "открыть/закрыть историю выводов"
  open_close_withdrawal_history () {
    cy.get(".swiper")
      .click();
  },
  //
  make_primary () {
    cy.get(":nth-child(1) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon")
      .trigger("mouseover");
    cy.wait(1000);
    cy.contains("Сделать основным")
      .click();
  },

  close_modal_container () {
    cy.get(".modal-container__header__row__cell__overlay")
      .click();
  },
  //проверка модального окна "Вывод средств"
  withdrawal_history_modal_container () {
    cy.get("div:nth-child(2) > div.modal-container__header")
      .should("have.text", "Детализация");
  },

  //Внести сумму(модальное окно "Вывод")
  withdrawal_number_ (sum) {
    cy.get(":nth-child(5) > .control > .input-wrapper > .input")
      .type(sum);
  },
  //Внести сумму(модальное окно "Вывод")
  withdrawal_number_EUR () {
    cy.get(":nth-child(5) > .control > .input-wrapper > .input")
      .clear()
      .type("10");
  },
  // Проверка, что кнопка "вывести"(внутри модального окна) неактивна
  withdrawal_assert_disabled () {
    cy.get("#app-overlay-wrapper > div > div > div > div.modal-container__container > div.modal-container__body > div.withdrawal__content > div > form > div:nth-child(5) > button")
      .should("be.disabled");
  },
  //проверка, что кнопка "пополнить" активна
  withdrawal_button () {
    cy.get(":nth-child(5) > .button > span")
      .first()
      .click();
  },
  //проверка, что кнопка "пополнить" активна
  withdrawal_assert_visible () {
    cy.get(":nth-child(5) > .button")
      .should("be.visible");
  },
  //проверка модального окна "Вывод средств"
  withdrawal_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Вывод средств");
  },
  //Ввести почту
  transfer_mail (mail) {
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input")
      .type(mail);
  },
  //проверка модального окна "Перевод средств"
  transfer_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Перевод");
  },
  // Проверка, что кнопка "Перевести"(внутри модального окна) неактивна
  transfer_assert_disabled () {
    cy.get(".form > .button")
      .should("be.disabled");
  },
  // Проверка, что кнопка "Перевести"(внутри модального окна) неактивна
  transfer_assert_disabled2 () {
    cy.get("#app-overlay-wrapper > div > div.modal-container > div > div > div.modal-content__container > div.modal-content__body > form > button")
      .should("exist");
  },
  //проверка, что кнопка "перевести" активна
  transfer_assert_visible () {
    cy.get("div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button")
      .should("be.visible");
  },
  transfer_button_click () {
    cy.get(".form > .button")
      .click();
  },
  transfer_apply_click () {
    cy.get(".transfer__send-container > .button > span")
      .click();
  },
  //ввести сумму
  transfer_deposit (sum) {
    cy.get(".input-message-container input.input")
      .last()
      .type(sum);
  },
  //кнопка "скрыть баланас"
  settings_hidebalance () {
    cy.get(".show-balance-setting .v-checkbox-checkmark")
      .click();
    cy.get(".modal-container__header button").click();
    cy.wait(1000);
    cy.get(".header-balance__value")
      .should("not.exist");
    this.withdrawal("Настройки");
    cy.get(".show-balance-setting .v-checkbox-checkmark")
      .click();
    cy.get(".modal-container__header button").click();
    cy.wait(1000);
    cy.get(".header-balance__value")
      .should("exist");
  },
  //проверка модального окна "Настройки"
  settings_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Настройки");
  },
  //Заполнение и проверка полей и кнопок в настройках
  settings_form () {
    cy.get("form .control.row:nth-child(1) .input")
      .clear()
      .type("test1234");
    cy.get("form .control.row:nth-child(2) .input")
      .clear()
      .type("01061999");
    cy.get("form .tel-input input")
      .clear()
      .type("905999888700");

  },
  //проверка модального окна "Настройки"
  settings_mail_disabled () {
    cy.get("form .control .input-wrapper input").last()
      .should("be.disabled");
  },
  //Cохранить настройки
  click_save_settings () {
    cy.get("form button.save-button")
      .click();
  },
  //Cохранить настройки y на моб.версии
  click_save_settings_for_mobile () {
    cy.get(".submit-btn > .button-content")
      .click();
  },
  // проверяем, что изменение пароля успешно
  check_change_settings () {
    cy.get(notification)
      .should("be.visible")
      .and("have.text", "Настройки сохранены");
  },
  // проверяем, что вылезла ошибка о том, что телефон уже есть в базе
  check_change_numberphone () {
    cy.get(notification)
      .should("be.visible")
      .and("have.text", "Пользователь с таким номером телефона уже существует");
  },
  // проверяем, что вылезла ошибка о том, что телефон уже есть в базе
  check_error_mail () {
    cy.get(notification)
      .should("be.visible")
      .and("have.text", "Пользователь с таким email уже существует");
  },
  // проверяем, что изменение пароля успешно на моб.версии
  check_change_settings_for_mobile () {
    cy.get("#notifications-container")
      .should("be.visible")
      .and("have.text", "Настройки сохранены");
  },
  //Заполнение поля "имя" в настройках
  settings_form_name (name) {
    cy.get("form .control.row:nth-child(1) .input")
      .clear()
      .type(name);
  },
  //Заполнение поля "имя" в настройках на моб.версии
  settings_form_name_for_mobile (name) {
    cy.get("#profile-edit .input").first()
      .clear()
      .type(name);
  },
  //Заполнение поля "пароль" в настройках на моб.версии
  settings_form_pass_for_mobile (pass) {
    cy.get(".form > :nth-child(6) > .control > .input-container > .input")
      .clear()
      .type(pass);
  },
  //Заполнение поля "пароль" в настройках
  settings_form_pass (pass) {
    cy.get("form button").first()
        .should("have.text", "Изменить пароль").click();
    cy.get("div.modal-container__container > div > form > div.field > div > div > input")
      .type(pass);
  },
  //Заполнение поля "имя" в настройках
  settings_form_name_2or51_symbols () {
    cy.get("form .control.row:nth-child(1) .input")
      .clear()
      .type("Q2");
    cy.get("form button.save-button")
      .should("be.disabled");
    cy.get("form .control.row:nth-child(1) .input")
      .clear()
      .type("Q2Bvfrbkdblgblfgnflnfnlflglndsvsdvfdsfdfdjghereterq");
    cy.get("form button.save-button")
      .should("be.disabled");
  },
  //Заполнение поля "имя" в настройках для мобильной версии
  settings_form_name_4_or_16_symbols () {
    cy.get("#profile-edit > form > div:nth-child(1) > div > div.input-container > input")
      .clear()
      .type("T2w");
    cy.get("#profile-edit > form > div:nth-child(1) > div > div.input-container > div")
      .should("have.text", "Минимум 4 символов");
    cy.get("#profile-edit > form > div:nth-child(1) > div > div.input-container > input")
      .clear()
      .type("Q2Bvfrbkdblgblfgnflnfnlflglndsvsdvflnfnlflglndsvsdvflnfnlflglndsvsdv");
    cy.get("#profile-edit > form > div:nth-child(1) > div > div.input-container > div")
      .should("have.text", "Максимум 50 символов");
  },
  //Заполнение поля "дата рождения" в настройках
  settings_form_birthday () {
    cy.get("form .control.row:nth-child(2) .input")
      .clear()
      .type("00000000");
    cy.get("form button.save-button")
      .should("be.disabled");
    cy.get("form .control.row:nth-child(2) .input")
      .clear()
      .type("02082015");
    cy.get("form button.save-button")
      .should("be.disabled");
    cy.get("form .control.row:nth-child(2) .input")
      .clear()
      .type("30022000");
    cy.get("form button.save-button")
      .should("be.disabled");
    cy.get("form .control.row:nth-child(2) .input")
      .clear()
      .type("15011990");

  },
  //Заполнение поля "дата рождения" в настройках моб.версии
  settings_birthday_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(2) > div > div.input-container > input")
      .clear()
      .type("2006-12-31");
  },
  settings_correct_birthday_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(2) > div > div.input-container > input")
      .clear()
      .type("2000-01-30");
  },
  //Заполнение поля "номер телефона" в настройках
  settings_form_numbPhone_Andorra () {
    cy.get("form .tel-input input")
      .clear()
      .type("666321");
  },
  // Выбор страны, где номер телефона
  set_country_number_phone (country) {
    cy.get("form .tel-input .dropdown-trigger")
      .click()
      .get(".vue-recycle-scroller")
      .contains(country)
      .click();
  },
  //Заполнение поля "номер телефона" в настройках
  settings_form_numbPhone (phone) {
    cy.get("form .tel-input input")
      .clear()
      .type(phone);
  },
  //Заполнение поля "номер телефона" в настройках
  settings_form_numbPhone_for_mobile (phone) {
    cy.get("#profile-edit > form > div:nth-child(4) > div > div > div.input-container > input")
      .clear()
      .type(phone);
  },
  //Заполнение поля "Текущий пароль" в настройках
  settings_form_newpass (pass) {
    cy.get("form button").first()
        .should("have.text", "Изменить пароль").click();
    cy.get("input[type='password']").then((els) => {
      [...els].forEach((el) => cy.wrap(el).type(pass));
    });


  },
  // проверяем, что изменение пароля  не успешно
  new_pass_wrong () {
    cy.get(notification)
      .should("be.visible")
      .and("have.text", "Неверный пароль");
  },
  //Заполнение поля "Текущий пароль" в настройках
  correct_pass () {
    cy.get("div.modal-container__container > div > form > div.field > div > div > input")
      .clear()
      .type("qwerty");
  },
  // Раскрыть ставку
  bets_history () {
    cy.get(".level-center > :nth-child(2) > .button > span")
      .click();
  },
  // проверка, что внутри ставки отображаются данные
  bets_history_notBeEmpty () {
    cy.get(".bets-history .bet")
      .should("exist").and("not.to.be.empty");
  },

  error_date_birthday_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(2) > div > div.input-container > div")
      .should("have.text", "Вам меньше 18 лет");
  },
  // проверка, что внутри ставки отображаются данные
  assert_date_birthday_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(2) > div > div.input-container")
      .should("not.be.empty");
  },
  // проверка, что внутри ставки отображаются данные
  change_pass_for_mobile () {
    cy.get("#profile-edit button").contains("Изменить пароль")
      .click();
  },
  old_pass_for_mobile () {
    cy.get("#profile-edit .level:nth-child(7) input")
      .click()
      .type("qwerty");
  },
  new_pass_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(7) > div > div.input-container > input")
      .click()
      .type("qwerty");
    cy.get("#profile-edit > form > div:nth-child(8) > div > div.input-container > input")
      .click()
      .type("qwerty");
  },
  // проверка, что внутри ставки отображаются данные
  assert_mail_visible_for_mobile () {
    cy.get("#profile-edit button").contains("Изменить email")
      .should("exist");
  },
  // проверка, что внутри ставки отображаются данные
  assert_mail_disabled_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(5) > div > div.input-container > input")
      .should("exist");
  },
  // проверка, поле mail доступно
  assert_mail_visible () {
    cy.get("form .control .input-wrapper button").last().click();
    cy.get("form .control .input-wrapper input").last().should("be.enabled");
  },
  // проверка, поле mail доступно
  assert_mail_disabled () {
    cy.get("#app-overlay-wrapper > div > div > div.modal-container__container > div > form > div:nth-child(5) > div > input")
      .should("be.disabled");
  },
  // заполнить поле mail
  settings_mail (mail) {
    cy.get("#main-container > div.modal-wrapper > div > div.modal-container__container > div > form > div:nth-child(5) > div > input")
      .clear()
      .type(mail);
  },
  // проверка, что баланс,id, имя отображаются
  assert_name_id_balance_bonus () {
    cy.get(".balance-presentation__value")
      .should("exist");
    cy.get(".balance-text")
      .should("exist");
    cy.get(".balance-value")
      .should("exist");
  },
  // нажать на  кнопка "пополнить"
  button_deposit_for_mobile () {
    cy.get(".profile-header-button__item--deposit")
      .click();
  },
  // проверка, что в "выводе" мы имеем > 0 способов вывода
  assert_button_withdrawal_for_mobile () {
    cy.contains("Вывод").click();
    cy.get("div.PaymentsRow button")
        .should("have.length.greaterThan", 0);
  },
  // проверка, в "пополнение" мы имеем > 0 способов полнения
  assert_button_deposit_for_mobile () {
    cy.get("div.PaymentsRow button")
      .should("have.length.greaterThan", 0);
  },
  // проверка, что кнопка "перевод" существует
  assert_button_transfer_for_mobile () {
    cy.get(".profile-header__buttons a").first()
      .should("have.text", "Перевод");
  },
  // нажать на  кнопка "детализация"
  button_withdrawal_history_for_mobile () {
    cy.get(".icon-profile-detalisation")
      .click();
  },
  // проверка, что история выводов существует
  assert_withdrawal_history_for_mobile () {
    cy.get(".list")
      .should("exist");
  },
  // нажать на  кнопка "пополнить"
  button_bets_history_for_mobile () {
    cy.get(".icon-profile-history")
      .click();
  },
  // проверка, что история ставок существует
  assert_bets_history_for_mobile () {
    cy.get("#bets-history .bets-history-content")
      .should("exist");
  },

  // нажать на  кнопка "скрыть баланс"
  button_hide_balance_for_mobile () {
    cy.get(".other-settings-sections label").first()
      .click();
  },
  // проверка, что баланс исчез
  assert_hide_balance_for_mobile () {
    cy.get("#header > div > div > div.balance")
      .should("not.exist");
  },
  // проверка, что баланс исчез
  assert2_hide_balance_for_mobile () {
    cy.get("#header > div > div > div.balance")
      .should("not.to.be.empty");
  },
  // избранное
  favorites_for_mobile () {
    cy.get(".icon-profile-favorite")
        .click();
  },
  // проверка,избранное
  assert_favorites_for_mobile () {
    cy.get("#favourites > section")
      .should("not.to.be.empty");
  },
  // кнопка "выйти"
  button_exit_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(3) > div > div")
      .click({ force: true });
  },
  // проверка служба поддержки
  assert_support_for_mobile () {
    cy.get(".chaport-window iframe")
        .should("be.visible");
  },
  // проверка перевода в детализации
  assert_transfer_detail () {
    cy.get(".DetailingItem__left")
        .eq(3)
       .should("have.text", "1winvest20••••••19");
    cy.get(".DetailingItem__date")
        .eq(3)
        .should("have.text", "19 марта 2021 г. | 20:05");
    cy.get(".DetailingItem__amount .Money")
        .eq(3)
        .should("have.text", "0,74 $");
    //разбито на 3 проверки, посколько cypress не хочет обрабатывать +&nbsp; в сумме перевода.

  },
  // кнопка "Выводы" в детализации
  button_withdrawal_detail () {
    cy.contains("Выводы", { timeout: 10000 })
        .click();
  },
  // кнопка "Ставки" в детализации
  button_bets_detail () {
    cy.contains("Ставки", { timeout: 10000 })
        .click();
  },
  // кнопка "Bets" в детализации
  button_bets_detail_en () {
    cy.contains("Bets", { timeout: 10000 })
        .click();
  },
  // кнопка "Казино" в детализации
  button_casino_detail () {
    cy.get(".detailing-tabs > :nth-child(4)")
      .click();
  },
  // кнопка "Казино" в детализации
  button_case_detail () {
    cy.get(".detailing-tabs > :nth-child(5)")
      .click();
  },

  // проверка выводов в детализации
  assert_withdrawal_detail () {
    cy.get(".DetailingItem:nth-child(1) .DetailingItem__primary-description")
      .should("exist").and("have.text", "С мобильного Мегафон");
  },
  // проверка ставок в детализации
  assert_bets_detail () {
    cy.get(".Detailing__content .DetailingItem").contains("Ординар");
  },
  // проверка, что кнопка  после заполнения всех необходимых полей становится активной
  assert_button_is_active () {
    cy.get(".button.send-button")
    .should("be.visible");
  },
  // проверка, что кнопка в начале теста неактивна
  assert_button_is_disabled () {
    cy.get(".form > .button", { timeout: 7000 })
      .should("be.disabled");
  },
  // проверка, что кнопка withdrawal после заполнения всех необходимых полей становится активной
  assert_button_withdrawal_is_active () {
    cy.get(".form > :nth-child(5) > .button")
      .should("be.visible");
  },
  // проверка, что кнопка withdrawal в начале теста неактивна
  assert_button_withdrawal_is_disabled () {
    cy.get(".form > :nth-child(5) > .button")
      .should("be.disabled");
  },
  // проверка, что появилось описание последующих действий
  assert_withdrawal_description () {
    cy.get(".description")
      .should("have.text", "На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.");
  },
  // проверка, что появилось описание последующих действий
  assert_transfer_description () {
    cy.get(".transfer__description")
      .should("have.text", "На Ваш email адрес s...651@mail.ru был отправлен код подтверждения");
  },
  // открыть управление счетами
  account_management_desktop () {
    cy.get(".header-balance__angle-icon", { timeout: 3000 }).trigger("mouseover", { timeout: 3000 }, { force: true });
    cy.get("#header > div.header__line--top > div.header__profile-block > div > div.header-balance > div.header-balance__bottom-line > div > div.dropdown-menu > div > article > section:nth-child(3) > button")
        .last()
        .click({ timeout: 3000 });
  },
  // выбор случайной валюты
  random_currency () {
    cy.log(NumCh);
    cy.get(".account-management-group").scrollTo("bottom", { timeout: 3000 });
    cy.get(`:nth-child(${NumCh}) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon`)
        .last()
        .trigger("mouseover", { timeout: 3000 });
    cy.get(".dropdown-content > :nth-child(1)")
        .last()
        .click({ timeout: 3000 });
    cy.get(":nth-child(1) > .currency-item > .currency-item-additional > .button").click({ timeout: 3000 });
    cy.wait(2000);
  },
  // выбор случайного метода оплаты
  random_payment_method () {
    cy.get(":nth-child(1) > .currency-item > .currency-item-additional > .button").click();
    cy.log(NumPay);
    cy.get(`.payments > :nth-child(${NumPay})`).click();
  },
  // проверка количества способов оплаты
  check_length_payment () {
    //cy.get(".payment").should("have.length", 24);
    cy.get(".form > .button").should("be.visible"); // кнопка "пополнить" активна
    cy.get(".input").clear();
    cy.get(".form > .button").should("be.disabled");// кнопка "пополнить" не активна
  },
  // проверка, что валюта - доллар США в конце тестов
  check_dollar () {
    cy.get(".header-balance__angle-icon", { timeout: 3000 }).trigger("mouseover", { timeout: 3000 });
    cy.get("#header > div.header__line--top > div.header__profile-block > div > div.header-balance > div.header-balance__bottom-line > div > div.dropdown-menu > div > article > section:nth-child(3) > button")
        .click({ timeout: 3000 });
    cy.get(":nth-child(2) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon")
        .last()
        .trigger("mouseover", { timeout: 3000 });
    cy.get(".dropdown-content > :nth-child(1)")
        .last()
        .click({ timeout: 3000 });
    cy.get(".modal-container__header__row__cell__overlay").click();
  },
  // settings form - email
  set_email (email) {
    cy.get("form > div:nth-child(5) .input")
        .clear()
        .type(email);
  },
};

