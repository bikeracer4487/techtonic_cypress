describe('Techtonic Home Page', () => {
    before( () => {
        const allure = Cypress.Allure.reporter.getInterface()
        const today = new Date()
        const currentHour = today.getHours()
        allure.writeExecutorInfo({
            name: 'Doug Mason',
            type: 'cypress ui',
            url: 'https://www.techtonic.com',
            buildOrder: currentHour,
            buildName: 'First',
            reportName: 'reportName'
        })
    })

    beforeEach( () => {
        const allure = Cypress.Allure.reporter.getInterface()
        allure.feature('Home Page')
        cy.allure().step('Navigate to Home Page')
        cy.visit('https://www.techtonic.com/')
    })

    it('Contains Correct Text', () => {
        //allureReporter.addStep('Navigate to Home Page')
        cy.allure().step('Check text in headings')
        cy.contains('Accelerated Software Delivery & Scalable Onshore Talent')
        cy.contains('CUSTOM SOFTWARE SOLUTIONS')
        cy.contains('CUSTOM SOFTWARE SERVICES')
        cy.contains('ONSHORE SOFTWARE DEVELOPERS ARE HARD TO FIND')
        cy.contains('DEVELOPING CAREERS')
    })

    it('Input Fields Function Correctly', () => {
        cy.allure().step('Check First Name field')
        cy.get('#index > section.section.tg-form-sales-container.has-background-grey-darker > div > form > fieldset > div.columns > div:nth-child(1) > div > div > input')
            .type('Doug')
            .should('have.value', 'Doug')
        
        cy.allure().step('Check Last Name Field')
        cy.get('#index > section.section.tg-form-sales-container.has-background-grey-darker > div > form > fieldset > div.columns > div:nth-child(2) > div > div > input')
            .type('Mason')
            .should('have.value', 'Mason')
        
        cy.allure().step('Check Email Field')
        cy.get('#index > section.section.tg-form-sales-container.has-background-grey-darker > div > form > fieldset > div:nth-child(4) > div > input')
            .type('testing@email.com')
            .should('have.value', 'testing@email.com')
    })

    it('"See Our Work" button functions correctly', () => {
        cy.allure().step('Check text of button')
        cy.get('#index > section.hero.is-large.tg-main-hero > section > a').contains('See Our Work')

        cy.allure().step('Click on button')
        cy.get('#index > section.hero.is-large.tg-main-hero > section > a').click()
        cy.url().should('include', '/resources/resource-center')
    })
})