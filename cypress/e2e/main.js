import { irPara } from "../support/page_objects/navigationPage"
import { NaTelaDeLogin } from "../support/page_objects/loginPage"
import { NaTelaDeProdutos } from "../support/page_objects/productsPage"
import { NaTelaDeCarrinho } from "../support/page_objects/cartPage"
import { NaTelaDeCheckoutInformation } from "../support/page_objects/checkoutInformationPage"
import { NaTelaDeCheckoutOverview } from "../support/page_objects/checkoutOverviewPage"

describe('Testes', () => {

    it('Testes Login', () => {
        irPara.TelaLogin() //vai até a tela de login
        NaTelaDeLogin.Login('1', '1')  //login invalido
        NaTelaDeLogin.Login('standard_user', 'secret_sauce') //login valido
    })

    it('Testes Produtos', () => {
        NaTelaDeProdutos.OrdenarProdutos() //ordena os produtos e verifica se a ordem está correta
        NaTelaDeProdutos.AdicionarProduto() //adiciona produtos e verifica se quantidade está correta
        irPara.TelaCarrinho() //vai até a tela de carrinho 
    })

    it('Testes Carrinho', () => {
        NaTelaDeCarrinho.RemoverCarrinho()  //remove um produto e verifica se a quantidade está correta
        irPara.TelaCheckoutInformation()  //vai até a tela de checkout information
    })

    it('Testes Checkout Information', () => {
        NaTelaDeCheckoutInformation.CheckoutFields() //preenche os campos e verifica se estão preenchidos
        irPara.TelaCheckoutOverview() //vai até a tela de checkout overview
    })

    it('Testes Checkout Overview', () => {
        NaTelaDeCheckoutOverview.CheckoutAssertions()//assertions
        NaTelaDeCheckoutOverview.CheckoutFinish() //finaliza o pedido
    })
})