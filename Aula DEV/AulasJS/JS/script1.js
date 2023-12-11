// d = new Date();
//  document.write("<br>" + d.toUTCString());
//    document.write("<br>" + d.toDateString());
//    document.write("<br>" + d.toLocaleDateString());
//  document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false}));

    /* var hoje, prazo;
    hoje = new Date();
    prazo = new Date();

    prazo.setFullYear(2023, 10, 28);
    var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + (hoje.getMonth()) + "/" 
    + hoje.getFullYear() + "<p>");

    document.write("<p>O prazo é é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + (hoje.getMonth() + 1) + "/" 
    + hoje.getFullYear() + "<p>"); */

    /* try {
        var x;

        if ( x == "") throw "vazio";
        if(isNaN(x)) throw "não é um número";
        if(x == 10) throw x;
        console.log(x);
        document.write(x);
    }catch(err){
        console.log("Input is " + err);
        document.write("Input is " + err);
    } 

    <script>
        try{
            adddlert("ERRO!!!")  //adddlert não existe
        }
        catch(err){
            document.write = err.message
        }
    </script>

    var dividendo = 10;
    var divisor = 0;

    try{
        if(divisor == 0){
            throw new
            Error("Erro: Divisão por zero não é permitida");
        }
        var resultado = dividendo/divisor;
        console.log("Resultado: ", resultado);
    }catch(err){
        console.log(err.message);
    }

    function myFunction(){
        var message, x;
        message = document.getElementById("message");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
        try{
            if(x == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if(x <5) throw "too low";
            if(x >10) throw "too high";
        }
        catch(err){
            message.innerHTML = "Input is " + err;
        }
    }*/

    try{
        adddlert("ERRO!!!");
    }catch(err){
        document.write("<br> " + err.message);
    }finally{
        document.write("<br>Será mostrado mesmo com o Erro");
    }
