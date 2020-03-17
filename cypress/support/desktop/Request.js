import { navReg } from '@support/desktop/NavReg'
import { auth } from '@support/desktop/Authorization'
const randomStr = Math.random()
    .toString(36)
    .slice(-5)
let mail = randomStr
let mailId
let token
let login
let password
let regNum
let regNum2
let visits
let visits2

export const req = {
  // отправка на почту логина/пароля
  login_pass_for_mail () {
    navReg.set_email2(`${mail}@ahem.email`)
    navReg.click_send_login_pass()
    cy.get(':nth-child(1) > .user-info__content__item__value').should(($div) => {
      login = $div.text()
    })
    cy.get(':nth-child(2) > .user-info__content__item__value').should(($div) => {
      password = $div.text()
    })
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      token = (resp.body.token)
      cy.log(token)
      cy.wait(10000)
      cy.request({
        method: 'GET',
        url: `https://www.ahem.email/api/mailbox/${mail}/email`,
        form: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      })
            .then((resp) => {
              mailId = (resp.body[0].emailId)
              cy.log(mailId)
              cy.request({
                method: 'GET',
                url: `https://www.ahem.email/api/mailbox/${mail}/email/${mailId}`,
                form: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              })
            .then((resp) => {
              const text = resp.body.html

              console.log(text)
              expect(text).equal(`Login: ${login}<br>Password: ${password}\n`)
            })
            })
    })
  },
  LoginPartner (email, password, day) {
    cy.request({
      method: 'POST',
      url: 'https://1win-partner.com/api/v2/user/login',
      form: true,
      body: {
        login: email,
        password: password, // eslint-disable-line object-shorthand
        disableCaptcha: true,
      },
    })
      .then((resp) => {
        //token = (resp.day)
        //cy.log(JSON.stringify(resp.body))
        cy.request({
          method: 'GET',
          url: 'https://1win-partner.com/api/v2/stats_v2/days',
          form: true,
          body: {
            day: `${day / 1}, ${day / 1}`,
            sources: 51211,
            hashId: 61305,
          },
        })
      })
      .then((resp) => {
        regNum = (resp.body.days[0].day_regs)
        cy.log(resp.body.days[0].day_regs)
      })
      .then((resp) => {
        //token = (resp.day)
        //cy.log(JSON.stringify(resp.body))
        cy.request({
          method: 'GET',
          url: 'https://1win-partner.com/api/v2/stats_v2/days',
          form: true,
          body: {
            day: `${day / 1}, ${day / 1}`,
            sources: 51211,
            hashId: 61305,
          },
        })
      })
      .then((resp) => {
        cy.log(resp.body.days[0].day_visits)
        visits = (resp.body.days[0].day_visits)
        // cy.log(resp.body.days[0].day_visits)
        // console.log(resp.body.days[0].day_visits)
      })
  },
  VisitsPartner (email, password, day) {
    cy.request({
      method: 'POST',
      url: 'https://1win-partner.com/api/v2/user/login',
      form: true,
      body: {
        login: email,
        password: password, // eslint-disable-line object-shorthand
        disableCaptcha: true,
      },
    })
      .then((resp) => {
        //token = (resp.day)
        //cy.log(JSON.stringify(resp.body))
        cy.request({
          method: 'GET',
          url: 'https://1win-partner.com/api/v2/stats_v2/days',
          form: true,
          body: {
            day: `${day / 1}, ${day / 1}`,
            sources: 51211,
            hashId: 61305,
          },
        })
      })
      .then((resp) => {
        visits = (resp.body.days[0].day_visits)
        cy.log(resp.body.days[0].day_visits)
      })
  },
  CheckStats (day) {
    cy.request({
      method: 'GET',
      url: 'https://1win-partner.com/api/v2/stats_v2/days',
      form: true,
      body: {
        day: `${day / 1}, ${day / 1}`,
        sources: 51211,
        hashId: 61305,
      },
    })
      .then((resp) => {
        regNum2 = (resp.body.days[0].day_regs)
        console.log(resp.body.days[0].day_regs)
        cy.log(JSON.stringify(resp.body.days[0].day_regs))
        expect(regNum2 - regNum).to.equal(1)
      })
  },

  CheckVisits (day) {
    cy.request({
      method: 'GET',
      url: 'https://1win-partner.com/api/v2/stats_v2/days',
      form: true,
      body: {
        day: `${day / 1}, ${day / 1}`,
        sources: 51211,
        hashId: 61305,
      },
    })
      .then((resp) => {
        visits2 = (resp.body.days[0].day_visits)
        console.log(resp.body.days[0].day_visits)
        cy.log(JSON.stringify(resp.body.days[0].day_visits))
        expect(visits2 - visits).to.equal(1)
      })
  },
  // отправка на почту логина/пароля моб.версия
  login_pass_for_mail_for_mobile () {
    navReg.set_email_for_mobile(`${mail}@ahem.email`)
    auth.check_notification_set_login_email_for_mobile()
    cy.get('.success-reg-modal-columns > :nth-child(1)').should(($div) => {
      login = $div.text()
    })
    cy.get('.success-reg-modal-columns > :nth-child(2)').should(($div) => {
      password = $div.text()
    })
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
            .then((resp) => {
              token = (resp.body.token)
              console.log(token)
              cy.wait(5000)
              cy.request({
                method: 'GET',
                url: `https://www.ahem.email/api/mailbox/${mail}/email`,
                form: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              })
                    .then((resp) => {
                      mailId = (resp.body[0].emailId)
                      console.log(mailId)
                      cy.request({
                        method: 'GET',
                        url: `https://www.ahem.email/api/mailbox/${mail}/email/${mailId}`,
                        form: true,
                        headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: 'application/json',
                        },
                      })
                            .then((resp) => {
                              const text = resp.body.html

                              console.log(text)
                              const login = text.match(/Login: (.*@1win.xyz).*/)[1]
                              const password = text.match(/Password: (.*).*/)[1]

                              expect(text).equal(`Login: ${login}<br>Password: ${password}\n`)
                            })
                    })
            })
  },
  // Восстановление пароля - получение кода операции
  code_operation () {
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
            .then((resp) => {
              token = (resp.body.token)
              console.log(token)
              cy.wait(4000)
              cy.request({
                method: 'GET',
                url: 'https://www.ahem.email/api/mailbox/1wintest/email',
                form: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              })
                    .then((resp) => {
                      mailId = (resp.body[0].emailId)
                      console.log(mailId)
                      cy.request({
                        method: 'GET',
                        url: `https://www.ahem.email/api/mailbox/1wintest/email/${mailId}`,
                        form: true,
                        headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: 'application/json',
                        },
                      })
                            .then((resp) => {
                              const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0]

                              cy.get('div:nth-child(2) > div > div > input')
                                    .type(code)
                            })
                    })
            })
  },
  // Восстановление пароля - получение кода операции
  code_transfer () {
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
            .then((resp) => {
              token = (resp.body.token)
              console.log(token)
              cy.wait(4000)
              cy.request({
                method: 'GET',
                url: 'https://www.ahem.email/api/mailbox/1wintesttransfer/email',
                form: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              })
                    .then((resp) => {
                      mailId = (resp.body[0].emailId)
                      console.log(mailId)
                      cy.request({
                        method: 'GET',
                        url: `https://www.ahem.email/api/mailbox/1wintesttransfer/email/${mailId}`,
                        form: true,
                        headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: 'application/json',
                        },
                      })
                            .then((resp) => {
                              const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0]

                              cy.get('div:nth-child(2) > div > div > input')
                                    .type(code)
                            })
                    })
            })
  },
  // Восстановление пароля - получение кода операции
  code_transfer2 () {
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
            .then((resp) => {
              token = (resp.body.token)
              console.log(token)
              cy.wait(4000)
              cy.request({
                method: 'GET',
                url: 'https://www.ahem.email/api/mailbox/1wintest123/email',
                form: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              })
                    .then((resp) => {
                      mailId = (resp.body[0].emailId)
                      console.log(mailId)
                      cy.request({
                        method: 'GET',
                        url: `https://www.ahem.email/api/mailbox/1wintest123/email/${mailId}`,
                        form: true,
                        headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: 'application/json',
                        },
                      })
                            .then((resp) => {
                              const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0]

                              cy.get('div:nth-child(2) > div > div > input')
                                    .type(code)
                            })
                    })
            })
  },
  // Восстановление пароля - получение кода операции
  code_transfer_for_mobile () {
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        token = (resp.body.token)
        console.log(token)
        cy.wait(4000)
        cy.request({
          method: 'GET',
          url: 'https://www.ahem.email/api/mailbox/1wintesttransfer/email',
          form: true,
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
          .then((resp) => {
            mailId = (resp.body[0].emailId)
            console.log(mailId)
            cy.request({
              method: 'GET',
              url: `https://www.ahem.email/api/mailbox/1wintesttransfer/email/${mailId}`,
              form: true,
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
              },
            })
              .then((resp) => {
                const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0]

                cy.get('.input')
                  .type(code)
              })
          })
      })
  },
  // Восстановление пароля - получение кода операции
  code_transfer_for_mobile2 () {
    cy.request({
      method: 'POST',
      url: 'https://www.ahem.email/api/auth/token',
      form: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        token = (resp.body.token)
        console.log(token)
        cy.wait(4000)
        cy.request({
          method: 'GET',
          url: 'https://www.ahem.email/api/mailbox/1wintest123/email',
          form: true,
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
          .then((resp) => {
            mailId = (resp.body[0].emailId)
            console.log(mailId)
            cy.request({
              method: 'GET',
              url: `https://www.ahem.email/api/mailbox/1wintest123/email/${mailId}`,
              form: true,
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
              },
            })
              .then((resp) => {
                const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0]

                cy.get('.input')
                  .type(code)
              })
          })
      })
  },
}


