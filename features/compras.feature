#language:pt

Funcionalidade: : Realizar compras em um site ecommerce e valida-las no carrinho

Eu quero validar meu carrinho de compras e verificar se os itens adiconados ao carrinho estao corretos.

  @1item
  Cenario: Validar corretamente o carrinho com 1 item

    Dado que eu acesso a pagina do ecommerce
    E realizo a busca do produto "Nintendo Switch Lite"
    E clico no produto
    Quando clicar no botao Adicionar ao carrinho
    Então devo visualizar mensagem de adicionado ao carrinho
    Quando clicar no carrinho
    Então devo visualizar o produto corretamente no carrinho
    E a quantidade de "1" itens corretamente

  @2itens
  Cenario: Validar corretamente o carrinho com 2 itens

    Dado que eu acesso a pagina do ecommerce
    E realizo a busca do produto "Nintendo Switch Lite"
    E clico no produto
    E seleciono a quantidade "2"
    Quando clicar no botao Adicionar ao carrinho
    Então devo visualizar mensagem de adicionado ao carrinho
    Quando clicar no carrinho
    Então devo visualizar o produto corretamente no carrinho
    E a quantidade de "2" itens corretamente

  @outline
  Esquema do Cenario: Validar valores da tabela

    Dado que eu acesso a pagina do ecommerce
    E realizo a busca do produto "<produto>"
    Quando adicionar no carrinho
    Então devo visualizar o "<titulo>" e "<valor>" corretamente no carrinho

    Exemplos:
      | produto               | titulo                                            | valor  |
      | PlayStation 4         | Console PlayStation 4 1TB Bundle Hits 9 - GTA V, Death Stranding, The Last Of Us - PlayStation 4 | R$2.599,00  |
      | Nintendo Switch Lite  | Nintendo Switch Lite Gray - Cinzento	          | R$2.150,00   |
      | Xbox One	          | Console Xbox One X 1TB Edição limitada Gears 5	  | R$3.599,90   |

  @item-inexistente
  Cenario: Validar corretamente mensagem de item inexistente

    Dado que eu acesso a pagina do ecommerce
    Quando realizo a busca do produto "asasdsasdassda"
    Então devo visualizar mensagem de nenhum produto encontrado

  @visual
  Cenario: Validar layout

    Dado que eu acesso a pagina do ecommerce
    E realizo a busca do produto "PlayStation 4"
    E clico no produto
    Quando clicar no botao Adicionar ao carrinho
    Então devo visualizar mensagem de adicionado ao carrinho
    Quando clicar no carrinho
    Então Eu pego screenshot da pagina "Carrinho"
    E Eu espero a página de "Carrinho" ter o mesmo layout