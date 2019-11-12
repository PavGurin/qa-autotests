import { navReg } from '@support/desktop/NavReg'

describe.skip('Download apps', () => {

  it('C16786 - Download android', () => {
    navReg.check_android_download()
  })
  it.skip('C18503 - Download IOS(modal window)', () => {
    navReg.click_ios_download()
    navReg.check_ios_download_window()
    navReg.ios_modal_close()
  })
})
