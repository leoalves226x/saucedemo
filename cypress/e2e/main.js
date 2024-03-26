import { irPara } from "../support/page_objects/navigationPage"
import { NaTelaDeLogin } from "../support/page_objects/loginPage"
import { NaTelaDeProdutos } from "../support/page_objects/productsPage"
import { NaTelaDeCarrinho } from "../support/page_objects/cartPage"
import { NaTelaDeCheckoutInformation } from "../support/page_objects/checkoutInformationPage"
import { NaTelaDeCheckoutOverview } from "../support/page_objects/checkoutOverviewPage"

describe('Testes', () => {

    before ('Login', () =>{
        irPara.TelaLogin() //vai até o endereço do website
    })

    it('Testes Login', () => {
        NaTelaDeLogin.LoginUsuario('1', '1')  //CT001.001-Login com usuário ou senha inválido
        NaTelaDeLogin.LoginUsuario('standard_user', 'secret_sauce') //CT001.002-Login com usuário e senha válidos
    })

    it('Testes Produtos', () => {
        NaTelaDeProdutos.OrdenarProdutos() //CT002.001-Ordenar produtos
        NaTelaDeProdutos.AdicionarProduto() //CT002.002-Adicionar produtos ao carrinho
        irPara.TelaCarrinho() //CT002.003-Ir para tela do carrinho
    })

    it('Testes Carrinho', () => {
        NaTelaDeCarrinho.RemoverCarrinho()  //CT003.001-Remover produtos do carrinho
        irPara.TelaCheckoutInformation()  //CT003.002-Ir para Checkout
    })

    it('Testes Checkout Information', () => {
        NaTelaDeCheckoutInformation.ChecarCampos() //CT004.001-Continuar
    })

    it('Testes Checkout Overview', () => {
        NaTelaDeCheckoutOverview.CheckoutFinish() //CT004.002-Finalizar compra
    })
})