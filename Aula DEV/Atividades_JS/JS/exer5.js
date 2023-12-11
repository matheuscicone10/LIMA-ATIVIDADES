function numeros(){
    var numero = document.getElementById("numero").value;
    console.log(numero);
    document.getElementById(numero);

    if((numero %2) ==0){
        console.log("par");
        document.getElementById("resultado").innerHTML = numero + " é par";
}else{
        console.log("impar");
        document.getElementById("resultado").innerHTML = numero + " é impar";
        }

    
}