# Desafio ZUP
Utilizando as ferramentas que preferir crie um teste automatizado que faça o fluxo de ponta
a ponta de um cliente que:
- Entre em um grande portal de comércio online
(Exemplo: Americanas, Submarino, Magazine Luiza)
- Faça uma busca por um produto
- Valide o retorno da busca
- Escolha um produto na lista
- Adicione o carrinho
- Valide o produto no carrinho

## Sumário

* [Setup](#setup)
* [Passo a passo](#passo-a-passo)
* [Visual regression](#visual-regression)

## Setup

Chromedriver

- Precisa realizar o download do Chromedriver. Caso não tenha o Chromedriver. No projeto estou usando o 83.0.0
> Caso precise alterar deverá ser alterado a versão em package.json 
 
## Passo a passo

1. Clone o projeto
2. Abra o projeto no seu IDE, no terminal, execute o comando abaixo para instalar as dependências:
```shell script
npm install
```
3. Para realizar a execução dos testes execute o comando
```shell script
npm test
```
Após a execução do teste, será gerado um reporte em html. O caminho é indicado no console. Se preferir, acesse-o na pasta report/cucumber_report.html

Caso queira executar cenários específicos, você pode executar cenários passando a tag do cenário.
Ex: Se quiser executar somente o cenário com a tag

```gherkin
@1item
Cenario: Validar corretamente o carrinho com 1 item
```
Execute o comando abaixo:
```shell script
npm test -- --tags @1item
``` 
## Visual regression

Coloquei um teste de visual regression.

A primeira vez que o teste executar ele vai salvar o screenshot como referência na pasta visual-reference.

Nas próximas execuções, caso ocorra alguma diferença de layout, será gerado uma imagem em png com a diferença. Acesse-a na pasta report-visual/visual-regression.

Nesta pasta terá 3 arquivos, imagem referência, imagem corrente e imagem diferença. Ex: Carrinho-REFERENCE, Carrinho-CURRENT, Carrinho-DIFF