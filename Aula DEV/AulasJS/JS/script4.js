function myFunction(){
    alert('ola');
}

var myVar = setInterval(myTimer, 1000);

function myTimer(){
}

function mostrarHora(){
    let d = new Date();
    document.innerHTML = 
    "<h3>Hora" + d.getHours() + "Min" + d.getMinutes() + "s" + d.getSeconds()+ d.toLocaleTimeString();
}

mostrarHora();
/*
function Hora(){ 
    const tempo = new Date();
    const hora = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`HORA ${hora} : ${min} : ${seg}`);
    document.innerHTML = `HORA ${hora} : ${min} : ${seg}`;
    setInterval(Hora, 1000);
}

Hora();

window.clearTimeout(intevalVariable);
*/

function myFunction(){
    document.body.style.backgroundImage="url(./IMG/img2.jpg)";
}