function alerta1() {
    Swal.fire({
      title: "¡Error!",
      text: "No debe estar vacío.",
      icon: "error",
      background: "#E5E5E5",
      confirmButtonColor: 'darkblue',
      allowOutsideClick: false,
      allowEscapeKey: false
    })
  }
  
  
  function alerta2() {
    Swal.fire({
      title: "¡Error!",
      text: "No debe contener mayúsculas o tildes.",
      icon: "error",
      background: "#E5E5E5",
      confirmButtonColor: 'darkblue',
      allowOutsideClick: false,
      allowEscapeKey: false
    })
  }

  
  function alerta3() {
    Swal.fire({
      title: "Texto copiado.",
      icon: 'success',
      background: "#E5E5E5",
      confirmButtonColor: 'darkblue',
      allowOutsideClick: false,
      allowEscapeKey: false
    })
  }

