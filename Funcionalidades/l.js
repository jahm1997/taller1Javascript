const btnEnunciado12 = document.getElementById("botonDoce");
btnEnunciado12.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 12: Solicitar tres números al usuario e intercambiarlos entre si, solo si el
  segundo es mayor que el primero y el tercero.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 12";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    var primerNumero = parseFloat(prompt("Ingrese el primer número:"));
    var segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));
    var tercerNumero = parseFloat(prompt("Ingrese el tercer número:"));
    if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(tercerNumero)) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        // Intercambiar el primer y segundo número
        const temp = primerNumero;
        primerNumero = segundoNumero;
        segundoNumero = temp;

        // Intercambiar el primer y tercer número
        const temp2 = primerNumero;
        primerNumero = tercerNumero;
        tercerNumero = temp2;
        document.getElementById("resultado").innerHTML =
          "Números intercambiados: " +
          "<br>Primer número: " +
          primerNumero +
          "<br>Segundo número:: " +
          segundoNumero +
          "<br>Tercer número: " +
          tercerNumero;
      } else {
        document.getElementById("resultado").innerHTML =
          "No se realizaron cambios para los numeros: " +
          primerNumero +
          ", " +
          segundoNumero +
          ", " +
          tercerNumero;
      }
    }
  });
});
