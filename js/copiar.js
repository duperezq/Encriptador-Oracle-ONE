const boton_copiar = document.querySelector("#boton_copiar");
const texto = document.querySelector("#resultado");
const areaEncriptar = document.querySelector("#introducir-texto");

boton_copiar.addEventListener("click",() => {      
  navigator.clipboard.writeText(texto.innerHTML);
  document.getElementById("introducir-texto").focus();
  areaEncriptar.focus();
  alerta3();
  });

  
  