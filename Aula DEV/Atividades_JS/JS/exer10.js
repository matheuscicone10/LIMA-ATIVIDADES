function tabuada(){
    let num = parseInt(document.getElementById("numero").value);

    for(let i = 1; i<=10; i++){
        let resul = num * i;
        console.log(num);

        let para = document.createElement("p");
        let node = document.createTextNode(num + "x" + i+ " = "+ resul);
        para.appendChild(node);
        let element = document.getElementById("resposta");
        element.appendChild(para);
    }

}