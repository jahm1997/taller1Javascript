const btnEnunciado6 = document.getElementById("botonSeis");
btnEnunciado6.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 6: Diseñe un algoritmo que calcule la nota final de un estudiante con los
  siguientes porcentajes: primer parcial 30%, segundo parcial 30% y examen
  final 40%. Al final determine si pudo aprobar o no la asignatura. La nota
  mínima aprobatoria es 3.2 (Tres punto Dos).`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 6";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var numeroRecibido = parseFloat(
      prompt("Por favor introduzca la nota del primer parcial")
    );
    var segundoNumeroRecibido = parseFloat(
      prompt("Por favor introduzca la nota del segundo parcial")
    );
    var tercerNumeroRecibido = parseFloat(
      prompt("Por favor introduzca la nota de su tercer parcial")
    );

    if (
      isNaN(numeroRecibido) ||
      isNaN(segundoNumeroRecibido) ||
      isNaN(tercerNumeroRecibido)
    ) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      var notaMinima = 3.2;
      var notaFinal =
        numeroRecibido * 0.3 +
        segundoNumeroRecibido * 0.3 +
        tercerNumeroRecibido * 0.4;

      if (notaFinal < notaMinima) {
        let temp = numeroRecibido;
        numeroRecibido = segundoNumeroRecibido;
        segundoNumeroRecibido = temp;
        document.getElementById("resultado").innerHTML =
          "Usted ha Desaprobado el curso, su nota de " +
          notaFinal +
          ", No cumple con los estandares para aprobar";
      } else {
        document.getElementById("resultado").innerHTML =
          "Usted ha Aprobado el curso con una nota de " +
          notaFinal +
          ", superior a 3.2 como estandar de aprobación";
      }
    }
  });
});
