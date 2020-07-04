// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");

    // Clicking on the Widget Menu Item
    cy.get('#app > div > div > div.home-body > div > div:nth-child(4)').click();

    // Verify the number of items present on Widget Tab
    cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(4) > div > ul > li').should('have.length',9);
    })
})