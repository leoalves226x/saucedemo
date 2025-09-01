import { irPara } from "../support/page_objects/navigationPage"
import { NaTelaDeLogin } from "../support/page_objects/loginPage"
import { NaTelaDeProdutos } from "../support/page_objects/productsPage"
import { NaTelaDeCarrinho } from "../support/page_objects/cartPage"
import { NaTelaDeCheckoutInformation } from "../support/page_objects/checkoutInformationPage"
import { NaTelaDeCheckoutOverview } from "../support/page_objects/checkoutOverviewPage"

describe('CT001 - Funcionalidade de Login', () => {

    beforeEach(() => {
        irPara.TelaLogin()
    })

    it('CT001.001 - Login com usuário ou senha inválido', () => {
        NaTelaDeLogin.LoginInvalido('1', '1')
    })

    it('CT001.002 - Login com usuário e senha válidos', () => {
        NaTelaDeLogin.LoginValido('standard_user', 'secret_sauce')
    })
})

describe('CT002 - Funcionalidade de Produtos', () => {

    beforeEach(() => {
        irPara.TelaLogin()
        NaTelaDeLogin.LoginValido('standard_user', 'secret_sauce')
    })

    it('CT002.001 - Ordenar produtos', () => {
        NaTelaDeProdutos.OrdenarProdutos()
    })

    it('CT002.002 - Adicionar produto ao carrinho', () => {
        NaTelaDeProdutos.AdicionarProduto()
    })

    it('CT002.003 - Ir para tela do carrinho', () => {
        irPara.TelaCarrinho()
    })
})

describe('CT003 - Funcionalidade de Carrinho', () => {

    beforeEach(() => {
        irPara.TelaLogin()
        NaTelaDeLogin.LoginValido('standard_user', 'secret_sauce')
        NaTelaDeProdutos.AdicionarProduto()
        irPara.TelaCarrinho()
    })

    it('CT003.001 - Remover produto do carrinho', () => {
        NaTelaDeCarrinho.RemoverCarrinho()
    })

    it('CT003.002 - Ir para tela de Checkout', () => {
        irPara.TelaCheckoutInformation()
    })
})

describe('CT004 - Funcionalidade de Checkout', () => {

    beforeEach(() => {
        irPara.TelaLogin()
        NaTelaDeLogin.LoginValido('standard_user', 'secret_sauce')
        NaTelaDeProdutos.AdicionarProduto()
        irPara.TelaCarrinho()
        irPara.TelaCheckoutInformation()
    })

    it('CT004.001 - Preencher campos e continuar', () => {
        NaTelaDeCheckoutInformation.ChecarCampos()
    })

    it('CT004.002 - Finalizar compra', () => {
        NaTelaDeCheckoutInformation.ChecarCampos()
        NaTelaDeCheckoutOverview.CheckoutFinish()
    })
})
