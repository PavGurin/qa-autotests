// // / <reference types="cypress" />
//
// /**
//  * Adds XPath support to Cypress using a custom command.
//  *
//  * @see https://devhints.io/xpath
//  * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript
//  * @example
//  ```js
//  it('finds list items', () => {
//     cy.xpath('//ul[@class="todo-list"]//li')
//       .should('have.length', 3)
//   })
//  ```
//  */
// const xpath = (selector, options = {}) => {
//     /* global XPathResult */
//     const isNumber = xpathResult => xpathResult.resultType === XPathResult.NUMBER_TYPE;
//     const numberResult = xpathResult => xpathResult.numberValue;
//
//     const isString = xpathResult => xpathResult.resultType === XPathResult.STRING_TYPE;
//     const stringResult = xpathResult => xpathResult.stringValue;
//
//     const isBoolean = xpathResult => xpathResult.resultType === XPathResult.BOOLEAN_TYPE;
//     const booleanResult = xpathResult => xpathResult.booleanValue;
//
//     const isPrimitive = x =>
//         Cypress._.isNumber(x) || Cypress._.isString(x) || Cypress._.isBoolean(x);
//
//     // options to log later
//     const log = {
//         name: 'xpath',
//         message: selector
//     };
//
//     const getValue = () => {
//         const nodes = [];
//         const {document} = cy.state('window');
//         const iterator = document.evaluate(selector, document);
//
//         if (isNumber(iterator)) {
//             const result = numberResult(iterator);
//             log.consoleProps = () => ({
//                 XPath: selector,
//                 type: 'number',
//                 result
//             });
//             return result;
//         }
//
//         if (isString(iterator)) {
//             const result = stringResult(iterator);
//             log.consoleProps = () => ({
//                 XPath: selector,
//                 type: 'string',
//                 result
//             });
//             return result;
//         }
//
//         if (isBoolean(iterator)) {
//             const result = booleanResult(iterator);
//             log.consoleProps = () => ({
//                 XPath: selector,
//                 type: 'boolean',
//                 result
//             });
//             return result;
//         }
//
//         try {
//             let node = iterator.iterateNext();
//
//             while (node) {
//                 nodes.push(node);
//                 node = iterator.iterateNext();
//             }
//
//             log.consoleProps = () => ({
//                 XPath: selector
//             });
//
//             return nodes;
//         } catch (e) {
//             console.error('Document tree modified during iteration', e);
//
//             return null;
//         }
//     };
//
//     const resolveValue = () => Cypress.Promise.try(getValue)
//                                       .then(value => cy.verifyUpcomingAssertions(value, options, {
//                                           onRetry: resolveValue
//                                       }));
//
//     return resolveValue()
//         .then((value) => {
//             // TODO set found elements on the command log?
//             Cypress.log(log);
//             if (isPrimitive(value)) {
//                 return value;
//             }
//             return Cypress.$(value);
//         });
// };
//
// Cypress.Commands.add('xpath', xpath);
// // ***********************************************************
// // This example support/index.js is processed and
// // loaded automatically before your test files.
// //
// // This is a great place to put global configuration and
// // behavior that modifies Cypress.
// //
// // You can change the location of this file or turn off
// // automatically serving support files with the
// // 'supportFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/configuration
// // ***********************************************************
//
// // Import commands.js using ES2015 syntax:
// import './commands';
// import './socketLogget';
//
// // Alternatively you can use CommonJS syntax:
// // require('./commands')
// //
// // before(() => {
// //     cy.clearCookies();
// //     cy.setCookie('session-id', '', {domain: '1win-auth.com'});
// //     cy.visit('/');
// // });
//
// beforeEach(() => {
//     cy.clearCookies();
//     cy.setCookie('session-id', '', {domain: '1win-auth.com'});
//     cy.visit('/');
// });
