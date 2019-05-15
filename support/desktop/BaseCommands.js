export const basecom = {

  // switch language
  switch_language(){

    cy.get('.button > .image').trigger('mouseover')
    cy.get('.dropdown-item > .image').click();

  },

  //Logout
  logout(){

  cy.screenshot()
    .get('button.button.ttn.header-button.secondary')
    .click();
  cy.get('.cancel-button')
    .click();
},
}
