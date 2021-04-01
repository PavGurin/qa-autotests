import { auth } from "@support/desktop/Authorization";


describe("1Win TV", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.contains("Ещё", { timeout: 10000 })
        .trigger("mouseover");
    cy.get(".dropdown-menu [href=\"/tv\"]")
        .click();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Page is not empty", function () {
    cy.get(".movie-carousel-list").should("not.be.empty");
    cy.get(".movie-cards-list").should("not.be.empty");
    cy.get("main .title")
        .invoke("text").then((numb) => {
      let count = numb.split(":").map((str) => parseInt(str.replace(/\D/g, "")))[1];

      expect(count).to.be.greaterThan(4000); //счётчик фильм больше 4000к
    });
  });
  it("Search", function () {
    cy.get(".tv-search input").type("Жизнь"); //распространённое слово для названия фильма
    cy.get("button.tv-search-button").click();
    cy.wait(1000);
    cy.get(".movie-cards-list").should("not.be.empty");
    cy.get(".movie-name").first().contains("жизнь");

    cy.get("button.tv-search-button.clear").click();

  });
  it("Sorting", function () {
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
  it("Filters", function () {
    for (let i = 0; i <= 3; i++) {
      cy.get(".sorting-menu .menu-item").eq(i).click();
      cy.get(".movie-cards-list").should("not.be.empty");
    }
  });
  it("Non-registered user", function () {
    cy.get(".movie-card-item a.button").first().click();
    cy.get(".modal-content__header").contains("Регистрация").should("exist");
    cy.get(".register-button-submit").should("exist");
    cy.get("svg[class*=\"icon-close\"]").click();
  });
  it("Registered user", function () {
    auth.login();
    cy.get(".movie-card-item a.button").first().click();
    cy.get("#tv-player iframe").should("exist").and("be.visible");
    cy.get(".description-tab-link").not(".active").click();
    cy.get(".description-full-text").should("not.be.empty");
    cy.get(".button-group-item").not(".active").click();
    cy.wait(1000);
    cy.get("#tv-player iframe").should("exist").and("be.visible");
    cy.get("a.close-button").click();
  });
});