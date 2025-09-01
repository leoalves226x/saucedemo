export class Login {

    LoginValido(usuario, senha) {

            cy.get('[data-test="username"]')
            .clear()
            .type(usuario)

            cy.get('[data-test="password"]')
            .clear()
            .type(senha)
            
            cy.get('form').submit()
            
            cy.get('span.title')
            .should('be.visible')
            .and('contain', 'Products')
    }

    LoginInvalido(usuario, senha) { //login invalido
            
            cy.get('[data-test="username"]')
            .clear()
            .type(usuario)

            cy.get('[data-test="password"]')
            .clear()
            .type(senha)

            cy.get('form').submit()
            
            cy.get('.error-message-container')
            .should('exist')
            .and('have.class', 'error-message-container error')
            .and('be.visible')
    }
}

export const NaTelaDeLogin = new Login()