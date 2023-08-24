const btnEnunciado13 = document.getElementById("botonCetre");
btnEnunciado13.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 13: Para lograr ser monitor de la Universidad en las salas de sistemas, los
  estudiantes deben obtener un promedio integral superior a 4.0 y no tener
  antecedentes disciplinarios. Ayúdele a un estudiante a saber si puede optar
  por ser monitor de la institución.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 13";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    const promedioIntegral = parseFloat(
      prompt("Ingrese su promedio integral:")
    );
    const antecedentesDisciplinarios = prompt(
      "¿Tiene antecedentes disciplinarios? (Sí/No)"
    ).toLowerCase();

    if (isNaN(promedioIntegral)) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (promedioIntegral > 4.0 && antecedentesDisciplinarios === "no") {
        document.getElementById("resultado").innerHTML =
          "¡Felicidades! Cumple con los requisitos para ser monitor de la universidad.";
      } else {
        document.getElementById("resultado").innerHTML =
          "Lo siento, no cumple con los requisitos para ser monitor de la universidad.";
      }
    }
  });
});
