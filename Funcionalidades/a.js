const btnEnunciado1 = document.getElementById("botonUno");
btnEnunciado1.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 1: A través de un algoritmo ayude a un usuario de Megabus a saber cuántos pasajes tiene según el cupo de su tarjeta. Cada pasaje cuesta $1.700 pesos.Además es importante alertar al usuario cuando su cupo se encuentre conmenos de 2 pasajes, se le informa que debe recargar su tarjeta.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 1";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);
  const btnVerEjercicio = document.getElementById("ejecutar");

  btnVerEjercicio.addEventListener("click", () => {
    //----------AQUI INICIA EL EJECICIÓ---------------------
    var alerta, cupo;

    const valorPasaje = 1700;

    cupo = prompt("Ingrese el valor del cupo de su tarjeta");
    var numeroPasajes = cupo / valorPasaje;

    document.getElementById("resultado").innerHTML =
      "La cantidad de pasajes que usted tiene es " + Math.round(numeroPasajes);

    if (numeroPasajes <= 2)
      alerta = "usted tiene 2 o menos pasajes, por favor recargue su tarjeta";
    else alerta = `Usted tiene ${Math.round(numeroPasajes)} pasajes`;
    alert(alerta);
  });
});
