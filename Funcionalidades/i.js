const btnEnunciado9 = document.getElementById("botonNueve");
btnEnunciado9.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 9: Diseñe un algoritmo que dada una nota (numérica) determine el estado de
  un estudiante según la siguiente tabla: EXCELENTE: 5.0, BUENO: entre 4.0 y
  4.9, REGULAR: entre 3.0 y 3.9 y DEFICIENTE: entre 0 y 2.9.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 9";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    const nota = parseFloat(prompt("Ingrese la nota del estudiante:"));

    if (isNaN(nota)) {
      alert(
        "La nota ingresada no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (nota >= 5.0) {
        document.getElementById("resultado").innerHTML =
          "El estado del estudiante es EXCELENTE.";
      } else if (nota >= 4.0 && nota < 5.0) {
        document.getElementById("resultado").innerHTML =
          "El estado del estudiante es BUENO.";
      } else if (nota >= 3.0 && nota < 4.0) {
        document.getElementById("resultado").innerHTML =
          "El estado del estudiante es REGULAR.";
      } else if (nota >= 0 && nota < 3.0) {
        document.getElementById("resultado").innerHTML =
          "El estado del estudiante es DEFICIENTE.";
      } else {
        document.getElementById("resultado").innerHTML =
          "La nota ingresada no es válida.";
      }
    }
  });
});
