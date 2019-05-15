// ***********************************************
// Для кейсов и ставок.
// ***********************************************


export const gameStav = {

click_stavkaval(){

  cy.xpath('(//span[@class="value"])[3]')
    .trigger('mouseover')
    .click();

    cy.get('input[type=number]').type('{selectall}{del}').type('1');

    cy.contains('Сделать ставку').click()

},



}
