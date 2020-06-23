const {client} = require('nightwatch-api')
const buscaComandos = {
    selecionarProduto() {
      return this
        .waitForElementPresent('@produto', 12000)
        .click('@produto')
    },
    pegarDadosDoProduto() {
    this.waitForElementPresent('@tituloProduto', 6000)
    client
        .getText('div.s-search-results * span.a-price', function(result){
           length = result.value.replace(/\n/g, '').length
           text = result.value.replace(/\n/g, '');
           client.globals.preco = [text.slice(0, length-2), ",", text.slice(length-2)].join('');
        })
        .getText('div.s-search-results * div h2 a span', function(result){
          client.globals.tituloBusca = result.value
        })
    return
    },
    validarResultadoBusca() {
    return this
        .assert.containsText('@tituloProduto', client.globals.produto)
    },
    validarResultadoBuscaInexistente() {
    return this
        .assert.containsText('@boxMensagem', "Nenhum resultado para " + client.globals.produto + ".")
    }
};

module.exports = {
    url: 'https://www.amazon.com.br/',
    commands: [buscaComandos],
    elements: {
        produto: 'div.s-search-results * span.rush-component > a',
        tituloProduto: 'div.s-search-results * h2 a span',
        precoProduto: 'div.s-search-results * span.a-price',
        boxMensagem: 'div.s-search-results div > span > div > div > div:nth-child(1)'
    }
};