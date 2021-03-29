import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";
import { req } from "@support/desktop/Request";

describe("Sign up in One click", () => {
  it("C1460944 - Copy login/password", () => {
    navReg.click_register();
    navReg.accept_agreement();
    navReg.sign_up();
    /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
    navReg.check_reg_result();
    navReg.copy_login_password();
    auth.check_notification();
    navReg.close_new_user_info();
  });
  it.skip("C1460946- send by mail login/password ", () => {
    navReg.click_register();
    // navReg.accept_agreement()
    navReg.sign_up();
    navReg.check_reg_result();
    navReg.button_set_email();
    req.login_pass_for_mail();
    //navReg.close_new_user_info();
  });
});
