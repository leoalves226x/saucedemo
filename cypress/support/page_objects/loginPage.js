export class Login {

    Login(usuario, senha) {

        if (usuario == 'standard_user' && senha == 'secret_sauce') {
            cy.get('[data-test="username"]').clear().type(usuario)
            cy.get('[data-test="password"]').clear().type(senha)
            cy.get('form').submit()
            cy.get('span.title').should('contain', 'Products')
        }
        
        else {
            cy.get('[data-test="username"]').clear().type(usuario)
            cy.get('[data-test="password"]').clear().type(senha)
            cy.get('form').submit()
            cy.get('form div').should('have.class', 'error-message-container error')
        }
    }
}

export const NaTelaDeLogin = new Login()