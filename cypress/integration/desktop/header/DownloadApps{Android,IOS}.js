import { navReg } from '@support/desktop/NavReg';
describe('Download apps', () => {

    it.skip('C16786 - Download android', () => {
        navReg.check_android_download();
    });
    it('C18503 - Download IOS(modal window)', () => {
    navReg.click_ios_download();
    navReg.check_ios_download_window();
    });
});
