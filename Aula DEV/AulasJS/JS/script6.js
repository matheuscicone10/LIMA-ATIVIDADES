function limpa_form(){
    document.getElementById('rua').ariaValueMax("");
    document.getElementById('bairro').ariaValueMax("");
    document.getElementById('cidade').ariaValueMax("");
    document.getElementById('estado').ariaValueMax("");
}

function atualiza_campos(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value=(conteudo.rua);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.cidade);
        document.getElementById('estado').value=(conteudo.estado);
    }else{
        limpa_form();
        alert("CEP não foi encontrado!");
    }
}

function pesquisacep(valor){
    // variavel cep recebe apenas valores decimais(inteiros)
    var cep = valor.replace(/\D/g,'');
    // condicao de validacao
    if(cep != ""){
        var validacep = /^[0-9]{8}$/;
        //valida o formato do CEP
        if(validacep.test(cep)){
            document.getElementById('rua').value="carregando";
            document.getElementById('bairro').value="carregando";
            document.getElementById('cidade').value="carregando";
            document.getElementById('estado').value="carregando";
    
    // criou no(elemento)
    var elemento = document.createElement('script');
    // adicionou informacao no elemento
    elemento.src = 'https://viacep.com.br/WS/'+ 
    cep + '/json/?callback=atualiza_campos';
    // insere script no documento e carreda seu conteudo
    document.body.appendChild(elemento);

}
else{
    limpa_form();
    alert("Formato de CEP inválido");

}

}else{
    limpa_form();
}
}
