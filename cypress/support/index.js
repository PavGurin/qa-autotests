beforeEach(function () {
  cy.log('I run before every test in every spec file!!!!!!')
  cy.clearCookies()
  // //     cy.setCookie('session-id', '', {domain: '1win-auth.com'});
  cy.visit('')
})
