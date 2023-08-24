const btnEnunciado4 = document.getElementById("botonCuatro");
btnEnunciado4.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 4: Determine si un viajero de una Aerolínea puede tomar un tiquete
  determinado en clase: Ejecutiva, Normal o Económica. Dependiendo de los
  puntos que tenga puede tener acceso a cada clase. Más de 2000 puntos
  puede estar en Ejecutiva, entre 1000 y 1999 puede estar en Normal y
  menos de 1000 puede estar en Económica.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 4";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    // Ejecuta el script de enunciado
    var numeroRecibido = parseFloat(
      prompt("Por favor los puntos acumulado hasta el momento")
    );
    console.log(typeof numeroRecibido);
    if (isNaN(numeroRecibido)) {
      alert(
        "El caracter ingresado no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (numeroRecibido >= 2000) {
        document.getElementById("resultado").innerHTML =
          "Usted puede estar en clase Ejecutiva";
      } else if (numeroRecibido <= 1999 && numeroRecibido >= 1000) {
        document.getElementById("resultado").innerHTML =
          "Usted puede estar en clase Normal";
      } else if (numeroRecibido <= 999) {
        document.getElementById("resultado").innerHTML =
          "Usted puede estar en clase Económica";
      }
    }
  });
});
