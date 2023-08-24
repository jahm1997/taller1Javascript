const btnEnunciado7 = document.getElementById("botonSiete");
btnEnunciado7.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 7: Calcule e imprima el pago mensual para un vendedor de autos, basándose
                              en lo siguiente:
                                a. El pago base es de $350, más una comisión de $15 por cada auto
                                vendido y un bono de 40$ si vendió mas de 15 autos.
                                b. El impuesto a pagar es el 25% del pago total
                                c. Los datos de entrada son el nombre del vendedor y el número de
                                autos vendidos en el mes
                                d. Se desea imprimir el nombre del vendedor, el sueldo bruto, el
                                impuesto y el sueldo neto.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 7";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var nombreEmpleado = prompt("Por favor introduzca un primer numero");

    var autosVendidos = parseFloat(
      prompt("Por favor introduzca un segundo valor numerico")
    );

    if (isNaN(autosVendidos)) {
      alert(
        "!!! El numero de autos vendidos no es un caracter numerico, ejecute nuevamente el ejercicio ¡¡¡"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      var pagoBase = 350;
      var comision15 = autosVendidos > 15 ? 40 : 0;
      var comisionXauto = 15 * autosVendidos;
      var sueldoBruto = pagoBase + comision15 + comisionXauto;
      var impuesto = sueldoBruto * 0.25;
      var sueldoNeto = sueldoBruto - impuesto;
      document.getElementById("resultado").innerHTML =
        "Nombre: " +
        nombreEmpleado +
        "<br>Sueldo bruto: " +
        sueldoBruto +
        "<br>Impuestos: " +
        impuesto +
        "<br>Sueldo neto: " +
        sueldoNeto;
    }
  });
});
