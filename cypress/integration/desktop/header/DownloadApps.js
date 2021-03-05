import { navReg } from "@support/desktop/NavReg";

describe("Download apps", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });

  it("Link Telegram", () => {
    navReg.check_telegram();
  });
  it("Link VK", () => {
    navReg.check_vk();
  });
  it("check android", () => {
    navReg.check_android();
  });
  it("check ios", () => {
    navReg.check_ios();
  });
});
