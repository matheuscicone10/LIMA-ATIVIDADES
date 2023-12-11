function formaspgt(){
    let preco = parseFloat(document.getElementById ("valor").value);

    for (let i = 1; i <= 10; i++){
        const parce = (preco/i);
        const par = parce.toFixed(2);

        let para = document.createElement("p");
        let node = document.createTextNode(i + "x" + " de " + par);
        para.appendChild(node);
        let element = document.getElementById("pro");
        element.appendChild(para);
    }
}