function enviarMail()
{
  if (validarContacto())
  {
    console.log('submit....');
    document.frmContacto.submit();
  }
}

function validarContacto()
{
    console.log("validando...");

    document.getElementById("msgValidation").setAttribute('hidden', '');

    let nya = document.frmContacto.Nombre.value;
    let aNya = nya.split(' ');
    
    if (aNya.length <= 1) {
      document.getElementById("msgValidation").removeAttribute("hidden");
      document.getElementById("msgValidation").textContent = 'Falta ingresar el nombre y/o apellido';
      document.frmContacto.Nombre.focus();

      return false;
    }
    
    return true;    
}

