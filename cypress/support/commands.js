import 'cypress-layout-inspector/add-support';
import './firebase'

Cypress.Commands.add("getCypressElement", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getCypressElementLike", (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args);
});