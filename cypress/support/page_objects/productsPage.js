chai.use(require("chai-sorted"))

function OrdernarPor(type) {
    var Lista = []

    if (type == 'az') {
        cy.get('body select').select(type)
        cy.get('.inventory_item_name ').each(($els) => {
            if (!Lista.includes($els.text()))
                Lista.push($els.text())
        })
        expect(Lista).to.be.sorted({descending: false})
    }
    if (type == 'za') {
        cy.get('body select').select(type)
        cy.get('.inventory_item_name ').each(($els) => {
            if (!Lista.includes($els.text()))
                Lista.push($els.text())
        })
        expect(Lista).to.be.sorted({descending: true})
    }
    if (type == 'lohi') {
        cy.get('body select').select(type)
        cy.get('.inventory_item_price').each(($els) => {
            if (!Lista.includes($els.text()))
                Lista.push($els.text())
        })
        expect(Lista).to.be.sorted({descending: false})
    }
    if (type == 'hilo') {
        cy.get('body select').select(type)
        cy.get('.inventory_item_price').each(($els) => {
            if (!Lista.includes($els.text()))
                Lista.push($els.text())
        })
        expect(Lista).to.be.sorted({descending: true})
    }
}


export class Products {

    OrdenarProdutos() {
        OrdernarPor('az') //ordena a até z, verifica se a ordem esta correta
        OrdernarPor('za') //ordena z até a, verifica se a ordem esta correta
        OrdernarPor('lohi') //ordena menor preço para maior, verifica se a ordem esta correta
        OrdernarPor('hilo') //ordena maior preço para menor, verifica se a ordem esta correta
    }

    AdicionarProduto() { //adiciona todos os itens ao carrinho e confirma se o contador está de acordo

        const ListaItens = []
        var ItemCount = 0;
        cy.get('body div').find('[class="inventory_item"]').each(($els) => { //adiciona todos os itens ao carrinho
            cy.wrap($els).find('button', '[class="btn_primary btn_inventory"]').click()
        }).then(($els) => {
            cy.get('div.inventory_item_name').each(($els) => { //joga os itens em um array
                ListaItens.push($els.text())     
            })
            cy.writeFile('cypress/fixtures/productsName.json', ListaItens) //grava os itens do array em um json para assertion futura
            ItemCount = Cypress.$($els).length; //grava quantos elementos existem
            cy.get('.shopping_cart_badge').invoke('text').then(text => +text).then(value => { //compara a quantidade de elementos com a badge do carrinho
                expect(value).to.be.equal(ItemCount)
            })
        })
    }
}

export const NaTelaDeProdutos = new Products()