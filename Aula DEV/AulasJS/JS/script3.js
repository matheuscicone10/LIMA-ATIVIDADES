function submitFunction(cmp1, cmp2){
    if(cmp1.value == null || cmp1.value == ""){
        alert("Favor preencher o campo 1");
    }else if(cmp2.value == null || cmp2.value == ""){
        alert("Favor preencher o campo 2");
    }else {
        alert("Obrigado!!!");
    }
}
window.onbeforeunload = function(){
    return 'Tchau';
};