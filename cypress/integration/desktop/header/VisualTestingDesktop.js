 //const sizes = [
 //      [1024, 768],];
 // команда для пользователського размера к определенному тесту
 //cy.setResolution(size);
import {auth} from "@support/desktop/Authorization";
import {shot} from "@support/desktop/Screenshots";
 import {prof} from "@support/desktop/Profile";
describe('Visual regression tests', () => {
             //sizes.forEach((size) => {
            it('C28681 - главная страница хэдер', () => {
                cy.wait(1000);
                shot.screen_headers();
            });
            it('C28682 - купоны и ставки - незареганный пользователь', () => {
                cy.wait(1000);
                shot.screen_coupons_and_bets();
            });
            it('C28683 - главная страница хэдер-зареганный пользователь', () => {
                auth.login2();
                cy.wait(1000);
                shot.screen_headers();
            });
            it('C28684 - Кейсы - Classic', () => {
                shot.case_button();
                shot.case_classic();
                cy.wait(2000);
                shot.screen_cases();
            });
            it('C28685 - Кейсы - Memes', () => {
                shot.case_button();
                shot.case_memes();
                cy.wait(2000);
                shot.screen_cases();
            });
            it('C28686 - Казино', () => {
                shot.casino();
                cy.wait(1000);
                shot.screen_casino();
            });
            it('C28687 - История ставок', () => {
                auth.login2();
                prof.withdrawal('История ставок');
                cy.wait(1000);
                shot.screen_history_bets();
                auth.logout();
            });
             it('C28688 - Правила', () => {
                shot.rules();
                cy.get()
                 .matchImageSnapshot();
                shot.screen_rules();
            });
                it('C28689 - Бонусы и акции', () => {
                shot.bonuses();
                shot.screen_bonuses();
            });
});


