import {basicCom} from "@support/desktop/BasicCommands";
describe('Result', () => {
    it('C502625 - Result', function() {
        basicCom.result_button();
        basicCom.assert_result();
    });
});