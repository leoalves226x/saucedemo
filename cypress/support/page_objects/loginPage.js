export class Login {

    LoginUsuario(usuario, senha) {

        if (usuario == 'standard_user' && senha == 'secret_sauce') { //login valido
            cy.get('[data-test="username"]').clear().type(usuario)
            cy.get('[data-test="password"]').clear().type(senha)
            cy.get('form').submit()
            cy.get('span.title').should('contain', 'Products')
        }
        
        else { //login inválido
            cy.get('[data-test="username"]').clear().type(usuario)
            cy.get('[data-test="password"]').clear().type(senha)
            cy.get('form').submit()
            cy.get('form div').should('have.class', 'error-message-container error')
        }
    }
}

export const NaTelaDeLogin = new Login()