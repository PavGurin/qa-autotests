import {auth} from "@support/desktop/Authorization";
import {virtSport} from "@support/desktop/VirtSport";
import {bets} from "@support/desktop/Bets";
import {prof} from "@support/desktop/Profile";
describe('Виртуальный спорт', () => {
    it('C636749 - отображаение ставки в истории ставок', function() {
        auth.login();
        virtSport.page_virtual_sport();
        bets.bet_virtual_sport();
        prof.withdrawal('История ставок');
        const todaysDate = Cypress.moment().format('DD.MM.YYYY')
        cy.get('#main-container > main > div > div > div.panel-body > div > div:nth-child(1) > div.bet-header > div.bet-header-info.cell > div.bet-date-time.col-lg', {timeout:20000})
            .should('contain', todaysDate);
    });

});