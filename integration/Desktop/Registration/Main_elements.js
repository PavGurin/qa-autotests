import { navReg } from '../../../support/desktop/navReg';
import { basecom } from '../../../support/desktop/baseCommands';
import { text } from '../../../support/desktop/text';

describe('Check all elements in modal window register', () => {

it('C16787 - Aggree with rules in ru', () => {

  cy.visit('/');
  cy.wait(5000)

  cy.contains('Регистрация');
  navReg.click_register();

  //Check on contains text in 1 ckick form
  text.text_ru_rule_reg();

  //Check on contains text in social network form
  navReg.registration_form('Соц. сети');

  cy.should('have.class', 'form-tabs__link form-tabs__link_active');
  text.text_ru_rule_reg();

  //Check on contains text in e--mail form
  navReg.registration_form('По e-mail');
  cy.should('have.class', 'form-tabs__link form-tabs__link_active');
  text.text_ru_rule_reg();
});

it('C16787 - Aggree with rules in eng', () => {

  cy.visit('/');
  cy.wait(5000)
  basecom.switch_language();

  cy.contains('Registration');
  navReg.click_register();
  //Check on contains text in 1 ckick form
  text.text_eng_rule_reg();

  //Check on contains text in social network form
  navReg.registration_form('Social networks');
  cy.should('have.class', 'form-tabs__link form-tabs__link_active');
  text.text_eng_rule_reg();

  //Check on contains text in e--mail form
  navReg.registration_form('By e-mail');
  cy.should('have.class', 'form-tabs__link form-tabs__link_active');
  text.text_eng_rule_reg();

});

it('C16786 - Dowload apps', () => {

  cy.visit('/');
  cy.wait(5000)

  navReg.click_register();
  //Check on contains liks on app in 1 ckick form
  navReg.application_ios();
  navReg.application_android();

  //Check on contains liks on app  in social network form
  navReg.registration_form('Social networks');
  navReg.application_ios();
  navReg.application_android();

  //Check on contains liks on app  in e--mail form
  navReg.registration_form('By e-mail');
  navReg.application_ios();
  navReg.application_android();

});

  });
