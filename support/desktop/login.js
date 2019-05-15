// ***********************************************
// Логин
// ***********************************************

export const login = {


log_ins(){
          cy.contains('Войти').click();

          cy.get('input[name=login]')
              .type('nogm75@1win.xyz')
              .should('have.value', 'nogm75@1win.xyz');

          cy.get('input[name=password]')
              .type('123456');

          cy.contains('Войти').click();


          cy.contains('cote');
          cy.wait(5000)
  },


}
