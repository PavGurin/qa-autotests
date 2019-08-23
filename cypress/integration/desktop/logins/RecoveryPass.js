const randomStr = Math.random()
    .toString(36)
    .slice(-5);
import { auth} from "@support/desktop/Authorization";
import {req} from "@support/desktop/Request";
describe('Recovery Password', () => {
        const password = randomStr;
    it('C16304 - Recovery Password', function() {
            auth.login_without_enter();
            cy.wait(1000);
            auth.password_forget();
            auth.modal_container_password_recovery();
            auth.forget_set_email(' 1wintest@ahem.email');
            auth.password_forget_send();
            auth.change_password_disabled();
            req.code_operation();
            auth.new_password('test' + password);
            auth.change_password_visible();
            auth.new_password_modal();
            auth.new_password_text_mail();
            auth.change_password_click();
            auth.check_change_pass();
    });
    it('C16305 - Authorization with recovery password', function() {
            auth.old_password();
            auth.login_with_new_pass('test' + password);
            auth.user_info();
    });
});

