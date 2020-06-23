
const homeComandos = {
    preencherBusca(produto) {
      return this
        .waitForElementVisible('@busca', 1000)
        .setValue('@busca',produto)
    },
    buscarProduto() {
      return this
        .waitForElementVisible('@botaoBuscar', 1000)
        .click('@botaoBuscar')
    }
};

module.exports = {
    url: 'https://www.amazon.com.br/',
    commands: [homeComandos],
    elements: {
        busca: '#twotabsearchtextbox',
        botaoBuscar: '#nav-search > form > div.nav-right > div > input'
      }
};