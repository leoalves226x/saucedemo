export class Cart {

    RemoverCarrinho() {
        const itensDaTela = []
        const itensDoFixture = []

        // Coleta os itens exibidos na tela do carrinho
        cy.get('div.inventory_item_name').each(($el) => {
            itensDaTela.push($el.text())
        }).then(() => {

            // Carrega os itens esperados do fixture
            cy.fixture('productsName').then((dados) => {
                dados.forEach((item) => itensDoFixture.push(item))
                
                // Verifica se os itens são iguais
                expect(itensDaTela).to.deep.equal(itensDoFixture)
            })
        })

        // Remove o primeiro item do carrinho
        cy.get('.cart_button').first().click()

        // Verifica se a badge do carrinho está atualizada com a quantidade de itens
        cy.get('.cart_item').then(($itensRestantes) => {
            const quantidadeAtual = $itensRestantes.length

            cy.get('.shopping_cart_badge')
                .invoke('text')
                .then((textoBadge) => {
                    const quantidadeNaBadge = Number(textoBadge)
                    expect(quantidadeNaBadge).to.equal(quantidadeAtual)
                })
        })
    }
}

export const NaTelaDeCarrinho = new Cart()
