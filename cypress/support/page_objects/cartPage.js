export class Cart {

    RemoverCarrinho() {

        var ItemCount = 0;
        const ListaItens = []
        const ListaCarrinho = []

        cy.get('div.inventory_item_name').each(($els) => { //pega os itens que estão na tela e joga em um array
            ListaItens.push($els.text())
        })

        cy.fixture('productsName').each((obj) => { //pega os itens do fixture da productsPage.js que foram gravados na tela anterior e joga em um array
            ListaCarrinho.push(obj) 
        })

        expect(ListaCarrinho).to.be.deep.equal(ListaItens) //compara se os itens adicionados anteriormente são iguais ao atuais 

        cy.get('body div').find('[class="btn btn_secondary btn_small cart_button"]').eq(0).click() //remove um item do carrinho

        cy.get('body div').find('[class="cart_item"]').then(($els) => {

            ItemCount = Cypress.$($els).length; //grava quantos elementos existem

            cy.get('.shopping_cart_badge').invoke('text').then(text => +text).then(value => { //compara a quantidade de elementos com a badge do carrinho
                expect(value).to.be.equal(ItemCount)
            })
        })
    }
}

export const NaTelaDeCarrinho = new Cart ()