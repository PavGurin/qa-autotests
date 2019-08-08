import {auth} from "@support/desktop/Authorization";


describe('Visual regression tests - эталонные фото', () => {
    it('главная страница хэдер', () => {
        cy.wait(5000);
        cy.get('#header');
        cy.matchImageSnapshot();
    });
    it('главная страница хэдер-зареганный пользователь', () => {
        auth.login();
        cy.wait(3000);
        cy.get('#header');
        cy.matchImageSnapshot();
    });
    it('кейсы', () => {
        cy.get(':nth-child(5) > .item-text-block > .item-text')
            .trigger("mouseover");
            //.click();
        cy.wait(3000);
        cy.get('#main-container > div.content-wrapper > div > div > div.main-content')
        cy.matchImageSnapshot();
    });
});
