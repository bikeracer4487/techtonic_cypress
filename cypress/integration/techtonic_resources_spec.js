describe('Techtonic "Resources"', () => {
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
        allure.feature('"Resources"')
        cy.allure().step('Navigate to Home Page')
        cy.visit('https://www.techtonic.com/')
    })

    it('Contains Correct Text', () => {
        //allureReporter.addStep('Navigate to Home Page')
        cy.allure().step('"What We Do" Menu Links"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(1)')
            .should('not.be.visible')
            .contains('Blog')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(2)')
            .should('not.be.visible')
            .contains('News')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(3)')
            .should('not.be.visible')
            .contains('Resource Center')
    })

    it('Blog Link', () => {
        cy.allure().step('Click on "Blog"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(1)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/resources/blog')
    })

    it('News Link', () => {
        cy.allure().step('Click on "News"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(2)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/resources/news')
    })

    it('Resource Center Link', () => {
        cy.allure().step('Click on "Resource Center"')
        cy.get('#header > nav.is-fixed-top.navbar.is-black > div.navbar-menu > div.navbar-end > div:nth-child(2) > div > a:nth-child(3)')
            .click({ force: true })
        
        cy.allure().step('Check Correct Page')
        cy.url().should('include', '/resources/resource-center')
    })

})