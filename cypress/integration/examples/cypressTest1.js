// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");

    // Clicking on the Widget Menu Item
    cy.get('#menu-top > li:nth-child(3) > a').click();

    // Verify the number of items present on Widget Tab
    cy.get('.demo-frame > ul > li').should('have.length',19);
    })
})