import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";


describe("1Win TV", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close svg", { timeout: 50000 }).first()
        .click({ force: true });
    cy.contains("1win Tv").scrollIntoView()
        .click();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Page is not empty", function () {
    cy.get(".movie-carousel-list").should("not.be.empty");
    cy.get(".movie-cards-list").should("not.be.empty");
  });
  it("Search", function () {
    cy.get(".icon-search").click();
    cy.get(".search input").type("Жизнь"); //распространённое слово для названия фильма
    cy.wait(1000);
    cy.get(".movie-cards-list").should("not.be.empty");
    cy.get(".movie-name").first().contains("жизнь");

    cy.get(".search-cancel").click();
    cy.wait(1000);

  });
  it("Filters", function () {
    cy.get(".icon-filter").click();
    cy.get(".entry-field-input").eq(0).clear().type("7");
    cy.get(".entry-field-input").eq(1).clear().type("8");
    cy.get(".entry-field-input").eq(2).clear().type("1998");
    cy.get(".entry-field-input").eq(3).clear().type("2009");
    //кликаем все чекбоксы, начиная с Сериалов
    cy.document().then((doc1) => {
      const elementList = doc1.querySelectorAll(".filter-checkbox input").length;

      for (let i = 1; i <= elementList - 1; i++) {
        cy.get(".filter-checkbox input").eq(i).check({ force: true });
      }
    });
    cy.get("button.filter-find-button").click();
  });
  it("Non-registered user", function () {
    cy.get(".movie-card-list .button-movie").first().click();
    cy.get(".card .card-title").contains("Регистрация").should("exist");
    cy.get(".icon-close").click();
  });
  it("Registered user", function () {
    auth.login_for_mobile2();
    cy.wait(1000);
    cy.get(".movie-card-list .button-movie").first().click();
    cy.get("#tv-player iframe").should("exist").and("be.visible");
    cy.get(".description-tab-link").not(".active").click();
    cy.get(".description-full-text").should("not.be.empty");
    cy.get(".movie-tabs button").not(".active").click();
    cy.get("#tv-player iframe").should("exist").and("be.visible");
    cy.get("a.close-button").click();
  });
});
