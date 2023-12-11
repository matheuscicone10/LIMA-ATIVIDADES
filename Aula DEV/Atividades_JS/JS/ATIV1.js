function obter(){
    return JSON.parse(localStorage.getItem('restaurante')) || [];
}
function salvarDadosRestaurante(lista){
    localStorage.setItem('restaurante',JSON.stringify(lista));
}
let listaRestaurante = obter();

function veri(){
   let pesoKg = document.getElementById("peso").value;
   let preçoprato = document.getElementById ("prato").value;  
    console.log(pesoKg);
    console.log(preçoprato);

    if (pesoKg && preçoprato){
        let pre = pesoKg * preçoprato;
        listaRestaurante.push({pesoKg,preçoprato,pre});
        salvarDadosRestaurante(listaRestaurante);
        console.log(pre);
    }

    //lendo a lista
    let vazia = "";
    for (i = 0; i < listaRestaurante.length; i++){
        vazia += "Peso do prato: " + listaRestaurante[i].preçoprato  +
        " / Preço do Kg: R$ " + listaRestaurante[i].pesoKg +
        " / Preço Final: R$ " + listaRestaurante[i].pre + "<br>";
    }
    document.getElementById ("demo").innerHTML = vazia;
}