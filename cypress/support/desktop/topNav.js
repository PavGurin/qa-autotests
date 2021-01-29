/**
 Top navigation on desktop version
 **/

export const topNav = {

  // invest button
  click_invest () {
    cy.contains("1win invest", { timeout: 10000 })
        .click();
  },
};
