const btnEnunciado3 = document.getElementById("botonTres");
btnEnunciado3.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 3: Diseñe un algoritmo que, dada una variable cuyo valor es leído desde el
  teclado, imprima por pantalla si el número es o no mayor que 0 (cero), y si
  el número es par o impar.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 3";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var numeroRecibido = parseFloat(prompt("Por favor ingrese un numero"));
    console.log(typeof numeroRecibido);
    if (isNaN(numeroRecibido)) {
      alert(
        "El caracter ingresado no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (numeroRecibido < 0) {
        if (numeroRecibido % 2 === 0) {
          document.getElementById(
            "resultado"
          ).innerHTML = `El numero ingresado (${numeroRecibido}) es Es menor que 0 y a su vez, es par`;
        } else {
          document.getElementById(
            "resultado"
          ).innerHTML = `El numero ingresado (${numeroRecibido}) es Es menor que 0 y a su vez, es impar`;
        }
      } else {
        if (numeroRecibido % 2 === 0) {
          document.getElementById(
            "resultado"
          ).innerHTML = `El numero ingresado (${numeroRecibido}) es Es menor que 0 y a su vez, es par`;
        } else {
          document.getElementById(
            "resultado"
          ).innerHTML = `El numero ingresado (${numeroRecibido}) es Es menor que 0 y a su vez, es impar`;
        }
      }
    }
  });
});
