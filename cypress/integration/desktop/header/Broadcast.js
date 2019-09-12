import {auth} from "@support/desktop/Authorization";
import {broadcast} from "@support/desktop/Broadcast";
describe('Broadcast', () => {
    it('C16620 - Open broadcast', function() {
        auth.login();
        broadcast.search();
        broadcast.open();
    });
    it('C16622 - Open broadcast on page', function() {
        auth.login2();
        broadcast.open_match();
        broadcast.should_exist();
    });
    it('C16625 - Close broadcast', function() {
        auth.login();
        broadcast.search();
        broadcast.open();
        broadcast.close_match();
        broadcast.should_close();
    });
    it('C16626 - Move broadcast', function() {
        auth.login();
        broadcast.search();
        broadcast.open();
        broadcast.moving_container();
        broadcast.moving_container2();
        broadcast.button_moving_exist();
        //cy.get('#main-container > div.content-wrapper > div > div > div.main-content > div > div.matches-block > div.navigation > nav > ul > li:nth-child(1) > a > span');
        // cy.get('#main-container > div.translation-container > div.translation-container-drag')
        //     .trigger('dragstart');
        // cy.get('#main-container > div.translation-container > div.translation-container-drag')
        //     .trigger('drop');
    });
});
