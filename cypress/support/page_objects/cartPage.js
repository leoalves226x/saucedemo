export class Carrinho {

    RemoverCarrinho() {

        var ItemCount = 0;
        const ListaItens = []
        const ListaCarrinho = []

        cy.get('div.inventory_item_name').each(($els) => { //pega os itens que estão 
            ListaItens.push($els.text())
        })

        cy.fixture('productsName').each((obj) => {
            ListaCarrinho.push(obj)
        })

        expect(ListaCarrinho).to.be.deep.equal(ListaItens)

        cy.get('body div').find('[class="btn btn_secondary btn_small cart_button"]').eq(0).click()

        cy.get('body div').find('[class="cart_item"]').then(($els) => {

            ItemCount = Cypress.$($els).length;

            cy.get('.shopping_cart_badge').invoke('text').then(text => +text).then(value => {
                expect(value).to.be.equal(ItemCount)
            })
        })
    }
}

export const NaTelaDeCarrinho = new Carrinho()