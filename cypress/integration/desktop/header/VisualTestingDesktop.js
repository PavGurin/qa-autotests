 //const sizes = [
 //      [1024, 768],
//];
 // команда для пользователського размера к определенному тесту
 //cy.setResolution(size);
import {auth} from "@support/desktop/Authorization";
import {shot} from "@support/desktop/Screenshots";
 import {prof} from "@support/desktop/Profile";
describe('Visual regression tests', () => {
             //sizes.forEach((size) => {
            it('главная страница хэдер', () => {
                cy.wait(5000);
                shot.screen_headers();
            });
            it('главная страница хэдер-зареганный пользователь', () => {
                auth.login();
                cy.wait(1000);
                shot.screen_headers();
            });
            it('Кейсы - Classic', () => {
                shot.case_button();
                shot.case_classic();
                cy.wait(3000);
                shot.screen_cases();
            });
            it('Кейсы - Memes', () => {
                shot.case_button();
                shot.case_memes();
                cy.wait(3000);
                shot.screen_cases();
            });
            it('Казино', () => {
                shot.casino();
                cy.wait(1000);
                shot.screen_casino();
            });
            it('История ставок', () => {
                auth.login2();
                prof.withdrawal('История ставок');
                cy.wait(1000);
                shot.screen_history_bets();
            });
             it('купоны и ставки - незареганный пользователь', () => {
                cy.wait(2000);
                shot.screen_coupons_and_bets();
            });
             it('Правила', () => {
                shot.rules();
                cy.wait(4000);
                shot.screen_rules();
            });
                it('Бонусы и акции', () => {
                shot.bonuses();
                cy.wait(5000);
                shot.screen_bonuses();
            });
});


