# :checkered_flag: GERENCIADOR DE PRODUTOS
Uma API simples de gerenciamento de produtos, onde é possível listar os produtos cadastrados, adicionar novos produtos, deletar e editar. 
Desenvolvimento do Backend utilizando Node.js e Express e para o banco de dados por ser aplicação simples utilizei o SQLite com Sequelize para gerar o banco de dados e gerenciar.

## :spiral_calendar: Entidades ou tabelas do sistema

- Produtos

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Listar Produtos
- Ver Produto (de forma unitária)
- Deletar Produto
- Adicionar Novos Produtos
- Controle simples de Estoque (true ou false)

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Vue.js, Axios, JavaScript, HTML, CSS, Bootstrap

**Backend:**

Node.js, Express, Sequelize, JavaScript


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Product | X |  X  | X | X |


## :neckbeard: Como utilizar o sistema

Após subir o backend e o frontend localmente ao acessar a raiz "/" será listado os produtos já cadastrados.
Nesta página é possível adicionar novos produtos ou ver/excluir produtos já listados. 
Ao visualizar produtos é aberto um modal que tem a opção de editar produto, ao clicar é possível editar informações do produto já cadastrado. Todas as informações podem ser editadas, inclusive a disponibilidade no estoque. 