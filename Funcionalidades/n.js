const btnEnunciado14 = document.getElementById("botonCatorce");
btnEnunciado14.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 14: Determinar el nivel de un empleado según las siguientes condiciones:
                    a. Nivel 1 si el sueldo es menor a 500 y lleva menos de 4 años en la
                    empresa
                    b. Nivel 2 si el sueldo esta entre 501 y 1000 lleva menos de 4 años en la
                    empresa
                    c. Nivel 3 no importa el sueldo, solo que lleve mas de 10 años en la
                    empresa
                    d. Nivel 4 para los que lleven entre 5 y 9 años en la empresa y ganen
                    menos de 2000.
                    e. Los demás están en el nivel 0.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 14";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var sueldo = parseFloat(
      prompt("Ingrese el sueldo del empleado, sin comas o puntos:")
    );
    var añosEnEmpresa = parseInt(
      prompt("Ingrese la cantidad de años que lleva en la empresa:")
    );

    var nivel = 0;

    if (isNaN(sueldo) || isNaN(añosEnEmpresa)) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (sueldo < 500 && añosEnEmpresa < 4) {
        nivel = 1;
      } else if (sueldo >= 501 && sueldo <= 1000 && añosEnEmpresa < 4) {
        nivel = 2;
      } else if (añosEnEmpresa >= 10) {
        nivel = 3;
      } else if (añosEnEmpresa >= 5 && añosEnEmpresa <= 9 && sueldo < 2000) {
        nivel = 4;
      }
      document.getElementById("resultado").innerHTML =
        "El empleado está en el nivel: " + nivel;
    }
  });
});
