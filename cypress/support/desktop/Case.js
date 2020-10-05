export const cases = {
//нажать на  кнопку "кейс новичок"
  choose_case () {
    cy.get(":nth-child(1) > .cases-item-wrapper > .tilt > .cases-card > .cases-card-container > .cases-card-bottom-container > .card-open-button")
           .click();
  },
  //нажать на  кнопку "кейс новичок"
  choose_case_for_mobile () {
    cy.get(".position-4 > .case-card-right > .case-card-button")
            .click();
  },
  //Увеличитель шанса +10% за 2 р
  chance_improve_10_percent () {
    cy.get(":nth-child(1) > .case-modal-chance-item-percent")
            .click();
  },
  //Увеличитель шанса +20% за 3 р
  chance_improve_20_percent () {
    cy.get(":nth-child(2) > .case-modal-chance-item-percent")
          .click();
  },
  //Увеличитель шанса +30% за 5 р
  chance_improve_30_percent () {
    cy.get(":nth-child(3) > .case-modal-chance-item-percent")
            .click();

  },
  //Кнопка изменила сумму, согласно увеличителю шансов
  open_for_12 () {
    cy.get("#roulette-start")
            .should("have.text", "Открыть за  12 ₽");
  },
  //Кнопка изменила сумму, согласно увеличителю шансов
  open_for_13 () {
    cy.get("#roulette-start")
            .should("have.text", "Открыть за  13 ₽");
  },
  //Кнопка изменила сумму, согласно увеличителю шансов
  open_for_15 () {
    cy.get("#roulette-start")
            .should("have.text", "Открыть за  15 ₽");
  },
  //нажать на кнопку открыть кейс
  button_open_case () {
    cy.get("#app-overlay-wrapper > div > div > div.case-modal-control > div.case-modal-options-button-wrapper > button")
            .click();
  },
  //нажать на кнопку открыть кейс
  button_open_case_for_mobile () {
    cy.get(".case-game-button")
            .click();
  },
  //Проверка модального окна выигрыша в кейс
  modal_container_case () {
    cy.get("#app-overlay-wrapper > div > div > div.case-modal-header-wrapper", { timeout: 15000 })
            .should("have.text", "Поздравляем!Вы выиграли");
  },
  //Проверка модального окна выигрыша в кейс
  modal_container_case_for_mobile () {
    cy.get("#modal-container > div > main > div > div.text-row", { timeout: 15000 })
            .should("have.text", "Поздравляем!Вы выиграли");
  },
  //нажать на кнопку открыть снова
  repeat_open_case () {
    cy.get(".case-info-contains > span")
            .click();
  },
  //нажать на кнопку закрыть модалку выигрыша
  close_case () {
    cy.get("#modal-container > div > main > div > div.close-btn-row > svg")
      .click();
  },
  //нажать на кнопку открыть кейс
  repeat_open_case_for_mobile () {
    cy.get("#modal-container > div > main > div > div.btn-row > button")
            .click();
  },
  //закрываем модальное окно выигрыша, кликая в любое место экрана
  close_modal_container_case () {
    cy.get(".cases-wrapper", { timeout: 10000 })
            .click("topRight");
  },
  //закрываем модальное окно выигрыша, кликая в любое место экрана
  close_modal_container_case_for_mobile () {
    cy.get("#modal-container > div > main > div > div.close-btn-row > svg")
            .click();
  },
  //нажимаем на кнопку "другие кейсы"
  button_another_cases () {
    cy.get(".case-page__back")
            .click();
  },
  //нажать на кнопку кейсы Сlassic
  open_case_classic () {
    cy.get("#cases-list > div.theme-row > div:nth-child(1) > button > span")
            .click();
  },
  //Кнопка кейсы на главной странице
  open_for_mobile () {
    cy.get("#navigation > section > a:nth-child(7)")
            .click();
  },
  //закрываем модальное окно выигрыша, кликая в любое место экрана
  assert_case_for_mobile () {
    cy.get("#main-layout > div.wrapper.has-tabs > div.body.main-layout-item > div > div.case-info > div.name")
            .should("have.text", "Новичок");
  },
};
