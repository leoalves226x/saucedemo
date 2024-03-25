export class CheckoutOverview {

    CheckoutAssertions() {

        const ListaItens = []
        var ItemCount = 0;

        cy.get('body div').find('[class="cart_item"]').then(($els) => {

            ItemCount = Cypress.$($els).length;
            cy.get('div.inventory_item_name').each(($els) => {
                ListaItens.push($els.text())
            })

            cy.get('.shopping_cart_badge').invoke('text').then(text => +text).then(value => {
                expect(value).to.be.equal(ItemCount)
            })
        })
    }

    CheckoutFinish() {

        cy.get('[data-test="finish"]').click()
        cy.get('span.title').should('contain', 'Checkout: Complete!')
        cy.get('[data-test="back-to-products"]').click()
        cy.get('span.title').should('contain', 'Products')
    }
}

export const NaTelaDeCheckoutOverview = new CheckoutOverview()