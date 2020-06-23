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
> Coloquei dois cenarios alternativos para exemplificar outros tipos de testes que podemos automatizar.

## Visual regression

Coloquei um teste de visual regression.

A primeira vez que o teste executar ele vai salvar o screenshot como referência na pasta visual-reference.

Nas próximas execuções, caso ocorra alguma diferença de layout, será gerado uma imagem em png com a diferença. Acesse-a na pasta report-visual/visual-regression.

Nesta pasta terá 3 arquivos, imagem referência, imagem corrente e imagem diferença. Ex: Carrinho-REFERENCE, Carrinho-CURRENT, Carrinho-DIFF

## Teste de Acessibilidade

Coloquei um teste de acessibilidade. Informando qual selector voce deseja verificar e ele executa os testes baseados no WCAG e nas melhores praticas de usabilidae.

[Regras ](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)


```Javascript
return client
    .initAccessibility()
    .assert.accessibility('#sc-retail-cart-container > div', {
                          verbose: true,
                          rules: {}
                          }
                      )
```

Exemplo de report

```shell script
√ Passed [ok]: Elements must only use allowed ARIA attributes
√ Passed [ok]: ARIA role must be appropriate for the element
√ Passed [ok]: ARIA hidden element must not contain focusable elements
√ Passed [ok]: Required ARIA attributes must be provided
√ Passed [ok]: Certain ARIA roles must contain particular children
√ Passed [ok]: Certain ARIA roles must be contained by particular parents
√ Passed [ok]: ARIA roles used must conform to valid values
√ Passed [ok]: ARIA attributes must conform to valid values
√ Passed [ok]: ARIA attributes must conform to valid names
√ Passed [ok]: autocomplete attribute must be used correctly
√ Passed [ok]: Inline text spacing must be adjustable with custom stylesheets
√ Passed [ok]: Buttons must have discernible text
√ Passed [ok]: Elements must have sufficient color contrast
√ Passed [ok]: IDs of active elements must be unique
√ Passed [ok]: IDs used in ARIA and labels must be unique
√ Passed [ok]: id attribute value must be unique
√ Passed [ok]: Headings must not be empty
√ Passed [ok]: Form field should not have multiple label elements
√ Passed [ok]: Heading levels should only increase by one
√ Passed [ok]: Links with the same name have a similar purpose
√ Passed [ok]: Images must have alternate text
√ Passed [ok]: Alternative text of images should not be repeated as text
√ Passed [ok]: Input buttons must have discernible text
√ Passed [ok]: Form elements should have a visible label
√ Passed [ok]: Form elements must have labels
√ Passed [ok]: Links must have discernible text
√ Passed [ok]: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
√ Passed [ok]: <li> elements must be contained in a <ul> or <ol>
√ Passed [ok]: [role='img'] elements have an alternative text
√ Passed [ok]: Elements should not have tabindex greater than zero
Failed [ok]: (Form elements must have labels [<select name="quantity" autocomplete="off" data-a-touch-header="Quantidade" tabindex="0" class="a-native-dropdown">]) - expected "true" but got: "false"
```