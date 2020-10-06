import { prof } from "@support/desktop/Profile";

/**
 Методы авторизации
 **/
const button_registration = ".register-adv__link";
const user_info = "#header > div.header__line--top > section > div";
const entry_button = "button.button.secondary";
const login_input = "input[name=login]";
const password_input = "input[name=password]";
const login_confirm = ".modal-button";
const auth_window = "div.modal-container";
const logout_question = ".logout-question";
const notification = ".notification-item";
const forget_button = ".field > .button > span";
const email_forget_send = "div.modal-container__container > div > form > form > div > button";
const code_operation = ":nth-child(2) > .input-wrapper > .input";
const new_password = ":nth-child(3) >.input-wrapper > .input";
const new_password_repeat = ":nth-child(4) >.input-wrapper > .input";
const modal_login_container = ".modal-container__header__row__cell__title";
const vk_social_button = "div:nth-child(2) > div.socials > img:nth-child(1)";
const password_recovery = ".modal-container__header__row__cell__title";
const change_password = " .form > .button";

export const auth = {
  // Logout
  logout () {
    prof.withdrawal("Выйти");
    // должен появиться вопрос-подтверждение выхода
    //logout_question() {
    cy.get(logout_question)
             .should("exist");
    // 'подтверждаем' выход
    cy.get("#app-overlay-wrapper > div > div > div.modal-container__container > div.modal-container__footer > div > div.logout-buttons > button.button.block-item.fullwidth.dark-2")
            .click();
  },
  //когда выходим с главной страницы
  logout_for_mobile () {
    cy.get("#header > div > div > div.control-item > button > span")
         .click();
    cy.get(".exit")
            .click();
  },
  logout_for_mobile2 () {
    //cy.get('#header > div > div > div.control-item > button')
    // .click();
    cy.get(".exit")
             .click();
  },
  modalBonus () {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
  },
  logout_ByEmail_for_mobile () {
    cy.get("#main-layout > div.wrapper > div > div > div:nth-child(2) > div:nth-child(2) > div")
            .click();
  },
  login () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 15000 })
            .click({ force: true });
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 15000 })
            .type("ginl39@1win.xyz");
    // вводим пароль
    // password_input() {
    cy.get(password_input, { timeout: 15000 })
                 .type("dreamteam");
    // нажимаем кнопку "войти"
    cy.get(".modal-button")
            .click();
    cy.wait(15000);
  },
  login_stage () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 15000 })
      .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 15000 })
      .type("kikh66@1win.xyz");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
      .type("v1333i");
    // нажимаем кнопку "войти"
    cy.get(".modal-button")
      .click();
  },
  login_for_change_email () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 15000 })
            .click();
    // вводим логин/пароль
    cy.get(login_input, { timeout: 15000 })
            .type("cuwn94@1win.xyz");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
            .type("744433");
    // нажимаем кнопку "войти"
    cy.get(".modal-button")
            .click();
  },
  login_mail () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 15000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 15000 })
            .type("1wintesttransfer@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
            .type("qwerty12");
    // нажимаем кнопку "войти"
    cy.get(".modal-button")
            .click();
  },
  login_mail2 () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 15000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 15000 })
            .type("1wintest123@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
            .type("qwerty12");
    // нажимаем кнопку "войти"
    cy.get(".modal-button")
            .click();
  },
  login_for_mobile () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(".login > .button-content", { timeout: 10000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(":nth-child(1) > .input-container > .input")
            .type("where100@mail.ru");
    // вводим пароль
    // password_input() {
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("tk7oqj");
    // нажимаем кнопку "войти"
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },
  login_for_mobile2 () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(".login > .button-content", { timeout: 10000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(":nth-child(1) > .input-container > .input", { timeout: 10000 })
            .type("ginl39@1win.xyz");
    // вводим пароль
    // password_input() {
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("dreamteam");
    // нажимаем кнопку "войти"
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },
  login_for_mobile_mail () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get("#header > div > button.login.control-item.button.sm.default", { timeout: 7000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(":nth-child(1) > .input-container > .input")
            .type("transferMobile@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("qwerty12");
    // нажимаем кнопку "войти"
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },
  login_for_mobile_mail2 () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get("#header > div > button.login.control-item.button.sm.default", { timeout: 7000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(":nth-child(1) > .input-container > .input")
            .type("transferMobile2@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("qwerty12");
    // нажимаем кнопку "войти"
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },
  repeat_login_for_mobile2 () {
    cy.get("#main-layout > div.wrapper.has-tabs > div > div > form > div:nth-child(2) > div.input-container > input", { timeout: 7000 })
            .type("nogm75@1win.xyz");
    cy.get("#main-layout > div.wrapper.has-tabs > div > div > form > div:nth-child(3) > div.input-container > input")
            .type("testerQA");
    // нажимаем кнопку "продолжить"
    cy.contains("Продолжить")
            .click();
  },
  login2 () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 10000 })
        .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 6000 })
        .type("where100@mail.ru");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
        .type("tk7oqj");
    // нажимаем кнопку "войти"
    cy.get("div.modal-container__container > div > form > form > div:nth-child(2) > button")
        .click();
  },
  login3 () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 10000 })
            .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 6000 })
            .type("outdead186@gmail.com");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
            .type("qwerty12");
    // нажимаем кнопку "войти"
    cy.get("div.modal-container__container > div > form > form > div:nth-child(2) > button")
            .click();
  },
  login_with_new_pass_settings (pass) {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button, { timeout: 10000 })
           .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input)
            .type("testpass@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get(password_input)
            .type(pass);
    // нажимаем кнопку "войти"
    cy.get("div.modal-container__container > div > form > form > div:nth-child(2) > button")
            .click();
  },
  login_for_mobile3 (pass) {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(".login > .button-content", { timeout: 10000 })
            .click({ force: true });
    // вводим логин/пароль
    // login_input() {
    cy.get(":nth-child(1) > .input-container > .input", { timeout: 10000 })
            .type("testpass@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get("div:nth-child(2) > div.input-container > input")
            .type(pass);
    // нажимаем кнопку "войти"
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },

  login_with_new_pass (pass) {
    // нажимаем кнопку 'Войти' со стартовой страницы
    //cy.get(entry_button)
    //    .click();
    // вводим логин/пароль
    // login_input() {
    cy.get(login_input, { timeout: 10000 })
            .type("1wintest@ahem.email");
    // вводим пароль
    // password_input() {
    cy.get(password_input, { timeout: 10000 })
            .type(pass);
    // нажимаем кнопку "войти"
    cy.get("div.modal-container__container > div > form > form > div:nth-child(2) > button")
            .click();
  },
  // нажимаем на кнопку "забыли пароль"
  password_forget () {
    cy.get(forget_button)
                 .click();
  }, // кнопка отправить на почту при восстановлении пароля
  password_forget_send () {
    cy.get(email_forget_send)
                 .click();
  },
  // код операции
  code_operation () {
    cy.get(code_operation)
                 .click()
                 .type("12345");
  },
  //Форма для заполнения почты, если забыл пароль
  forget_set_email (email) {
    cy.get(".input-wrapper > .input")
                   .type(email);
  },
  // Вводим новый пароль и повторяем его
  new_password (password) {
    cy.get(new_password)
                   .click()
                    .type(password);
    cy.get(new_password_repeat)
                   .click()
                   .type(password);
  },
  // Кнопка "зарегаться" в модальном окне "вход"
  button_registration () {
    cy.get(button_registration)
                   .click();
  },
  // жмем на кнопку "Войти" на странице авторизации
  login_confirm () {
    cy.get(login_confirm)
                   .click();
  },
  // Проверка модального онка "Установите новый пароль"
  new_password_modal () {
    cy.get(".modal-container__header__row__cell__title")
            .should("have.text", "Установите новый пароль");
  },
  // невалидная попытка авторизации
  login_nonexistent_user () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button)
            .click();
    // вводим невалидные логин/пароль
    cy.get(login_input)
            .type("nonexistent@test.com")
            .should("have.value", "nonexistent@test.com");
    cy.get(password_input)
            .type("wrong_password");
    // нажимаем кнопку 'Войти' в меню авторизации
    cy.get(login_confirm)
            .click();
    // проверяем ошибку и ее текст
    cy.get(notification)
            .should("visible")
            .and("have.text", "Неверный email или пароль");
    // проверяем, что пользователь все еще не залогинен
    cy.get(user_info)
            .should("not.exist");
    cy.get(login_input)
            .clear();
    cy.get(password_input)
            .clear();
  },
  // невалидная попытка авторизации
  login_nonexistent_user_for_mobile () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(".login > .button-content", { timeout: 10000 })
            .click();
    // вводим невалидные логин/пароль
    cy.get(":nth-child(1) > .input-container > .input")
            .type("nonexistent@test.com")
            .should("have.value", "nonexistent@test.com");
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("wrong_password");
    // нажимаем кнопку 'Войти' в меню авторизации
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
    // проверяем ошибку и ее текст
    cy.get("#notifications-container")
            .should("visible")
            .and("have.text", "Неверный email или пароль");
  },
  // авторизация с пустыми обязательными полями
  login_empty_mandatory_fields () {
    // жмем на кнопку "Войти" на странице авторизации
    cy.get(entry_button, { timeout: 10000 })
            .click();
    cy.get(login_input)
            .type("test")
            .should("have.value", "test");
    // проверяем, что окно авторизации все еще активно
    cy.get(auth_window)
            .should("exist");
    cy.screenshot();
    // очищаем поле ввода логина
    cy.get(login_input)
            .clear();
    cy.get(password_input)
            .clear();
  },
  // авторизация с пустыми обязательными полями
  login_empty_pass_for_mobile (mail) {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(".login > .button-content", { timeout: 10000 })
            .click();
    cy.get(":nth-child(1) > .input-container > .input")
            .type(mail);
    cy.get("#modal-container > div > main > div > div > form > div.button-wrapper > button > span")
            .click();
  },
  login_empty_mail_for_mobile () {
    // нажимаем кнопку 'Войти' со стартовой страницы

    cy.get(":nth-child(1) > .input-container > .input", { timeout: 10000 })
            .clear();
    cy.get(":nth-child(2) > .input-container > .input", { timeout: 10000 })
            .type("123test");
    cy.get("#app > div > div.modal-layout-default.not-transparent > main > div > div > form > div.button-wrapper > button > span")
            .click();

  },
  login_invalid_password () {
    // жмем на кнопку "Войти" на странице авторизации
    cy.get(entry_button, { timeout: 10000 })
             .click();
    // вводим логин с неправильным паролем
    cy.get(login_input)
        .type("nogm75@1win.xyz")
        .should("have.value", "nogm75@1win.xyz");
    cy.get(password_input)
        .type("123456555");
    cy.get(".modal-button", { timeout: 10000 })
         .click();
    // проверяем ошибку и ее текст
    cy.get(notification)
        .should("be.visible")
        .and("have.text", "Неверный email или пароль");
  },
  // проверяем, что пользователь залогинился
  user_info () {
    cy.get(user_info)
        .should("exist");
  },
  login_invalid_password_for_mobile () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get("#header > div > button.login.control-item.button.sm.default", { timeout: 10000 })
            .click();
    // вводим mail
    cy.get(":nth-child(1) > .input-container > .input")
            .type("nogm75@1win.xyz");
    cy.get("div:nth-child(2) > div.input-container > input")
            .type("qwerty321");
    // нажимаем кнопку 'Войти' в меню авторизации
    cy.get("#app > div > div.modal-layout-default.not-transparent > main > div > div > form > div.button-wrapper > button > span", { timeout: 10000 })
            .click();
    // проверяем ошибку и ее текст
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Неверный email или пароль");

  },
  // проверяем, что пользователь разлогинился
  //user_logout_expect() {
  //cy.get(user_info)
  //.should('not.exist');
  //cy.get(logout_question)
  //.should('not.exist');
  login_without_enter () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    //click_auth() {
    cy.get(entry_button, { timeout: 10000 })
            .click();
  },
  // вводим логин
  login_input () {
    cy.get(login_input)
            .type("nogm75@1win.xyz ");
  },
  // вводим пароль
  password_input () {
    cy.get(password_input)
            .type("123456");
  },

  // нажимаем кнопку 'Войти' со стартовой страницы
  click_auth () {
    cy.get(entry_button)
            .click({ timeout: 10000 });
  },
  // Проверяем модальное окно "вход"
  modal_container_enter () {
    cy.get(modal_login_container)
            .should("have.text", "Вход");
  },
  // Жмем "войти с помощью VK"
  vk_social_button () {
    cy.get(vk_social_button)
            .click();
  },
  // проверяем, что пользователь все еще не залогинен
  check_login_dont () {
    cy.get(user_info)
        .should("not.exist");
    cy.get(login_input)
        .clear();
    cy.get(password_input)
        .clear();
  },
  // Проверяем модальное окно "Восстановление пароля"
  modal_container_password_recovery () {
    cy.get(password_recovery)
            .should("have.text", "Восстановление пароля");
  },
  //проверить, что кнопка "сменить пароль" недоступна
  change_password_disabled () {
    cy.get(change_password)
        .should("be.disabled");
  },
  //проверить, что кнопка "сменить пароль" доступна
  change_password_visible () {
    cy.get(change_password)
            .should("be.visible");
  },
  // проверяем ошибку и ее текст
  check_notification () {
    cy.get(notification)
        .should("be.visible")
        .and("have.text", "Данные скопированы");
  },
  // Проверка модального онка "Установите новый пароль,текст снизу"
  new_password_text_mail () {
    cy.get(".description > .email")
            .should("have.text", " 1wintest@ahem.email");
  },
  //нажать на  кнопку "сменить пароль"
  change_password_click () {
    cy.get(change_password)
            .first()
            .click();
  },
  // проверяем, что изменение пароля успешно
  check_change_pass () {
    cy.get(notification)
            .should("be.visible")
            .and("have.text", "Пароль успешно изменен.");
  },
  // невалидная попытка авторизации
  old_password () {
    // нажимаем кнопку 'Войти' со стартовой страницы
    cy.get(entry_button)
            .click();
    // вводим валидный логин и невалидный пароль
    cy.get(login_input)
            .type("1wintest@ahem.email")
            .should("have.value", "1wintest@ahem.email");
    cy.get(password_input)
            .type("qwerty");
    // нажимаем кнопку 'Войти' в меню авторизации
    cy.get(login_confirm)
          .click();
    // проверяем ошибку и ее текст
    cy.get(notification)
          .should("visible")
          .and("have.text", "Неверный email или пароль");
    cy.screenshot();
    // проверяем, что пользователь все еще не залогинен
    cy.get(user_info)
          .should("not.exist");
    cy.get(login_input)
            .clear();
    cy.get(password_input)
            .clear();
  },
  // проверяем ошибку и ее текст
  check_notification_for_mobile () {
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Данные скопированы в буфер обмена");
  },
  // проверяем ошибку и ее текст
  check_notification_set_login_email_for_mobile () {
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Письмо успешно отправлено!");
  },
  // проверяем ошибку и ее текст
  check_notification_bad_number_phone_for_mobile () {
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Пользователь с таким номером телефона уже существует");
  },
  // проверяем ошибку и ее текст
  check_notification_bad_mail_for_mobile () {
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Пользователь с таким email уже существует");
  },
  // проверяем ошибку и ее текст
  check_notification_invalid_pass_for_mobile () {
    cy.get("#notifications-container")
            .should("be.visible")
            .and("have.text", "Bad request, password is invalid");
  },
  // проверяем ошибку и ее текст
  check_notification_invalid_login_for_mobile () {
    cy.get(".msg")
            .should("be.visible")
            .and("have.text", "Bad request, password is invalid");
  },
  // закрываем окно "доступ к сайту"
  close_window_site () {
    cy.get("#main-container > div.modal-wrapper > div > div.modal-container__header > div > div:nth-child(2)", { timeout: 10000 })
            .click();
  },

};
