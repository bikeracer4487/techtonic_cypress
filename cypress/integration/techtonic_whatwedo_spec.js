describe('Techtonic "What We Do"', () => {
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
        allure.feature('"What We Do"')
        cy.allure().step('Navigate to Home Page')
        cy.visit('https://www.techtonic.com/')
    })

    it('Contains Correct Text', () => {
        //allureReporter.addStep('Navigate to Home Page')
        cy.allure().step('"What We Do" Menu Links"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(1)')
            .should('not.be.visible')
            .contains('Product Innovation')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(2)')
            .should('not.be.visible')
            .contains('Delivery Automation')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(3)')
            .should('not.be.visible')
            .contains('Workforce Transformation')
    })

    it('Product Innovation Link', () => {
        cy.allure().step('Click on "Product Innovation"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(1)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/solutions/product-innovation')
    })

    it('Delivery Automation Link', () => {
        cy.allure().step('Click on "Delivery Automation"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(2)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/solutions/delivery-automation')
    })

    it('Workforce Transformation Link', () => {
        cy.allure().step('Click on "Delivery Automation"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(1) > div > a:nth-child(3)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/solutions/workforce-transformation')
    })

})