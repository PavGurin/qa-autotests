describe('Лутбоксы_10р_20р', function() {


  it('Clear Cookies', function() {
      cy.clearCookies()
})


  it('Login in home page', function() {
    cy.clearCookies()
    cy.visit('/')
    cy.contains('Войти').click()
    cy.get('input[name=login]').type('testfor1win1@gmail.com')
    cy.get('input[name=password]').type('123456')
    cy.contains('Войти').click()
    cy.wait(5000)
    cy.screenshot()
    cy.wait(1000)
  })

  it('Лутбокс 20р', function() {
    cy.contains('Кейсы').click()

    cy.wait(3000)
    cy.screenshot()

    cy.xpath('//h2[contains(.,"Везунчик")]').click()

    cy.wait(1000)

    cy.xpath('//button[contains(.,"Открыть за  20 ₽")]').click()

    cy.wait(10000)

    cy.xpath('//span[contains(.,"Пробовать снова")]')

    cy.wait(2000)
    cy.screenshot()
    cy.reload()

  })

  it('Exit', function() {
    cy.contains('Выйти').click()
    cy.screenshot()
    cy.contains('Да').click()
    })
})
