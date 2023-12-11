function categorizarAluno(){
    let saida = document.getElementById("saida");
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let i;

    let textoSaida = nome + "<br>" + tracos + "<br>";
    textoSaida += "Categoria: " + categorizarAluno(idade);
    saida.innerHTML = textoSaida;

}

function categorizarAluno(idade){
    if (idade <=12 ){
        return "Infantil";
    }else if(idade >=12 ){
        return "Juvenil";
    }else if(idade >=18){
        return "Adulto";
    }
}