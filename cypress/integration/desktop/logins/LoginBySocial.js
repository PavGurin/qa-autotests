import { auth } from "@support/desktop/Authorization";
import { navReg } from "@support/desktop/NavReg";

describe.skip("Авторизация по social", () => {

  it("C16301 - Авторизация по vk", () => {
    auth.click_auth();
    auth.modal_container_enter();
    auth.vk_social_button();
    //navReg.check_vk_reg()
    auth.logout();
  });
});
