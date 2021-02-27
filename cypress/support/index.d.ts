/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Get contact Iframe
       * @example
       * cy.getIframeBody()
       */
      getIframeBody(): Chainable<any>    
    }
  }