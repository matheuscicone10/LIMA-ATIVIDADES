document.getElementById("btMostrar").addEventListener("click", function(){
    let inMedicamento = document.getElementById("inMedicamento").value;
    let inPreco = document.getElementById("inPreco").value;
    if(isNaN(inPreco)){
        alert("Digite apenas Numeros");
        return;
    }
    
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent = "Promoção do " + inMedicamento;
    document.getElementById("outPreco").textContent = "Promoção do " + inPreco;
    document.getElementById("outPromocao").textContent = "Leve 2 por: R$" + promocao.toFixed(0);
})
