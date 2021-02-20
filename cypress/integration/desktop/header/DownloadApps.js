import { navReg } from "@support/desktop/NavReg";

describe("Download apps", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });

  it("C16308 - Link Telegram", () => {
    navReg.check_telegram();
  });
  it("C16307 - Link VK", () => {
    navReg.check_vk();
  });
  it("C16310 - check android", () => {
    navReg.check_android();
  });
  it("C18120- check ios", () => {
    navReg.check_ios();
  });
});
