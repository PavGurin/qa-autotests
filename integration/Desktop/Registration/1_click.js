import { navReg } from '../../../support/desktop/NavReg';

describe('Sign up in 1 click', () => {
    it('C16283 - 1 click with Russia country without promo code', () => {
        cy.visit('/');
        //cy.wait(5000);
        navReg.click_register();
        navReg.check_country('Russia (Россия)');
        navReg.agreement();
        navReg.sign_up();
        cy
            .get('.modal-container .user-info .user-info__content__item')
            .then(($el) => {
                const login = $el[0].lastChild.outerText;
                const password = $el[1].lastChild.outerText;

                expect(login).not.to.be.empty;
                expect(password).not.to.be.empty;

                cy.log(`Логин - ${login}, Пароль - ${password}`);
            });
    });

    it.only('C16285 - 1 click with Russia country with promo code', () => {
        cy.visit('/');
        //cy.wait(5000);
        navReg.click_register();
        navReg.agreement();
        navReg.add_promocode('autotest1');
        navReg.sign_up();
    });

    it('C16284 - 1 click with Kazakhstan country without promo code', () => {
        cy.visit('/');
        //cy.wait(5000);
        navReg.click_register();
        navReg.set_country(':nth-child(3) > .country-name');
        navReg.agreement();
        navReg.sign_up();
    });

    it('C16286 - 1 click with Barbados country with promo code', () => {
        cy.visit('/');
        //cy.wait(5000);
        navReg.click_register();
        navReg.set_country('.dropdown-content > :nth-child(18)');
        navReg.agreement();
        navReg.add_promocode('autotest1');
        navReg.sign_up();
    });
});
