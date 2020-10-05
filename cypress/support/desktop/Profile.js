//Профиль игрока

const notification = ".notification-item";

export const prof = {
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
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > a:nth-child(6) > div.big-links__left")
      .click();
  },
  // Кнопка "пополнить"
  deposit () {
    cy.get(".header-profile > .button")
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
    cy.get(":nth-child(4) > .input-wrapper > .input")
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
    cy.get(":nth-child(4) > .input-wrapper > .input")
      .clear();
    cy.get(".send-row > .button")
      .should("be.disabled");
    cy.get(":nth-child(4) > .input-wrapper > .input")
      .type("4276554443216987");
    cy.get(".send-row > .control > .input-wrapper > .input")
      .clear()
      .type(100);
    cy.get(".send-row > .button")
      .should("be.visible");
  },
  //Внести сумму(модальное окно "пополнить")
  deposit_number () {
    cy.get(".send-row > .control > .input-wrapper > .input")
      .clear()
      .type("750");
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
  //вывод средств
  withdrawal (text) {
    cy.get(".user-name-icon")
      .trigger("mouseover");
    cy.get(".dropdown-content")
      .contains(text)
      .click();
  },
  // Кнопка "открыть/закрыть историю выводов"
  open_close_withdrawal_history () {
    cy.get(".swiper")
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
    cy.get(":nth-child(3) > .input-wrapper > .input")
      .type(mail);
  },
  //проверка модального окна "Перевод средств"
  transfer_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Перевод");
  },
  // Проверка, что кнопка "Перевести"(внутри модального окна) неактивна
  transfer_assert_disabled () {
    cy.get("div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button")
      .should("be.disabled");
  },
  //проверка, что кнопка "перевести" активна
  transfer_assert_visible () {
    cy.get("div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button")
      .should("be.visible");
  },
  transfer_button_click () {
    cy.get("div.modal-container__container > div.modal-container__body > form > div.transfer__send-container > button")
      .click();
  },
  transfer_apply_click () {
    cy.get(".transfer__send-container > .button > span")
      .click();
  },
  //ввести сумму
  transfer_deposit (sum) {
    cy.get(".transfer__send-container > .control > .input-wrapper > .input")
      .type(sum);
  },
  //кнопка "скрыть баланас"
  settings_hidebalance () {
    cy.get(".v-checkbox-checkmark")
      .click();
    cy.get("#header > div.level.header__line.header__line--top > section > div.dropdown.balance-container.align-center")
      .should("not.exist");
    cy.wait(1000);
    cy.get(".v-checkbox-checkmark")
      .click();
    cy.get("#header > div.header__line--top > section > div > div.user-values")
      .should("exist");
  },
  //проверка модального окна "Настройки"
  settings_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
      .should("have.text", "Настройки");
  },
  //Заполнение и проверка полей и кнопок в настройках
  settings_form () {
    cy.get(".form > :nth-child(1) > .input-wrapper > .input")
      .clear()
      .type("test1234");
    cy.get(":nth-child(2) > .input-wrapper > .input")
      .clear()
      .type("01061999");
    cy.get(".intl-tel-input > .control > .input-wrapper > .input")
      .click();
    cy.get("div.modal-container__container > div > form > div.field > div > div > input")
      .type("qwerty12");
    cy.get("div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input")
      .clear()
      .type("905999888700");

  },
  //проверка модального окна "Настройки"
  settings_mail_disabled () {
    cy.get("div:nth-child(5) > div > input")
      .should("be.disabled");
  },
  //Cохранить настройки
  click_save_settings () {
    cy.get(".button-wrapper > .button")
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
    cy.get(".form > :nth-child(1) > .input-wrapper > .input")
      .clear()
      .type(name);
  },
  //Заполнение поля "имя" в настройках на моб.версии
  settings_form_name_for_mobile (name) {
    cy.get(".form > :nth-child(1) > .control > .input-container > .input")
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
    cy.get("div.modal-container__container > div > form > div.field > div > div > input")
      .type(pass);
  },
  //Заполнение поля "имя" в настройках
  settings_form_name_2or16_symbols () {
    cy.get(".form > :nth-child(1) > .input-wrapper > .input")
      .clear()
      .type("Q2");
    cy.get("div.modal-container__container > div > form > div.button-wrapper > button")
      .should("be.disabled");
    cy.get(".form > :nth-child(1) > .input-wrapper > .input")
      .clear()
      .type("Q2Bvfrbkdblgblfgnflnfnlflglndsvsdv");
    cy.get("div.modal-container__container > div > form > div.button-wrapper > button")
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
      .type("Q2Bvfrbkdblgblfgnflnfnlflglndsvsdv");
    cy.get("#profile-edit > form > div:nth-child(1) > div > div.input-container > div")
      .should("have.text", "Максимум 16 символов");
  },
  //Заполнение поля "дата рождения" в настройках
  settings_form_birthday () {
    cy.get(":nth-child(2) > .input-wrapper > .input")
      .clear()
      .type("00000000");
    cy.get("div.modal-container__container > div > form > div.button-wrapper > button")
      .should("be.disabled");
    cy.get(":nth-child(2) > .input-wrapper > .input")
      .clear()
      .type("02082015");
    cy.get("div.modal-container__container > div > form > div.button-wrapper > button")
      .should("be.disabled");
    cy.get(":nth-child(2) > .input-wrapper > .input")
      .clear()
      .type("30022000");
    cy.get("div.modal-container__container > div > form > div.button-wrapper > button")
      .should("be.disabled");
    cy.get(":nth-child(2) > .input-wrapper > .input")
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
    cy.get("div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input")
      .clear()
      .type("666321");
  },
  // Выбор страны, где номер телефона
  set_country_number_phone (country) {
    cy.get(".intl-tel-input > .control > .input-wrapper > .dropdown-container > .country-dropdown > .dropdown > .dropdown-trigger > .trigger")
      .click()
      .get(".vue-recycle-scroller")
      .contains(country)
      .click();
  },
  //Заполнение поля "номер телефона" в настройках
  settings_form_numbPhone (phone) {
    cy.get("div.modal-container__container > div > form > div.intl-tel-input.row > div > div > input")
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
  settings_form_newpass () {
    cy.get("div.modal-container__container > div > form > div.field > button > span")
      .click();
    cy.get("div.modal-container__container > div > form > div.field > div > div > input")
      .type("qwerty1");
    cy.get("div.modal-container__container > div > form > div:nth-child(7) > div > input")
      .type("qwerty");
    cy.get("div.modal-container__container > div > form > div:nth-child(8) > div > input")
      .type("qwerty");


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
    cy.get("#main-container > main > div > div > div.panel-body > div")
      .should("not.to.be.empty");
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
    cy.get("#profile-edit > form > div:nth-child(6) > div > div.control-right > button > span")
      .click();
  },
  old_pass_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(6) > div > div.input-container > input")
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
    cy.get("#profile-edit > form > div:nth-child(5) > div > div.input-container > input")
      .should("be.visible");
  },
  // проверка, что внутри ставки отображаются данные
  assert_mail_disabled_for_mobile () {
    cy.get("#profile-edit > form > div:nth-child(5) > div > div.input-container > input")
      .should("be.disabled");
  },
  // проверка, поле mail доступно
  assert_mail_visible () {
    cy.get("#app-overlay-wrapper > div > div > div.modal-container__container > div > form > div:nth-child(5) > div > input")
      .should("be.visible");
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
    cy.get(".balance__amount")
      .should("exist");
    cy.get(".balance-text")
      .should("exist");
    cy.get(".balance-value")
      .should("exist");
  },
  // нажать на  кнопка "пополнить"
  button_deposit_for_mobile () {
    cy.get(".box-links__item_deposit > .box-links__name")
      .click();
  },
  // проверка, что кнопка "вывод" существует
  assert_button_withdrawal_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(1) > div > section.box-links > div > a:nth-child(3) > div.box-links__name")
      .should("exist");
  },
  // проверка, в "пополнение" мы имеем 10 способов полнения
  assert_button_deposit_for_mobile () {
    cy.get("div.payments-row > button")
      //.find('#main-layout > div.wrapper.has-tabs > div > div > div.deposit-payments > div.payments-row > button:nth-child(1)' )
      .should("have.length", 10);
  },
  // проверка, что кнопка "вывод" существует
  assert_button_transfer_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(1) > div > section.box-links > div > a:nth-child(2) > div.box-links__name")
      .should("exist");
  },
  // нажать на  кнопка "детализация"
  button_withdrawal_history_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > a:nth-child(4) > div > div.big-links__description")
      .click();
  },
  // проверка, что история выводов существует
  assert_withdrawal_history_for_mobile () {
    cy.get(".list")
      .should("exist");
  },
  // нажать на  кнопка "пополнить"
  button_bets_history_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > a:nth-child(3) > div")
      .click();
  },
  // проверка, что история ставок существует
  assert_bets_history_for_mobile () {
    cy.get("#bets-history > div.bets-history-content")
      .should("exist");
  },

  // нажать на  кнопка "скрыть баланс"
  button_hide_balance_for_mobile () {
    cy.get("#profile-edit > form > div.level.level--between > label")
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
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div > a:nth-child(3)")
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
      .click();
  },
  // проверка служба поддержки
  assert_support_for_mobile () {
    cy.get("#jcont")
      .should("exist");
  },
  // проверка перевода в детализации
  assert_transfer_detail () {
    cy.get(".detailing-content > :nth-child(1)")
      .should("exist").and("have.text", "ПереводK•••••3@gmail.com25 ноября 2019 г. | 18:31+ 100 ₽");
  },
  // проверка перевода в детализации
  assert_transfer_detail2 () {
    cy.get(":nth-child(1) > .detailing-item__left > .detailing-item__name")
      .should("exist").and("have.text", "Перевод");
  },
  // кнопка "Выводы" в детализации
  button_withdrawal_detail () {
    cy.get(".detailing-tabs > :nth-child(2)")
      .click();
  },
  // кнопка "Ставки" в детализации
  button_bets_detail () {
    cy.get(".detailing-tabs > :nth-child(3)")
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
    cy.get(":nth-child(1) > .detailing-item__left > .detailing-item__name")
      .should("exist").and("have.text", "Банковская карта");
  },
  // проверка ставок в детализации
  assert_bets_detail () {
    cy.get(".detailing-content > :nth-child(1)")
      .should("exist").and("have.text", "Ординар10 ₽ (6.25)14 февраля 2020 г. | 16:48- 10 ₽");
  },
  // проверка, что кнопка  после заполнения всех необходимых полей становится активной
  assert_button_is_active () {
    cy.get(".send-row > .button")
    .should("be.visible");
  },
  // проверка, что кнопка в начале теста неактивна
  assert_button_is_disabled () {
    cy.get(".send-row > .button")
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
      .should("have.text", "На Ваш email адрес Ginl39@1win.xyz было отправлено письмо с кодом подтверждения. Для завершения данной операции, Вам необходимо вставить код из письма в поле ниже.");
  },
};

