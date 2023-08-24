const btnEnunciado2 = document.getElementById("botonDos");
btnEnunciado2.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 2: Haga el algoritmo que, dada una variable cuyo valor es leído desde el
  teclado, imprima por pantalla si el número es o no mayor que 0 (cero).`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 2";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    // Ejecuta el script de enunciado
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
        document.getElementById(
          "resultado"
        ).innerHTML = `El numero ingresado (${numeroRecibido}) es Es menor que 0`;
      } else {
        document.getElementById(
          "resultado"
        ).innerHTML = `El numero ingresado (${numeroRecibido}) es mayor que 0`;
      }
    }
  });
});
