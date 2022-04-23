
describe('My Test Suite1', () => {
    it('First Testcase is to load nopCommerce website and check title assertion', () => {
        cy.visit('https://videotron.com/en')
        cy.title().should('eq', 'nopCommerce demo store')
    })
    
    it('Second Testcase is to load google USA', () => {
        cy.visit('https://www.google.com/')
    })
})

