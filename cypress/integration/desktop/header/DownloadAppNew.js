import {navReg} from '@support/desktop/NavReg';
describe('Android app', () => {
        it('C16786 -Download', function () {
            /* Скачивание приложения*/
            navReg.application_android();
            cy.get('.level-item > .application-card-android')
                .should('have.attr', 'href').and('include', '/apk-folder/1win-master.staging.1win-prodlike.tech.apk');
            })
         });