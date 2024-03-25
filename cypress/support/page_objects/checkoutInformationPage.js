export class NavigationPage {

    CheckoutFields() {

        cy.get('[data-test="firstName"]').clear().type('Leonardo').should('have.value', 'Leonardo')
        cy.get('[data-test="lastName"]').clear().type('Alves').should('have.value', 'Alves')
        cy.get('[data-test="postalCode"]').clear().type('0000000').should('have.value', '0000000')
    }
}

export const NaTelaDeCheckoutInformation = new NavigationPage()