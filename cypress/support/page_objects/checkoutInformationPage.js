export class CheckoutInformation {

    ChecarCampos() { //insere dados e verifica se os campos estão com os dados digitados

        cy.get('[data-test="firstName"]').clear().type('Leonardo').should('have.value', 'Leonardo')
        cy.get('[data-test="lastName"]').clear().type('Alves').should('have.value', 'Alves')
        cy.get('[data-test="postalCode"]').clear().type('0000000').should('have.value', '0000000')

        cy.get('[data-test="continue"]').click() // vai para a proxima tela
        cy.get('span.title').should('contain', 'Checkout: Overview')
    }
}

export const NaTelaDeCheckoutInformation = new CheckoutInformation ()