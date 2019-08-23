import {auth} from "@support/desktop/Authorization";
import {navReg} from "@support/desktop/NavReg";

describe('Авторизация по social', () => {

    it('C16300 - Авторизация по vk', () => {
        auth.click_auth();
        auth.modal_container_enter();
        auth.vk_social_button();
        //navReg.check_vk_reg()
        cy.screenshot();
        auth.logout();
    });
});