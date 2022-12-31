var botonUno = document.querySelector("#btn1");
var botonCopiar = document.querySelector("#boton-copiar");

var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("resultado").style.display = ver;  
  document.getElementById("boton_copiar").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("figura").style.display = "";

resultado(no);

function encriptar(){
  document.getElementById("figura").style.display = "none";
  var msjEncriptado = "";
  var mensaje = document.querySelector("#introducir-texto").value;
  var mayus = /[A-Z]/g;
  var caracteres = /[~áéíóúàèìòùÁÉÍÓÚ'´]/g;

  if(mensaje == ""){
    alerta1();
    document.getElementById("figura").style.display = "";
    resultado(no)
  } else if(mensaje.match(mayus) != mensaje.match(mayus)){
      alerta2();
      document.getElementById("figura").style.display = "";
      resultado(no);
  } else if(mensaje.match(caracteres) != mensaje.match(caracteres)){
      alerta2();
      document.getElementById("figura").style.display = "";
      resultado(no);
  } else {
    for(var i = 0; i < mensaje.length; i++){
      if(mensaje[i] == "a"){
        var encriptando = mensaje[i].replace("a","ai",);
        msjEncriptado = msjEncriptado + encriptando;
      } else if(mensaje[i] == "e"){
          var encriptando = mensaje[i].replace("e","enter");
          msjEncriptado = msjEncriptado + encriptando;
        } else if(mensaje[i] == "i"){
            var encriptando = mensaje[i].replace("i","imes");
            msjEncriptado = msjEncriptado + encriptando;
          } else if(mensaje[i] == "o"){
              var encriptando = mensaje[i].replace("o","ober");
              msjEncriptado = msjEncriptado + encriptando;
            } else if(mensaje[i] == "u"){
                var encriptando = mensaje[i].replace("u","ufat");
                msjEncriptado = msjEncriptado + encriptando;
              } else{
                  msjEncriptado = msjEncriptado + mensaje[i];
      }
    }
    document.getElementById("resultado").innerHTML=msjEncriptado;
    document.getElementById("introducir-texto").value = "";
    resultado(si)
  }
}

botonUno.onclick = encriptar;
