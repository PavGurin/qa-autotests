import "cypress-file-upload";
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
import { addStreamCommands } from "@lensesio/cypress-websocket-testing";

addStreamCommands();
addMatchImageSnapshotCommand({
  failureThreshold: 10.0,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 10.0 },
  capture: "viewport",
});

Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }

});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("presudoHover", { prevSubject: true }, (subject) => {
  subject[0].childNodes.forEach((child) => {
    if (child.tagName) {
      const { display } = window.getComputedStyle(child);

      if (display === "none") child.style.display = "flex";
    }
  });

  return subject;
});
