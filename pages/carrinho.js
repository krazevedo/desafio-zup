const {client} = require('nightwatch-api')
const carrinhoComandos = {
    validarProdutoCarrinho() {
      return this
        .waitForElementVisible('@titulo', 1000)
        .assert.containsText('@titulo', client.globals.tituloBusca)
    },
    validarPrecoCarrinho() {
      return this
        .waitForElementVisible('@preco', 1000)
        .assert.containsText('@preco', client.globals.preco)
    },
    validarInformacoesProduto(titulo, preco){
    return this
        .waitForElementVisible('@titulo', 1000)
        .assert.containsText('@titulo', titulo)
        .assert.containsText('@preco', preco)
    },
    validarQuantidade(quantidade){
     this
        .waitForElementVisible('@qtdCombobox', 1000)
        .assert.containsText('@qtdCombobox', quantidade)
        if (quantidade == "1") {
            this.assert.containsText('@qtdSubtotal', "Subtotal (1 item)")
        } else {
            this.assert.containsText('@qtdSubtotal', "Subtotal (" + quantidade + " itens)")
        }
    return
    },
     validarValoresCarrinho(){
     return this
        .assert.containsText('@preco', client.globals.preco)
        .assert.containsText('@subtotal', client.globals.preco)
        .assert.containsText('@subtotalBox', client.globals.preco)
     }
};

module.exports = {
    url: 'https://www.amazon.com.br/',
    commands: [carrinhoComandos],
    elements: {
        titulo: 'div > div > div > div > div > div > div > ul > li:nth-child(1) > span > a > span',
        preco: 'div > div > div > div.sc-item-right-col > p > span',
        qtdCombobox: '#a-autoid-0-announce > span.a-dropdown-prompt',
        qtdSubtotal: '#sc-subtotal-label-activecart',
        importacao: '#importer-status-imported h2',
        subtotal: '#sc-subtotal-amount-activecart > span',
        subtotalBox: '#sc-subtotal-amount-buybox > span'
      }
};