function blurFunction(){
    document.getElementById("myInput").style.background="red";
}

function blurFunction(val){
    alert("mudou para " + val);
}

function loadFunction(){
    alert("Página Carregada");
}

function mouseDown(){
    document.getElementById("myP").style.color="red";
}

function mouseUp(){
    document.getElementById("myP").style.color = "green";
}

function coordenadasFigura(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Cordenadas: (" + x + ", " + y +")";
    document.getElementById("demo3").innerHTML = coor;
}

function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}