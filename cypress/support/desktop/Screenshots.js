export const shot = {

    screen_headers() {
        cy.get('#header')
            .matchImageSnapshot();
    },
    case_button() {
        cy.get(':nth-child(5) > .item-text-block > .item-text')
            .trigger("mouseover");
    },
    case_classic() {
        cy.get('.navigation-item-menu > :nth-child(1)')
            .click();
    },
    case_memes() {
        cy.get('.navigation-item-menu > :nth-child(2)')
            .click();
    },
    screen_cases() {
        cy.get('#main-container > div.content-wrapper > div > div > div.main-content')
            .matchImageSnapshot();
    },
    casino() {
        cy.get(':nth-child(6) > .item-text-block > .item-text')
            .click();
    },
    screen_casino() {
        cy.get('#main-container > div.content-wrapper > div > section > div > aside')
            .matchImageSnapshot();
    },
     screen_footer() {
        cy.get('#main-container > div.content-wrapper > div > div > div.main-content')
            .scrollTo('bottom',{ duration: 10000 });
        cy.get('#footer > div.license')
            .matchImageSnapshot();
    },
    rules() {
        cy.get('#footer > div:nth-child(1) > nav > ul > li:nth-child(1) > a')
            .click();
    },
    screen_rules() {
        cy.get('body')
            .matchImageSnapshot();
    },
    bonuses() {
        cy.get('#footer > div:nth-child(1) > nav > ul > li:nth-child(4) > a')
            .click();
    },
    screen_bonuses() {
        cy.get('body')
            .matchImageSnapshot();
    },
    screen_history_bets() {
        cy.get('#main-container > div.content-wrapper > div > div')
            .matchImageSnapshot();
    },
    screen_coupons_and_bets() {
        cy.get('#main-container > div.content-wrapper > div > div > div.aside.aside-right > div.coupon-block.panel')
            .matchImageSnapshot();
    },
};
