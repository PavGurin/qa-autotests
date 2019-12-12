const available_for_broadcast_element = () => cy
    .get('.matches-block-content')
    .find('tbody > tr > a > div.match-features > div')
    .not('.disabled')
    .first()
const match_with_translation = () => cy
    .get('div.main-content', { timeout: 5000 })
    .find('td.match-details > div.match-translation')
    .prev('td.match-details > div.match-teams')
    .first()
const match_with_translation2 = () => cy
    .get('.matches-block-content').scrollIntoView({ duration: 5000 })
    .find('tbody > tr > a > div.match-features > div')
    .not('.disabled')
    .first()
    .parents()
    .first()
    //.eq(2)


export const broadcast = {
//нажать на  кнопку "нажать на кейс новичок"
  search () {
    cy.get('.matches-block-content').scrollIntoView({ duration: 5000 }, { timeout: 10000 })
    available_for_broadcast_element()
            .click({ force: true })
  },
  open () {
    cy.get('.translation-iframe', { timeout: 10000 })
            .should('exist')
  },
  play () {
    cy.get('#videoplayer > div > div.container > div.player-poster.clickable > div > svg > path')
            .click()


  },
  open_match () {
    match_with_translation2()
            .click()
  },
  close_match () {
    cy.get('#main-container > div.translation-container > div.translation-container-close')
            .click()
  },
  should_close () {
    cy.get('.translation-iframe')
            .should('not.exist')
  },
  should_exist () {
    cy.get('.translation-iframe')
            .should('exist')
  },
  moving_container () {
    cy.get('#main-container > div.translation-container > div.translation-container-drag')
            .trigger('mousedown')
  },
  moving_container2 () {
    cy.get('#main-container > div.translation-container > div.translation-container-drag',
      { timeout: 5000 })
            .trigger('mouseleave')
  },
  button_moving_exist () {
    cy.get('#main-container > div.translation-container > div.translation-container-drag')
            .should('exist')
  },
}
