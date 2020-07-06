describe('My Second Test', () => {
    before( () => {
        const allure = Cypress.Allure.reporter.getInterface()
        const today = new Date()
        const currentHour = today.getHours()
        allure.writeExecutorInfo({
            name: 'Doug Mason',
            type: 'cypress ui',
            url: 'https://www.techtonic.com',
            buildOrder: currentHour,
            buildName: 'basic',
            reportName: 'reportName'
        })
    })

    afterEach(() => {
        cy.log('End of step.')
    })
    it('Gets, types and asserts', () => {
        //allureReporter.addFeature('Home Page')
        cy.allure().step('First Step')
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type')

        cy.contains('type').click()
        
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})