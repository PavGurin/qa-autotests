describe('Настройки_изменить_имя', function() {
  it('adds xpath command', () => {
    expect(cy)
      .property('xpath')
      .to.be.a('function')
  })


  it('Clear Cookies', function() {
      cy.clearCookies()
})


  it('Login in home page', function() {

    cy.clearCookies()
    cy.visit('/')
    cy.contains('Войти').click()
    cy.screenshot()
    cy.get('input[name=login]').type('testfor1win1@gmail.com')
    cy.get('input[name=password]').type('123456')
    cy.screenshot()
    cy.contains('Войти').click()
    cy.wait(2000)

    cy.xpath('//span[@class="user-name text-with-arrow"]').trigger('mouseover')
    cy.screenshot()

    cy.contains('Настройки').click()
    cy.wait(1000)

    cy.xpath('(//input[@required="required"])[1]').type('{selectall}{del}').type('cote')
    cy.screenshot()


    cy.xpath('//input[@type="password"]').type('123456')
    cy.screenshot()

    cy.xpath('//button[contains(.,"Сохранить")]').click()



  })

  it('Exit', function() {

    cy.contains('Выйти').click()
    cy.screenshot()
    cy.contains('Да').click()
    })

})
