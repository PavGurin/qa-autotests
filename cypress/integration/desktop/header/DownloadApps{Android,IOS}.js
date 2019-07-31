import { navReg } from '@support/desktop/NavReg';
describe('Download apps', () => {

    it('C16786 - Download android', () => {
        navReg.application_android();
    });

    it('C18503 - Download IOS(modal window)', () => {
    navReg.application_ios();
    navReg.iOS_app_assert_modal_container();
    navReg.iOS_app_instruction();
    });
});