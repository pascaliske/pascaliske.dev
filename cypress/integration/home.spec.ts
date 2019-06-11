/// <reference types="Cypress" />

context('Home', () => {
    beforeEach(() => {
        //
    })

    it('successfully loads home', () => {
        cy.visit('/home')
    })
})
