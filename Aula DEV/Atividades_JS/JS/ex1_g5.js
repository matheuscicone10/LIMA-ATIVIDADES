function veri(){
    var precoKg = document.getElementById("peso").value;//adicionando o valor do kg
    var precoPrato = document.getElementById("prato").value;//adicionando valor do prato

    var pre = precoKg * precoPrato;//fazendo a função de multiplicação peso x preco
    var para = document.createElement("p");// criação de caixa vazia
    var node = document.createTextNode("o preço final é: " + pre);//criando conteudo
    para.appendChild(node);//adiconando conteudo a caixa
    var element = document.getElementById("pro");//criando a conexao com o html
    element.appendChild(para);// aplicando o elemento p ao o conteudo
}