const {client} = require('nightwatch-api')
const {Given, When, Then} = require('cucumber')

Given('que eu acesso a pagina do ecommerce', function () {
    let home = client.page.home()
    client.deleteCookies()
    return home.navigate()
});

Given('realizo a busca do produto {string}', function (produto) {
    let home = client.page.home()
    client.globals.produto = produto
    home.preencherBusca(produto)
    return home.buscarProduto();
});

Given('clico no produto', function () {
    let busca = client.page.busca()
    busca.pegarDadosDoProduto()
    busca.validarResultadoBusca()
    return busca.selecionarProduto();
});

Given('seleciono a quantidade {string}', function (quantidade) {
    let produto = client.page.produto()
    return produto.selecionarQuantidade(quantidade);
});

When('clicar no botao Adicionar ao carrinho', function () {
    let produto = client.page.produto()
    produto.validarBuscaEProduto()
    return produto.adicionarCarrinho();
});

When('clicar no carrinho', function () {
    let produto = client.page.produto()
    return produto.clicarCarrinho();
});

When('adicionar no carrinho', function () {
    let produto = client.page.produto()
    produto.validarBuscaEProduto()
    produto.adicionarCarrinho()
    produto.validarAdicionadoCarrinho()
    return produto.clicarCarrinho();
});

Then('devo visualizar mensagem de adicionado ao carrinho', function () {
    let produto = client.page.produto()
    return produto.validarAdicionadoCarrinho();
});

Then('devo visualizar o produto corretamente no carrinho', function () {
    let carrinho = client.page.carrinho()
    carrinho.validarProdutoCarrinho()
    return carrinho.validarPrecoCarrinho();
});

Then('devo visualizar mensagem de nenhum produto encontrado', function () {
    let busca = client.page.busca()
    return busca.validarResultadoBuscaInexistente();
});

Then('a quantidade de {string} itens corretamente', function (quantidade) {
    let carrinho = client.page.carrinho()
    return carrinho.validarQuantidade(quantidade);
});

Then('devo visualizar o {string} e {string} corretamente no carrinho', function (titulo, preco) {
let carrinho = client.page.carrinho()
return carrinho.validarInformacoesProduto(titulo, preco);
});
