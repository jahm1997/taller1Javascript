const btnEnunciado10 = document.getElementById("botonDiez");
btnEnunciado10.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 10: Dadas las notas parciales de 3 estudiantes, calcule la nota definitiva de
  cada uno de ellos y determine que estudiante obtuvo mejor rendimiento
  académico y cual obtuvo el mas bajo rendimiento académico.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 10";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var notasEstudiante1 = [
      parseFloat(prompt("Ingrese la nota del estudiante 1, primer parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 1, segundo parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 1, examen final:")),
    ];

    var notasEstudiante2 = [
      parseFloat(prompt("Ingrese la nota del estudiante 2, primer parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 2, segundo parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 2, examen final:")),
    ];

    var notasEstudiante3 = [
      parseFloat(prompt("Ingrese la nota del estudiante 3, primer parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 3, segundo parcial:")),
      parseFloat(prompt("Ingrese la nota del estudiante 3, examen final:")),
    ];

    var notaDefinitivaEstudiante1 =
      (notasEstudiante1[0] + notasEstudiante1[1] + notasEstudiante1[2]) / 3;
    var notaDefinitivaEstudiante2 =
      (notasEstudiante2[0] + notasEstudiante2[1] + notasEstudiante2[2]) / 3;
    var notaDefinitivaEstudiante3 =
      (notasEstudiante3[0] + notasEstudiante3[1] + notasEstudiante3[2]) / 3;

    var mejorEstudiante = "";
    var mejorNota = -1;

    if (notaDefinitivaEstudiante1 > mejorNota) {
      mejorNota = notaDefinitivaEstudiante1;
      mejorEstudiante = "Estudiante 1";
    }

    if (notaDefinitivaEstudiante2 > mejorNota) {
      mejorNota = notaDefinitivaEstudiante2;
      mejorEstudiante = "Estudiante 2";
    }

    if (notaDefinitivaEstudiante3 > mejorNota) {
      mejorNota = notaDefinitivaEstudiante3;
      mejorEstudiante = "Estudiante 3";
    }

    let peorEstudiante = "";
    let peorNota = 500;

    if (notaDefinitivaEstudiante1 < peorNota) {
      peorNota = notaDefinitivaEstudiante1;
      peorEstudiante = "Estudiante 1";
    }

    if (notaDefinitivaEstudiante2 < peorNota) {
      peorNota = notaDefinitivaEstudiante2;
      peorEstudiante = "Estudiante 2";
    }

    if (notaDefinitivaEstudiante3 < peorNota) {
      peorNota = notaDefinitivaEstudiante3;
      peorEstudiante = "Estudiante 3";
    }
    document.getElementById("resultado").innerHTML =
      "Notas definiticas: " +
      "<br>Estudiante 1: " +
      notaDefinitivaEstudiante1 +
      "<br>Estudiante 2: " +
      notaDefinitivaEstudiante2 +
      "<br>Estudiante 3: " +
      notaDefinitivaEstudiante3 +
      "<br>Mejor rendimiento: " +
      mejorEstudiante +
      " Con una nota de: " +
      mejorNota +
      "<br>Peor rendimiento: " +
      peorEstudiante +
      " Con una nota de: " +
      peorNota;
  });
});
