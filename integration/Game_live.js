describe('Лайв-Игры', function() {
    it('Clear Cookies', function() {
      cy.clearCookies()
    })

      it('Open home page', function() {

          cy.clearCookies()
          cy.visit('/')
          cy.screenshot()
        })

      it('Login in home page', function() {

          cy.contains('Войти').click()
          cy.screenshot()

          cy.get('input[name=login]')
          .type('testfor1win1@gmail.com')
          .should('have.value', 'testfor1win1@gmail.com')

          cy.get('input[name=password]')
          .type('123456')
          cy.screenshot()

          cy.contains('Войти').click()
          cy.wait(3000)
          cy.screenshot()



      })

      it('Play Game', function() {

            cy.contains('Live games').click()
            cy.screenshot()

            cy.wait(2000)

            cy.xpath('//div[@class="game-name"][contains(.,"LiveCasino Dealer Roulette Turkish")]').trigger('mouseover')
            cy.screenshot()

            cy.xpath('//span[contains(.,"Play")]')

            cy.wait(2000)

      })

      it('Play Game', function() {

        cy.contains('Казино').click()
        cy.screenshot()

        cy.xpath('//div[@class="game-name"][contains(.,"Jack And The Beanstalk")]')
        cy.screenshot()

      })


      it('Exit', function() {

              cy.contains('Выйти').click()
              cy.screenshot()
              cy.contains('Да').click()
      })

})
