const {client} = require('nightwatch-api')
const produtoComandos = {
    adicionarCarrinho() {
      return this
        .waitForElementPresent('@botaoCarrinho', 6000)
        .click('@botaoCarrinho')
    },
    selecionarQuantidade(quantidade) {
      return this
        .waitForElementPresent('@comboQtd', 6000)
        .click('@comboQtd')
        .waitForElementVisible('@optionQtd', 6000)
        .click({selector:'@optionQtd', index:quantidade-1})
    },
    validarBuscaEProduto() {
    return this
        .assert.containsText('@titulo', client.globals.tituloBusca)
    },
    validarAdicionadoCarrinho(){
    return this
        .waitForElementPresent('@boxCarrinho', 6000)
        .assert.containsText('@boxCarrinho', "Adicionado ao carrinho")
    },
    clicarCarrinho(){
    return this
        .waitForElementPresent('@botaoBoxCarrinho', 6000)
        .click('@botaoBoxCarrinho')
    }

};

module.exports = {
    url: 'https://www.amazon.com.br/',
    commands: [produtoComandos],
    elements: {
        titulo: '#productTitle',
        preco: '#priceblock_ourprice',
        comboQtd: '#quantity',
        optionQtd: {
                 selector: '#quantity option',
                 index: 0
               } ,
        botaoCarrinho: '#add-to-cart-button',
        boxCarrinho: '#huc-v2-order-row-confirm-text > h1',
        botaoBoxCarrinho: '#hlb-view-cart-announce'
      }
};