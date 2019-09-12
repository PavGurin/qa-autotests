import {basicCom} from "@support/desktop/BasicCommands";
describe('Result for mobile', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it('C502624 - Result', function() {
        basicCom.result_button_for_mobile();
        basicCom.assert_result_for_mobile();
    });
});