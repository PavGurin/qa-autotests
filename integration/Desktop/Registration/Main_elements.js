import { navReg } from '../../../support/desktop/NavReg';
import { basecom } from '../../../support/desktop/baseCommands';
import { text } from '../../../support/desktop/text';

describe('Check all elements in modal window register', () => {
    it('C16787 - Aggree with rules in ru', () => {
        cy.visit('/');
        cy.wait(5000);

        cy.contains('Регистрация');
        navReg.click_register();

        // Check on contains text in 1 ckick form
        text.text_ru_rule_reg();

        // Check on contains text in social network form
        navReg.registration_form('Соц. сети');
        text.text_ru_rule_reg();

        // Check on contains text in e--mail form
        navReg.registration_form('По e-mail');
        text.text_ru_rule_reg();
    });

    it('C16787 - Aggree with rules in eng', () => {
        cy.visit('/');
        cy.wait(5000);
        basecom.switch_language();

        cy.contains('Registration');
        navReg.click_register();
        // Check on contains text in 1 ckick form
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

    it('C16786 - Dowload apps', () => {
        cy.visit('/');
        cy.wait(5000);

        navReg.click_register();
        // Check on contains liks on app in 1 ckick form
        navReg.application_ios();
        navReg.application_android();

        // Check on contains liks on app  in social network form
        navReg.registration_form('Соц. сети');
        navReg.application_ios();
        navReg.application_android();

        // Check on contains liks on app  in e--mail form
        navReg.registration_form('По e-mail');
        navReg.application_ios();
        navReg.application_android();
    });

    it.only('C18503 - Modal window dowload apps', () => {
        cy.visit('/');
        cy.wait(5000);

        navReg.click_register();
        // Check on contains liks on app in 1 ckick form
        navReg.application_ios_click();

        // Check button 'close'
        cy.get('.ios-instruction > .svg');

        // Check button dowloaded app
        cy.get('.ios-instruction > .ios-instruction-download');

        // Check text on detailed instructions
        cy.get('.ios-instruction > .ios-instruction-details');
    });
});
