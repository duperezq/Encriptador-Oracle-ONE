var botonDos = document.querySelector("#btn2");
var mensaje = document.querySelector("#introducir-texto").value;

function desencriptar(){
    document.getElementById("figura").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~áéíóúàèìòùÁÉÍÓÚ']/g;

    if(mensaje == "") {
        alerta1();
        resultado(no)
        document.getElementById("figura").style.display = "";
    } else if (mensaje.match(mayus)!= mensaje.match(mayus)){
        alerta2();
        resultado(no)
        document.getElementById("figura").style.display = "";
    } else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alerta2();
        resultado(no);
        document.getElementById("figura").style.display = "";
    } else {
        msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
        document.getElementById("resultado").innerHTML=msjDesencriptado;
        resultado(si)
        document.getElementById("introducir-texto").value = ""
    }
        
}

botonDos.onclick = desencriptar;
  