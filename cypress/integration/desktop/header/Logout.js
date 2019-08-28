import {auth} from '@support/desktop/Authorization';

describe.skip('Выход', () => {

    it('C18768 - Выход', () => {
        auth.login();
        auth.logout();
    });
});
