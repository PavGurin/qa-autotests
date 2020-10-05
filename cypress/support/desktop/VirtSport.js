

export const virtSport = {
  // Переход на страницу виртуальный спорт
  page_virtual_sport () {
    cy.get(":nth-child(9) > .item-text-block > .item-text")
            .click();
  },

};
