/**
 Registration commands
 **/

const password_input = ".input[name=password]";
const new_password = ":nth-child(3) > .input-wrapper > .input";
const close_modal_windows = ".modal-container__header__row__cell__overlay";

export const navReg = {

  // registration button
  click_register () {
    cy.get(":nth-child(2) > .button", { timeout: 10000 })
      .first()
            .click();
  },
  change_currency_EUR () {
    cy.get(".header-balance__value")
      .trigger("mouseover");
    cy.get(".currency-dropdown")
      .eq(1)
      .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-item.nowrap")
      .last()
      .click();
  },
  // случайная валюта с индексом от 3 до 12
  deposit_random_currency () {
    cy.get(".header-balance__value")
        .trigger("mouseover");
    cy.get(".currency-dropdown")
        .eq(Math.floor(Math.random() * 9) + 3)
        .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-item.nowrap")
        .last()
        .click();
  },
  change_currency (num) {
    cy.get(".header-balance__value")
      .trigger("mouseover");
    cy.get(".currency-dropdown")
      .eq(num)
      .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-item.nowrap")
      .last()
      .click();
  },
  changeCurrencyFastMail (num) {
    cy.get(".input")
      .first()
      .click();
    cy.get(".currency-name")
      .eq(num)
      .click();
  },
  // установить основным кошельком случайную валюту с индексом от 3 до 12
  change_currency_random () {
    cy.get(".header-balance__value")
        .trigger("mouseover");
    cy.get(".currency-dropdown")
        .eq(Math.floor(Math.random() * 9) + 3)
        .trigger("mouseover");
    cy.wait(1000);
    cy.get(".dropdown-item.nowrap")
        .first()
        .click();
  },
  // registration button на мобильной версии
  click_register_for_mobile () {
    cy.get("header button.registration", { timeout: 10000 })
            .click();
  },

  // radio button 'User Agreement of usage'
  accept_agreement () {
    cy.get(".rules-accept-checkbox-text")
            .should("have.text", "Нажимая «Зарегистрироваться», Вы соглашаетесь с тем, что ознакомлены и полностью согласны с Условиями Соглашения об использовании сайта 1WIN");
  },
  // radio button 'User Agreement of usage'
  accept_agreement_for_mobile () {
    cy.get("#reg-one-click > form > div.level.rules > div > label > span")
            .click();
  },
  // radio button 'User Agreement of usage'
  accept_agreement_by_email_for_mobile () {
    cy.get(".v-checkbox > .input")
            .click();
  },

  // sign up button
  sign_up () {
    cy.get(".register-footer > .button")
            .click();
  },
  phoneRega () {
    cy.get(".form-tabs > :nth-child(2)")
      .click();
  },
  NumberPhone (phone) {
    cy.get("#app-overlay-wrapper > div > div.modal-container > div > div > div.modal-container__container > div > form > form > div.intl-tel-input.tel-input.row > div > div > div.input-message-container > input")
      .type(phone);
  },
  //1клик -> кнопка Продолжить (первая карточка регистрации)
  sign_up_for_mobile () {
    cy.get("#reg-one-click .submit-btn").first()
            .click();
  },
  //Email -> кнопка Продолжить (первая карточка регистрации)
  sign_up_with_email () {
    cy.get("#reg-full .submit-btn").first()
        .click();
  },
  //Email -> кнопка Зарегистрироваться (вторая карточка регистрации)
  sign_up_email_continue () {
    cy.get("#reg-full form .submit-btn")
        .click();
  },
  sign_up_check () {
    cy.get(".register-footer > .button")
            .should("be.visible");
  },

  // close window with new user's login/pass
  close_new_user_info () {
    cy.get(".icon-wrap")
      .last()
      .click();
  },
  // close window with new user's login/pass
  close_new_user_info_for_mobile () {
    cy.get(".icon-close")
            .click();
  },

  // button click_next only for social
  click_next () {
    cy.get(".register-footer > .button")
            .click();
  },

  // enter promocode
  add_promocode (promocode) {
    cy.get(".promocode-add-button > span")
            .first()
            .click()
            .get(".field > .control > .input-wrapper > .input-message-container > .input")
            .type(promocode);
  },
  // enter promocode
  add_promocode_for_mobile (promocode) {
    cy.get("#reg-one-click > form > div:nth-child(3) > div > button > span > span")
            .click()
            .get(".promo-code > .control > .input-container > .input")
            .type(promocode);
  },
  add_promocode_by_email_for_mobile (promocode) {
    cy.get(".promo-code-button")
            .click()
            .get("#reg-full form .level:nth-child(5) input")
            .type(promocode);
    cy.get(".promocode-apply-button").click();
  },
  // закрыть (нажать крестик) поле промокода
  close_promocode () {
    cy.get(".form > .field > .button")
            .click();
  },
  // select country from registration page
  set_country (num) {
    cy.get(".dropdown-trigger")
            .last()
            .click();
    cy.get(".dropdown-item")
            .eq(num)
            .click();
  },
  // select country from registration page
  set_country_for_mobile (country) {
    cy.get("#reg-full .level:nth-child(2) .dropdown-trigger")
            .click();
    cy.contains(country)
            .click({ force: true });
  },

  // check default country
  check_country_default (country) {
    cy.get(".modal-container")
            .last()
            .as("selected_country");
    cy.get("@selected_country")
            .find(".country-select input")
            .should("have.value", country);
  },
  check_country_default_for_mobile (country) {
    cy.get("#reg-one-click > form > div:nth-child(1)")
            .last()
            .as("selected_country");
    cy.get("@selected_country")
            .find(".country-select input")
            .should("have.value", country);
  },

  // switch registration form type
  registration_form (type) {
    cy.contains(type)
            .click();
  },

  // email form - name
  set_name (name) {
    cy.get(".form > :nth-child(1) > .input-wrapper > .input")
            .type(name);
  },
  // email form - name
  set_name_for_mobile (name) {
    cy.get(":nth-child(3) > .control > .input-container > .input")
            .type(name);
  },

  set_date_of_birth (date) {
    cy.get(":nth-child(2) > .input-wrapper > .input")
            .type(date);
  },
  set_date_of_birth_for_mobile (date) {
    cy.get(":nth-child(2) > .control > .input-container > .input")
            .type(date);
  },

  // email form - email
  set_email (email) {
    cy.get(".input")
      .eq(2)
      .type(email);
  },
  // email form - email
  set_email2 (email) {
    cy.get(".input-wrapper > .input")
            .type(email);
  },
  set_email_for_mobile (email) {
    cy.get(".input")
            .type(email);
    cy.get("#reg-full form .level:nth-child(2) input")
            .click({ timeout: 10000 });
  },
  set_email_register_for_mobile (email) {
    cy.get("#reg-full form .level:nth-child(3) input")
            .type(email);
  },

  // email form - password
  set_pwd (password) {
    cy.get(".input")
      .eq(3)
      .type(password);
  },
  set_pwd_for_mobile (password) {
    cy.get("#reg-full form .level:nth-child(4) input")
            .type(password);
  },
  // email form - repeat password field
  repeat_pwd (password2) {
    cy.get("form .control.row:nth-child(6) .input")
      .clear()
            .type(password2);
  },

  // email form - repeat password field
  repeat_pwd_for_mobile (password2) {
    cy.get(".card-main-content:nth-child(2) div.level:nth-child(4) input")
            .type(password2);
  },

  // email form - day of birth
  set_birth_day (day) {
    cy.get(".date .input")
            .type("{selectall}{del}")
            .type(day);
  },

  // email form - month of birth
  set_birth_month (month) {
    cy.get(".date-item.month")
            .click()
            .find("div.dropdown-item")
            .first();
  },

  // email form - year of birth
  set_birth_year (year) {
    cy.get(".year .input")
            .type("{selectall}{del}")
            .type(year);
  },

  // email form - country phone
  country_phone_field (country_phone) {
    cy.get(".form > .control > .separate-dial-code")
            .click(country_phone);
  },

  // email form -  phone
  set_phone_numb (phone) {
    cy.get(".input")
      .eq(1)
      .type(phone);
  },
  // email form -  phone
  set_phone_numb_for_mobile (phone) {
    cy.get(".intl-tel-input > .control > .input-container > .input")
            .type(phone);
  },

  // choose social network for registration (both language versions got same social network names)
  set_social_network (social_network) {
    cy.contains(social_network)
            .click();
  },
  // social_network - OK
  set_social_network_OK (social_network) {
    cy.contains(social_network)
            .click();
  },
  //
  // social form - password
  password_input (password) {
    cy.get(password_input)
            .type(password);
  },

  // social form - password repeat
  password_input_repeat (password) {
    cy.get(new_password)
            .type(password);
  },

  check_ios () {
    cy.get(".header-mobile-apps > div:nth-child(2) .icon", { timeout: 10000 })
      .click();
    cy.get(".tooltip-container")
      .should("be.visible");
  },
  ios_modal_close () {
    cy.get("#main-container > div.modal-wrapper > div > svg")
            .click();
  },

  application_ios_click () {
    cy.get("div:nth-child(2) > a.application-card.left-block-item-ios.application-card-ios > div > svg")
            .first()
            .click();
  },

  check_android_download () {
    cy.get("div:nth-child(2) > a.application-card.left-block-item-android.application-card-android")
            .should("be.visible");
    cy.get(".level-item > .application-card-android")
            .should("have.attr", "href").and("include", "/apk-folder/1win-1wenx.xyz.apk");
  },
  check_telegram () {
    cy.get("footer").scrollIntoView();
    cy.get(".social-link.telegram img", { timeout: 10000 })
      .should("be.visible");
    cy.get("footer .social-link.telegram")
      .should("have.attr", "href").and("include", "https://t.me/joinchat/AAAAAEOBOGmId4M_50OlSA");
  },
  check_vk () {
    cy.get(".social-link.vk", { timeout: 10000 })
      .should("be.visible");
    cy.get("footer .social-link.vk")
      .should("have.attr", "href").and("include", "https://vk.com/1winn");
  },
  check_android () {
    cy.get(".header-mobile-apps > div:nth-child(1) .icon", { timeout: 10000 })
        .first().click();
    cy.get(".tooltip-wrapper")
      .should("exist");
  },

  check_reg_result () {
    cy.get(".modal-container .user-info .user-info__content__item", { timeout: 10000 })
            .then(($new_user_info) => {
              const login = $new_user_info[0].lastChild.outerText;
              const password = $new_user_info[1].lastChild.outerText;

              expect(login).not.to.be.empty;
              expect(password).not.to.be.empty;

              cy.log(`Логин - ${login}, Пароль - ${password}`);
            });
  },
  check_reg_result_for_mobile () {
    cy.get("div.success-reg-modal-columns > div:nth-child(1)")
            .should("not.be.empty");
    cy.get("div.success-reg-modal-columns > div:nth-child(2)")
            .should("not.be.empty");
  },
  //check that reg window is closed and username equals requested during reg
  check_sign_up (userName) {
    cy.get("div.modal-container")
            .should("not.exist");
    cy.get(".user-name-value")
            .should("have.text", userName);
  },
  check_buttonDeposit (userName) {
    cy.get(".button.green.theme-default")
      .should("exist")
      .should("have.text", "Пополнить в 1 Клик");
  },
  check_sign_up_for_mobile (userName) {
    cy.get("#header > div > div > div.control-item > button > span")
            .click();
    cy.get(".balance-value")
            .should("have.text", userName);
  },
  check_sign_up_for_mobile_without_enter (userName) {
    cy.get(".balance-value")
            .should("have.text", userName);
  },
  //кнопка - "Войти в профиль с главной страницы"
  click_settings_main_page_for_mobile () {
    cy.get("header .profile-button")
            .click();
  },
  //кнопка - "Войти в профиль с главной страницы"
  click_green_plus_for_mobile () {
    cy.get("#header > div > div > div.balance > a")
      .click();
  },
  // check redirection to vk oauth page
  check_vk_reg () {
    cy.url()
            .should("contains", "oauth.vk.com");
  },
  //close modal container register
  close_modal_windows () {
    cy.get(close_modal_windows)
            .click();
  },
  //проверка модального окна "Регистрация"
  register_assert_modal_container () {
    cy.get(".modal-container__header__row__cell__title")
            .should("have.text", "Регистрация");
  },
  // Проверка, что кнопка "Зарегистрироваться"(внутри модального окна) неактивна
  register_assert_disabled () {
    cy.get(".register-footer > .button")
            .should("be.disabled");
  },
  //проверка, что кнопка "Зарегистрироваться" активна
  register_assert_visible () {
    cy.get(".register-footer > .button")
            .should("be.visible");
  },
  // Проверка, что кнопка "далее"(внутри модального окна регистрция-соц.сети) неактивна
  register_next_assert_disabled () {
    cy.get("#app-overlay-wrapper > div > div > div > div.modal-container__container > div > form > form > footer > button")
            .should("be.disabled");
  },
  //проверка, что кнопка "Зарегистрироваться" активна
  register_next_assert_visible () {
    cy.get(".register-footer > .button")
            .should("be.visible");
  },
  //проверка модального окна "Приложение iOS"
  check_ios_download_window () {
    cy.get("#main-container > div.modal-wrapper > div > h1")
            .should("have.text", "Приложение iOS");
    cy.get("#main-container > div.modal-wrapper > div > a.ios-instruction-details")
            .should("have.attr", "href").and("include", "https://support.apple.com/ru-ru/HT204460");
  },
  // email form - email
  button_set_email (email) {
    cy.get(".user-info__btns > :nth-child(3) > .icon")
            .click();
  },
  // Check on contains text in 1 click form
  contains_check_1click () {
    cy.get(".form-tabs > div").should(($lis) => {
      expect($lis, "3 items").to.have.length(3);
      expect($lis.eq(0), "first item").to.have.class("form-tabs__link form-tabs__link_active");
    });
  },
  // Check on contains text in social network form
  contains_check_social () {
    cy.get(".form-tabs > div").should(($lis) => {
      expect($lis, "3 items").to.have.length(3);
      expect($lis.eq(1), "first item").to.have.class("form-tabs__link form-tabs__link_active");
    });
  },
  // Check on contains text in e--mail form
  contains_check_mail () {
    cy.get(".form-tabs > div").should(($lis) => {
      expect($lis, "3 items").to.have.length(3);
      expect($lis.eq(2), "first item").to.have.class("form-tabs__link form-tabs__link_active");
    });
  },
  copy_login_password () {
    cy.get("div.modal-container__container > div > div > div.user-info__btns > button:nth-child(1)")
        .click();
  },
  copy_login_pass_for_mobile () {
    cy.get("div.success-reg-modal-controls > button:nth-child(1) > span")
            .click();
  },
  download_login_password () {
    cy.get("div.modal-container__container > div > div > div.user-info__btns > button:nth-child(2)")
            .click();
  },
  send_login_pass_for_mobile () {
    cy.get("div.success-reg-modal-controls > button:nth-child(2) > span")
            .click();
  },
  click_send_login_pass () {
    cy.get(".user-info__email > .button")
            .click();
  },
  clear_number_phone_for_mobile () {
    cy.get(".intl-tel-input input")
            .clear();
  },
  clear_mail_for_mobile () {
    cy.get("#reg-full .level:nth-child(3) input")
            .clear();
  },

  assert_login_for_mobile () {
    cy.get("#header > div > div > div.balance")
            .should("exist");
  },
  assert_logout_for_mobile () {
    cy.get("header button.login")
            .should("exist");
  },
  choose_wallet_for_mobile () {
    cy.get("#reg-one-click > form > div:nth-child(2) > div > div > label")
            .click();
  },
  currency_USD_for_mobile () {
    cy.get("#modal-container > section > main > section > form > label:nth-child(3)")
            .click();
  },
  assert_currency_USD_for_mobile () {
    cy.get("#header > div > div > div.balance > div")
            .should("have.text", "Баланс0,00 $");
  },
  assert_currency_EUR_for_mobile () {
    cy.get("#header > div > div > div.balance > div")
      .should("have.text", "Баланс0,00 €");
  },
  currency_EUR_for_mobile () {
    cy.get("#modal-container > section > main > section > form > label:nth-child(2)")
      .click();
  },
  button_LiveGames () {
    cy.get("[href=\"/casino/live\"]").first()
        .click();
  },
};
