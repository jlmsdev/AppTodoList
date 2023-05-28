# Lista de Tarefas em JavaScript

Este é um projeto de uma Lista de Tarefas desenvolvido em JavaScript. A aplicação permite que os usuários criem e gerenciem suas tarefas de forma simples e intuitiva.

## Funcionalidades

A Lista de Tarefas oferece as seguintes funcionalidades:

- Adicionar uma nova tarefa à lista.
- Excluir uma tarefa da lista.

## Como utilizar

1. Abra o arquivo `index.html` no seu navegador web ou Clique no Link do projeto em Produção [Projeto da Lista de Tarefas](https://jlms-todolistapp.netlify.app/).
2. Digite o nome da tarefa no campo de entrada.
3. Clique no botão "Adicionar" para adicionar a tarefa à lista.
4. Para excluir uma tarefa, clique no link "Excluir" ao lado dela.

## Lógica de Implementação

A lógica do projeto foi implementada da seguinte forma:

1. Ao carregar a página, o código busca os dados da lista de tarefas no armazenamento local do navegador, usando o método `localStorage.getItem()`. Caso não haja dados armazenados, é criada uma lista vazia.
2. A função `renderTarefas()` é responsável por exibir as tarefas na página. Ela percorre a lista de tarefas e cria elementos HTML para cada uma delas, adicionando um link de exclusão.
3. A função `adicionarTarefa()` é acionada quando o botão "Adicionar" é clicado. Ela verifica se o campo de entrada está vazio e exibe um alerta se necessário. Caso contrário, adiciona a nova tarefa à lista, limpa o campo de entrada, chama a função `renderTarefas()` para atualizar a exibição e chama a função `salvarDados()` para salvar os dados no armazenamento local.
4. A função `deletarTarefa(posicao)` é acionada quando um link de exclusão é clicado. Ela remove a tarefa da lista na posição especificada, chama a função `renderTarefas()` para atualizar a exibição e chama a função `salvarDados()` para salvar os dados atualizados no armazenamento local.
5. A função `salvarDados()` converte a lista de tarefas em uma string JSON usando `JSON.stringify()` e armazena-a no armazenamento local do navegador usando `localStorage.setItem()`.

## Contribuindo

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um novo branch com a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações desejadas no código.
4. Faça commit das suas alterações: `git commit -m 'Adicionando minha feature'`.
5. Faça push para o branch criado: `git push origin minha-feature`.
6. Abra um pull request no GitHub descrevendo as alterações propostas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
