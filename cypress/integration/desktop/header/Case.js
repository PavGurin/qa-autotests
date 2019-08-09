import {auth} from "@support/desktop/Authorization";
import {shot} from "@support/desktop/Screenshots";
describe('Play Case', () => {
    it('C16311 - Case "Новичок"', function() {
        auth.login();
        shot.case_button();
        shot.case_classic();
        cy.get(':nth-child(1) > .case > .case-info > .case-info-wrapper > .case-info-contains')
            .click();
        cy.get('div:nth-child(2) > div.roulette-form__input > div')
            .click();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cy.get('#roulette-start')
            .should('have.text','Открыть за  12 ₽');
        cy.get('div:nth-child(3) > div.roulette-form__input > div > div.roulette-form__input-cursor')
            .click();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cy.get('#roulette-start')
            .should('have.text','Открыть за  13 ₽');
        cy.get('div:nth-child(4) > div.roulette-form__input > div')
            .click();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cy.get('#roulette-start')
            .should('have.text','Открыть за  15 ₽');
        cy.get('div:nth-child(4) > div.roulette-form__input > div')
            .click();
        cy.get('#main-container > div.content-wrapper > div > div > div > div > div > div.case-page__pg-wp.df-aic-jcfs.fdc > div.case-page__roulette-after.df-aifs-jcsb > div:nth-child(2) > div > div')
             .click();
        //ждем, пока прокрутится кейс
        cy.wait(3000);
        cy.get('#main-container > div.modal-wrapper > div > div > div > div.case.df-aic-jcc.fdc.color--5 > div.case-top-wrapper.fdc.df-aic-jcc.color--5 > p')
            .should('have.text','Вы выиграли');
        cy.get('.case-info-contains > span')
            .click();
        //ждем, пока прокрутится кейс, до появления модалки выигрыша
        cy.wait(11000);
        cy.get('#main-container > div.modal-wrapper > div')
            .click('topRight');
        cy.get('#main-container > div.content-wrapper > div > div > div > div > div > div.case-page__left.df-aifs-jcfs.df.fw > button')
            .click();
        cy.get('#main-container > div.content-wrapper > div > div > div.main-content')
            .matchImageSnapshot('Кейсы - Classic');


    });
});