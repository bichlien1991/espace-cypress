// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="../support" />

const contactUsers = require("../data/contact"); // file.js

/*
1. Visit a web page: 2359
2. Click on menu: contact
3. Query for an element.
4. Interact with that element.
5. Assert about the content on the page.
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Login with data get from file.js
describe("Login with valid email", () => {
  contactUsers.forEach((user) => {
    it("Visits the 2359 website " + user.name, () => {
      cy.visit("https://www.2359.co/");
      cy.contains("contact", { matchCase: false }).click();
      cy.url().should("include", "/contact");
      cy.get("._21JZ726lSkmFzn87Xd6DVe").click();

      cy.getIframeBody().find("input[name='firstname']").type(user.name);
      cy.getIframeBody().find("input[name='email']").type(user.email);
      cy.getIframeBody()
        .find("select[name='enquiry_reason']")
        .select(user.topic)
        .should("have.value", user.topic);
    });
  });
  // Login with data get from file.csv
});
