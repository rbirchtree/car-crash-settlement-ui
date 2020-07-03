describe('App', () => {
    beforeEach(() => {
        cy.visit('/')
        
    })

    it('visits the app', () => {
        cy.visit('/')
        cy.get('h1')
        .should('have.text', 'Whiplash Calculator Estimate');
        cy.focused()
            .should('have.class','react-datepicker-wrapper')
    })

    it('visits the about', () => {
        cy.visit('/about')
    })

    it('visits the faq', () => {
        cy.visit('/faq')
    })

    
    

})