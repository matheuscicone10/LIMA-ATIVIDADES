function obterListaProdutos(){
    return JSON.parse((localStorage.getItem('produtos'))) || [];
}

function salvarListaProdutos(lista){
    localStorage.setItem('produtos',JSON.stringify(lista));
}

let listaProdutos = obterListaProdutos();
function adicionaProdutos(){
    const nome = document.getElementById('nome-produtos').value;
    const preco = parseFloat(document.getElementById('preco-produtos').value);
    if(nome && preco){
        listaProdutos.push({nome, preco})
        salvarListaProdutos(listaProdutos);
        atualizarListaProdutos();
        limparCampos();
    }
}

function salvarListaProdutos(lista){
    localStorage.setItem('produtos',JSON.stringify(lista));
}

//funcao atualizar
function atualizarListaProdutos(){
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = '';
    listaProdutos.forEach((produtos,index) =>{
    const li = document.createElement('li');
    li.textContent = `${produtos.nome} - R$ ${produtos.preco.toFixed(2)}`;

    //add botao p/ edicao de valores
    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar Dados';
    botaoEditar.onclick = () =>
    preencherFormularioEditar(index);
    li.appendChild(botaoEditar);
    lista.appendChild(li);
});

    atualizarListaExclusao();
}

    //formulario editar
    function preencherFormularioEditar(index){
    const produtos = listaProdutos[index];
    document.getElementById("editar-nome-produtos").value = produtos.nome;
    document.getElementById("editar-preco-produtos").value = produtos.preco;
}

    //funcao atualizar
    function atualizarListaExclusao(){
    const selectExcluir = document.getElementById("excluir-produtos");
    selectExcluir.innerHTML = '';
    listaProdutos.forEach((produtos,index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = produtos.nome;
    selectExcluir.appendChild(option);
    });
}

    //atualizar Produto
    function atualizarProdutos(){
    const index = document.getElementById("excluir-produtos").value;
    const nome = document.getElementById("editar-nome-produtos").value;
    const preco = parseFloat(document.getElementById("editar-preco-produtos").value);
    if(index !== '' && nome && preco){
    listaProdutos[index] = {nome, preco};
    atualizarListaProdutos();
    limparFormularioEditar();
    }
}

    //limpar campos
    function limparCampos(){
    document.getElementById("nome-produtos").value = "";
    document.getElementById("preco-produtos").value = "";
}

    //limpa form
    function limparFormularioEditar(){
    document.getElementById("editar-nome-produtos").value = "";
    document.getElementById("editar-preco-produtos").value = "";
}

    //funcao excluir
    function excluirProdutos(){
    const index = document.getElementById("excluir-produtos").value;
    if(index !== ''){
    listaProdutos.splice(index,1);
    salvarListaProdutos(listaProdutos);
    atualizarListaProdutos();
    }
}

    //atualiza o browser p/ o usuario
    window.onload = function(){
    atualizarProdutos();
};