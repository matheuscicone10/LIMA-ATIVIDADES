function notas(){
    var saque = document.getElementById("saque").value;
    Number(saque);
    console.log(typeof(saque));
    console.log(saque);
    var notas1 = document.getElementById("cem");
    var notas2 = document.getElementById("cin");
    var notas3 = document.getElementById("dez");

    if(saque >= 100){
        notas1 = Math.floor(saque / 100);
        console.log(notas1);
        document.getElementById("cem").innerHTML = notas1;
        saque = saque % 100;
        console.log(notas1);
       
    }if(saque >= 50 && saque <100){
        notas2 = Math.floor(saque / 50);
        console.log(notas2);
        document.getElementById("cin").innerHTML = notas2;
        saque = saque % 50;
        console.log(saque);
       

    }if(saque >= 10){
        notas3 = Math.floor(saque / 10);
        console.log(notas3);
        document.getElementById("dez").innerHTML = notas3;
        saque = saque % 10;
        console.log(saque);
       

    }else{
        console.log(saque);
    }

    console.log("Notas de 100: " + notas1);
    document.getElementById("cem").innerHTML = "Notas de 100: "+ notas1;
    console.log("Notas de 50: " + notas2);
    document.getElementById("cin").innerHTML = "Notas de 50: " + notas2;
    console.log("Notas de 10: " + notas3);
    document.getElementById("dez").innerHTML = "Notas de 10: " + notas3;
}