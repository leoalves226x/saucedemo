export class NavigationPage {
    
    TelaLogin() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('div.login_logo').should('contain', 'Swag Labs')
    }

    TelaCarrinho() {
        cy.get('.shopping_cart_container').click()
        cy.get('span.title').should('contain', 'Your Cart')
    }

    TelaCheckoutInformation() {
        cy.get('[data-test="checkout"]').click()
        cy.get('span.title').should('contain', 'Checkout: Your Information')
    }

    TelaCheckoutOverview() {
        cy.get('[data-test="continue"]').click()
        cy.get('span.title').should('contain', 'Checkout: Overview')
    }
}

export const irPara = new NavigationPage()