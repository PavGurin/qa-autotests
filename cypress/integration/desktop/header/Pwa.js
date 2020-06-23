import { navReg } from '@support/desktop/NavReg'

describe('Pwa', () => {

  it('C16308 - telegram', () => {
    navReg.check_telegram()
  })
  it('C16307 - Link VK', () => {
    navReg.check_vk()
  })
  it('C16310 - check android', () => {
    navReg.check_android()
  })
  it('C18120- check ios', () => {
    navReg.check_ios()
  })
})
