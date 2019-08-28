export const cases = {
//нажать на  кнопку "кейс новичок"
    choose_case() {
       cy.get(':nth-child(1) > .case > .case-info > .case-info-wrapper > .case-info-contains')
           .click();
},
    //нажать на  кнопку "кейс новичок"
    choose_case_for_mobile() {
        cy.get('.theme-container-rang-0 > .case')
            .click();
    },
    //Увеличитель шанса +10% за 2 р
    chance_improve_10_percent() {
       cy.get('div:nth-child(2) > div.roulette-form__input > div')
            .click();
},
    //Увеличитель шанса +20% за 3 р
    chance_improve_20_percent() {
       cy.get('div:nth-child(3) > div.roulette-form__input > div')
          .click();
},
    //Увеличитель шанса +30% за 5 р
    chance_improve_30_percent() {
        cy.get('div:nth-child(4) > div.roulette-form__input > div')
            .click();

},
    //Кнопка изменила сумму, согласно увеличителю шансов
    open_for_12() {
        cy.get('#roulette-start')
            .should('have.text','Открыть за  12 ₽');
},
    //Кнопка изменила сумму, согласно увеличителю шансов
    open_for_13() {
        cy.get('#roulette-start')
            .should('have.text','Открыть за  13 ₽');
},
    //Кнопка изменила сумму, согласно увеличителю шансов
    open_for_15() {
        cy.get('#roulette-start')
            .should('have.text','Открыть за  15 ₽');
},
    //нажать на кнопку открыть кейс
    button_open_case() {
        cy.get('#main-container > div.content-wrapper > div > div > div > div > div > div.case-page__pg-wp.df-aic-jcfs.fdc > div.case-page__roulette-after.df-aifs-jcsb > div:nth-child(2) > div > div')
            .click();
    },
    //нажать на кнопку открыть кейс
    button_open_case_for_mobile() {
        cy.get('#main-layout > div.wrapper.has-tabs > div.body.main-layout-item > div > div.game-row > div.btn-container > button > span')
            .click();
    },
    //Проверка модального окна выигрыша в кейс
    modal_container_case() {
        cy.get('#main-container > div.modal-wrapper > div > div > div > div.case.df-aic-jcc.fdc.color--5 > div.case-top-wrapper.fdc.df-aic-jcc.color--5 > p')
            .should('have.text','Вы выиграли');
    },
    //Проверка модального окна выигрыша в кейс
    modal_container_case_for_mobile() {
        cy.get('#app > div > div.modal-layout-default > main > div > div.text-row')
            .should('have.text','Поздравляем!Вы выиграли');
    },
    //нажать на кнопку открыть кейс
    repeat_open_case() {
        cy.get('.case-info-contains > span')
            .click();
    },
    //нажать на кнопку открыть кейс
    repeat_open_case_for_mobile() {
        cy.get('#app > div > div.modal-layout-default > main > div > div.btn-row > button > span')
            .click();
    },
    //закрываем модальное окно выигрыша, кликая в любое место экрана
    close_modal_container_case() {
        cy.get('#main-container > div.modal-wrapper > div')
            .click('topRight');
    },
    //закрываем модальное окно выигрыша, кликая в любое место экрана
    close_modal_container_case_for_mobile() {
        cy.get('#app > div > div.modal-layout-default > main > div > div.close-btn-row > svg')
            .click();
    },
    //нажимаем на кнопку "другие кейсы"
    button_another_cases() {
        cy.get('#main-container > div.content-wrapper > div > div > div > div > div > div.case-page__left.df-aifs-jcfs.df.fw > button')
            .click();
    },
    //нажать на кнопку кейсы Сlassic
    open_case_classic() {
        cy.get('#cases-list > div.theme-row > div:nth-child(1) > button > span')
            .click();
    },
    //Кнопка кейсы на главной странице
    open_for_mobile() {
        cy.get('#navigation > section > a:nth-child(6)')
            .click();
    },
    //закрываем модальное окно выигрыша, кликая в любое место экрана
    assert_case_for_mobile() {
        cy.get('#main-layout > div.wrapper.has-tabs > div.body.main-layout-item > div > div.case-info > div.name')
            .should('have.text', 'Новичок');
    },
};
