let lista = [];
let filtroAtual = "todos";

function removerItem(index) {
  lista.splice(index, 1);
  atualizarLista();
}

function adicionarItem() {
  const entradaItem = document.getElementById("entradaItem");
  const entradaQuantidade = document.getElementById("entradaQuantidade");
  const itemNome = entradaItem.value.trim();
  const quantidade = parseInt(entradaQuantidade.value, 10);

  if (itemNome && quantidade > 0) {
    lista.push({ nome: itemNome, quantidade, comprado: false });
    atualizarLista();
  }
}

function atualizarLista() {
  const listaCompras = document.getElementById("listaCompras");
  listaCompras.innerHTML = "";

  const itensFiltrados = lista.filter((item) => {
    if (filtroAtual === "pendentes") return !item.comprado;
    if (filtroAtual === "comprados") return item.comprado;
    return true;
  });

  itensFiltrados.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between align-items-center fade-in ${item.comprado ? "comprado" : ""}`;
    const span = document.createElement("span");
    span.innerHTML = `${item.nome} <span class="badge bg-primary rounded-pill">${item.quantidade}</span>`;
    const div = document.createElement("div");
    div.className = "btn-group";
    div.innerHTML = `<button class="btn btn-sm btn-outline-success" onclick="marcarComprado(${index})">✔</button>
                     <button class="btn btn-sm btn-outline-danger" onclick="removerItem(${index})">✖</button>`;
    li.appendChild(span);
    li.appendChild(div);
    listaCompras.appendChild(li);
  });
}
