const btnEnunciado8 = document.getElementById("botonOcho");
btnEnunciado8.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 8: Escribir algoritmos que calculen y saquen por pantalla:
                  a. El máximo de tres números introducidos por teclado;
                  b. El mínimo de tres números dados por el usuarios
                  
                  c. El promedio de tres números dados por el usuarioDiseñe algoritmos
                  que permitan
                  d. Determinar si una letra pulsada por el usuario es mayúscula o
                  minúscula.
                  e. Indique si un carácter es un digito numérico.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 8";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    var num1 = parseFloat(prompt("Ingrese el primer numero:"));
    var num2 = parseFloat(prompt("Ingrese el segundo numero:"));
    var num3 = parseFloat(prompt("Ingrese el tercer numero:"));

    var maximo = Math.max(num1, num2, num3);

    var num4 = parseFloat(prompt("Ingrese el primer numero:"));
    var num5 = parseFloat(prompt("Ingrese el segundo numero:"));
    var num6 = parseFloat(prompt("Ingrese el tercer numero:"));

    var minimo = Math.min(num1, num2, num3);
    var promedio = (num4 + num5 + num6) / 3;

    var caracter = prompt("Finalmente por favor ingrese un caracter:");
    var resultado;
    if (caracter.match(/[A-Z]/)) {
      resultado = "La letra ingresada(" + caracter + "), es mayúscula.";
    } else if (caracter.match(/[a-z]/)) {
      resultado = "La letra ingresada(" + caracter + "), es minúscula.";
    }

    document.getElementById("resultado").innerHTML =
      "Maximo de los primeros 3 digitos introducidos: " +
      maximo +
      "<br>Minimo de los ultimos 3 digitos introducidos: " +
      minimo +
      "<br>Promedio de los ultimos 3 digitos introducidos: " +
      promedio +
      "<br>Respuesta a letra introducida : " +
      resultado;
  });
});
