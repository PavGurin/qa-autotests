import {auth} from "@support/desktop/Authorization";
import {shot} from "@support/desktop/Screenshots";
import {cases} from "@support/desktop/Case";
describe('Play Case', () => {
    it('C521875 - Case "Новичок"', function() {
        auth.login();
        shot.case_button();
        shot.case_classic();
        cases.choose_case();
        cases.chance_improve_10_percent();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cases.open_for_12();
        cases.chance_improve_20_percent();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cases.open_for_13();
        cases.chance_improve_30_percent();
        //проверка , что при выборе увеличителя шанса, меняется и сумма на кнопке
        cases.open_for_15();
        cases.chance_improve_30_percent();
        cases.button_open_case();
        cases.modal_container_case();
    });
    it('C521876 - Кнопка "сыграть снова" ', function() {
        auth.login();
        shot.case_button();
        shot.case_classic();
        cases.choose_case();
        cases.button_open_case();
        cases.modal_container_case();
        cases.repeat_open_case();
        cases.close_modal_container_case();
        cases.button_another_cases();
        cy.wait(1000);
        shot.screen_cases_inTest();
    });
});