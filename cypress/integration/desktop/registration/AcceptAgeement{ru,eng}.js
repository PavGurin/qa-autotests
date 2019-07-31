import { navReg } from '@support/desktop/NavReg';
import { basicCom } from '@support/desktop/BasicCommands';
import { text } from '@support/desktop/Descriptions';
describe('Rules agreement', () => {
    it('C16787 - Rules agreement rus', () => {

        cy.contains('Регистрация');
        navReg.click_register();

        // Check on contains text in 1 click form
        text.text_ru_rule_reg();

        // Check on contains text in social network form
        navReg.registration_form('Соц. сети');
        text.text_ru_rule_reg();

        // Check on contains text in e--mail form
        navReg.registration_form('По e-mail');
        text.text_ru_rule_reg();
    });

    it('C18765 - Rules agreement eng', () => {
        cy.visit('/');
        //cy.wait(5000);
        basicCom.switch_language();

        cy.contains('Registration');
        navReg.click_register();
        // Check on contains text in 1 click form
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(0), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
        text.text_eng_rule_reg();

        // Check on contains text in social network form
        navReg.registration_form('Social networks');
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(1), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
        text.text_eng_rule_reg();

        // Check on contains text in e--mail form
        navReg.registration_form('By e-mail');
        cy.get('.form-tabs > div').should(($lis) => {
            expect($lis, '3 items').to.have.length(3);
            expect($lis.eq(2), 'first item').to.have.class('form-tabs__link form-tabs__link_active');
        });
        text.text_eng_rule_reg();
    });
});