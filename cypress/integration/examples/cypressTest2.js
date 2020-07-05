import allureReporter from '@wdio/allure-reporter'

describe('My Second Test', () => {
    it('Gets, types and asserts', () => {
        //allureReporter.addStep('Home Page')
        cy.visit('https://example.cypress.io')

        //allureReporter.addStep('Contains "type" text')
        cy.contains('type')

        //allureReporter.addStep('Click on "type"')
        cy.contains('type').click()
        
        // Should be on a new URL which includes '/commands/actions'
        //allureReporter.addStep('Correct URL')
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        //allureReporter.addStep('Email updated properly')
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})