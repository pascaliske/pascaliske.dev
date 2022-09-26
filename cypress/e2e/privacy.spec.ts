/// <reference types="Cypress" />

context('Privacy', () => {
    beforeEach(() => {
        //
    })

    it('successfully loads privacy', () => {
        cy.visit('/privacy')
    })
})
