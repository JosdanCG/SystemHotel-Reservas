$("#in").on("click",function(){
    if($("#co").val() == ""){
        alert("Ingrese datos ...");
        $("#co").focus();
    }else if($("#pa").val() == ""){
        alert("Ingresar datos ...");
        $("#ape").focus();
    }else{
        alert("Ingresando");
    }
});