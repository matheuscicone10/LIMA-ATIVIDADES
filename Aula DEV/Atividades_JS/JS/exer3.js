function mostrar(){
    let med = document.getElementById(med);
    let pre = document.getElementById(pre);

    preco= Math.trunc(preco.value);
    
    let para = document.createElement(b);
    let node = document.createTextNode("o medicamento" +nome.value + "leve 2 por R$:" + preco.value);
    para.appendChild(node);
    var element = getElementById("pre");
    element.appendChild(para);
}