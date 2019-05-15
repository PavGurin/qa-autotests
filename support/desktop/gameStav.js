// ***********************************************
// Для кейсов и ставок.
// ***********************************************


export const gameStav = {

click_stavka_valid(){

  cy.xpath('(//span[@class="value"])[3]')
    .trigger('mouseover')
    .click();

    cy.get('input[type=number]').type('{selectall}{del}').type('1');

    cy.contains('Сделать ставку').click()

},

click_stavka_Ne_val(){

  cy.xpath('(//span[@class="value"])[3]')
    .trigger('mouseover')
    .click();

    cy.get('input[type=number]').type('{selectall}{del}').type('0');

    cy.screenshot()

    cy.contains('Сделать ставку').click()
}

}
