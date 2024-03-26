export class CheckoutOverview {

    CheckoutFinish() {

        const ListaItens = []
        var ItemCount = 0;

        cy.get('body div').find('[class="cart_item"]').then(($els) => {

            ItemCount = Cypress.$($els).length; //grava quantos elementos existem

            cy.get('div.inventory_item_name').each(($els) => { //pega os itens que estão na tela e joga em um array
                ListaItens.push($els.text())
            })

            cy.get('.shopping_cart_badge').invoke('text').then(text => +text).then(value => { //compara a quantidade de elementos com a badge do carrinho
                expect(value).to.be.equal(ItemCount)
            })
        })

        cy.get('[data-test="finish"]').click() //finaliza e ve se a proxima tela é correta
        cy.get('span.title').should('contain', 'Checkout: Complete!')
        cy.get('[data-test="back-to-products"]').click()
        cy.get('span.title').should('contain', 'Products')
    }
}

export const NaTelaDeCheckoutOverview = new CheckoutOverview()