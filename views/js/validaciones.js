let formulario = document.getElementById("LoginForm");
let formsignup = document.getElementById("registroForm");
function validarEmail(email) {
  var regex = /^[-\w.%+]{1,34}@(?:[A-Z0-9-]{1,10}\.){1,10}[A-Z]{2,10}$/i;
  return regex.test(email) ? true : false;
}
function validarNombres(Nombre) {
  var regex = /^[A-Z]{1,32}$/i;
  return regex.test(Nombre) ? true : false;
}

function validarContraseñas(Contraseña) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,64}$/;
  return regex.test(Contraseña) ? true : false;
}



function CalcularEdad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  return edad;
}

//Falta añadir una funcion de parte del backend para que valide que el correo no halla sido utilizado
function ValidarLogin(event) {
  var email = validarEmail(document.getElementById('inputemail').value);
  var contraseña = validarContraseñas(document.getElementById('inputContraseña').value);

  if (email == true) {
    document.getElementById('msgerror1').innerHTML = "";
    if (contraseña == true ) {
      document.getElementById('msgerror2').innerHTML = "";
      formulario.setAttribute("action", "/login");

    } else {

      document.getElementById('msgerror2').innerHTML = 'Las contraseñas deben coincidir y deben contener al menos una MAYUSCULA, un numero y un caracter especial  $ @ $ ! % * ? & y al menos 8 caracteres. Ejemplo: Ejemplo1$';
      event.preventDefault();
    }
  } else {
    document.getElementById('msgerror1').innerHTML = "El correo debe de tener el siguiente formato correo@correo.correo";

    event.preventDefault();
  }
  
  

}

function ValidarRegistro(event) {

  var email = validarEmail(document.getElementById('inputemail').value);
  var nombre = validarNombres(document.getElementById('inputNombre').value);
  var contraseña = validarContraseñas(document.getElementById('inputContraseña1').value);
  var confirmacion = validarContraseñas(document.getElementById('inputContraseña2').value);
  var edad = CalcularEdad(document.getElementById('inputdate').value);

  //colocar lo que va a hacer en caso de que las validaciones sean correctas o incorrectas

  if (email == true) {
    document.getElementById('msgerror1').innerHTML = "";

    if (nombre == true) {
      document.getElementById('msgerror2').innerHTML = "";

      if (contraseña == true && confirmacion == true && document.getElementById('inputContraseña1').value == document.getElementById('inputContraseña2').value) {
        document.getElementById('msgerror3').innerHTML = "";

        if (edad >= 18) {
          document.getElementById('msgerror4').innerHTML = "";

          if (document.registroForm.SelectAlcaldia.value != 0 && document.registroForm.SelectAlcaldia.value != 'Alcaldía') {
            document.getElementById('msgerror5').innerHTML = "";

          } else {
            document.getElementById('msgerror5').innerHTML = 'Elige una alcaldia para continuar';
            event.preventDefault();
          }
        } else {
          document.getElementById('msgerror4').innerHTML = 'Debes de ser mayor de edad para poder crear tu cuenta';

          event.preventDefault();
        }
      } else {

        document.getElementById('msgerror3').innerHTML = 'Las contraseñas deben coincidir y deben contener al menos una MAYUSCULA, un numero y un caracter especial  $ @ $ ! % * ? & y al menos 8 caracteres. Ejemplo: Ejemplo1$';
        event.preventDefault();
      }
    } else {
      document.getElementById('msgerror2').innerHTML = 'El nombre solo puede tener letras y un maximo de 32 caracteres';
      event.preventDefault();
    }
  } else {
    document.getElementById('msgerror1').innerHTML = "El correo debe de tener el siguiente formato correo@correo.correo";
    // document.getElementById('msgerror1').innerHTML='El correo debe de tener el siguiente formato correo@correo.correo');
    event.preventDefault();
  }

}

