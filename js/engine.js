let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas =
  JSON.parse(localStorage.getItem("JLMS")) ||
  []; /**Buscando os itens no LocalStorage do Navegador */

function renderTarefas() {
  listElement.innerHTML = '';

  tarefas.map((item) => {
    let liElement = document.createElement("li");
    let nomeTarefa = document.createTextNode(item);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao =
      tarefas.indexOf(item); /**Pegando a posicao de cada item passado no Map */

    linkElement.setAttribute(
      "onclick",
      `deletarTarefa(${posicao})`
    ); /**Passando a posicao como parametro da funcao, para excluir da lista */

    liElement.appendChild(nomeTarefa); /**Colocando o Texto dentro da Tag li */
    liElement.appendChild(linkElement); /**Colocando Link dentro da Tag li */
    listElement.appendChild(liElement); /**Colocando a Li dentro da Tag UL */
  });
}
renderTarefas();

function adicionarTarefa() {
  if (inputElement.value === "") {
    alert("Digite uma tarefa");
    return false;
  } else {
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = "";
    renderTarefas();
    salvarDados();
  }
}
buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarDados();
}

function salvarDados() {
  localStorage.setItem(
    "JLMS",
    JSON.stringify(tarefas)
  ); /**Salvando os Dados no Storage do Navegador como String */
}
