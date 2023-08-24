const btnEnunciado5 = document.getElementById("botonCinco");
btnEnunciado5.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 5: Escriba un algoritmo que intercambie el valor de dos variables numéricas
  sólo si el valor de la primera es mayor que el de la segunda.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 5";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var numeroRecibido = parseFloat(
      prompt("Por favor introduzca un primer numero")
    );
    var segundoNumeroRecibido = parseFloat(
      prompt("Por favor introduzca un segundo valor numerico")
    );
    console.log(typeof numeroRecibido);
    if (isNaN(numeroRecibido) || isNaN(segundoNumeroRecibido)) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      console.log(5);
      if (numeroRecibido > segundoNumeroRecibido) {
        let temp = numeroRecibido;
        numeroRecibido = segundoNumeroRecibido;
        segundoNumeroRecibido = temp;
        document.getElementById("resultado").innerHTML =
          "Después del intercambio: su primer numero caracter ingresado es " +
          numeroRecibido +
          " y segundo caracter es " +
          segundoNumeroRecibido;
      } else {
        document.getElementById("resultado").innerHTML =
          "No hubo intercambios, sus numeros fueron " +
          numeroRecibido +
          " y " +
          segundoNumeroRecibido;
      }
    }
  });
});
