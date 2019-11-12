import { auth } from '@support/desktop/Authorization'
import { prof } from '@support/desktop/Profile'

// Данный тест пока не готов
describe('Verificy', () => {
  it('C674173 - Верификация', function () {
    auth.login_mail()
    prof.withdrawal('Верификация')
    cy.get('#app-overlay-wrapper > div > div > div.verification-modal-pages.isLoaded > div > button')
            .click()
    const fileName = '123.jpeg'

    cy.fixture(fileName).then((fileContent) => {
      cy.get(':nth-child(1) > .image-select-wrapper > .button')
                .last()
                .upload({ fileContent, fileName, mimeType: 'image/jpeg' }, { subjectType: 'drag-n-drop' })
      cy.wait(2000)
      cy.get(':nth-child(1) > .image-select-wrapper > .button').contains(fileName)
    })

  })
})
