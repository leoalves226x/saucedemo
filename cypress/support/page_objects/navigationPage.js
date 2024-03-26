export class NavigationPage {
    
    TelaLogin() { //vai a tela de login
        cy.visit('https://www.saucedemo.com/')
        cy.get('div.login_logo').should('contain', 'Swag Labs')
    }

    TelaCarrinho() { //vai a tela de carrinho
        cy.get('.shopping_cart_container').click()
        cy.get('span.title').should('contain', 'Your Cart')
    }

    TelaCheckoutInformation() { //vai a tela de checkout information
        cy.get('[data-test="checkout"]').click()
        cy.get('span.title').should('contain', 'Checkout: Your Information')
    }

    TelaCheckoutOverview() { //vai a tela de checkout overview
        cy.get('[data-test="continue"]').click()
        cy.get('span.title').should('contain', 'Checkout: Overview')
    }
}

export const irPara = new NavigationPage()