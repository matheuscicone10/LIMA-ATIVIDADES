function ok(){
    var palavra =prompt("Digite a palavra:");
    
    palavra.toLocaleUpperCase();
    alert("Palavra: "+ palavra +" \nInvertida: "+ palavra.split('').reverse().join(''));
}

