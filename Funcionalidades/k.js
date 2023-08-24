const btnEnunciado11 = document.getElementById("botonOnce");
btnEnunciado11.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById(
    "enunciado"
  ).innerHTML = `Enunciado 11: Escribir un algoritmo que determine el equipo en el que será asignado un
  jugador. Se tiene como datos: nombre, cédula y edad. Y se clasifica en cada
  equipo así: Profesionales para jugadores entre 25 y 40 años, aficionados
  entre 18 y 24 años, Novatos entre 12 y 17 años. Otras edades no pueden
  ser asignados a ningún equipo.`;

  var divOriginal = document.getElementById("reemplazo");
  if (divOriginal == null && typeof divOriginal === "object") {
    var divOriginal = document.getElementById("ejecutar");
  }
  const nuevoElemento = document.createElement("button");
  nuevoElemento.innerHTML = "Ejecutar Ejercicio 11";
  nuevoElemento.id = "ejecutar";

  divOriginal.parentNode.replaceChild(nuevoElemento, divOriginal);

  const btnVerEjercicio = document.getElementById("ejecutar");
  btnVerEjercicio.addEventListener("click", () => {
    var nombre = prompt("Ingrese el nombre del jugador:");
    var cedula = prompt("Ingrese la cédula del jugador:");
    var edad = parseInt(prompt("Ingrese la edad del jugador:"));
    var equipo;

    if (isNaN(edad)) {
      alert(
        "uno de los caracteres ingresados no fue un numero, ejecute nuevamente el ejercicio"
      );
      document.getElementById("resultado").innerHTML =
        "Por favor, repita el ejercicio";
    } else {
      if (edad >= 25 && edad <= 40) {
        equipo = "Profesionales";
      } else if (edad >= 18 && edad <= 24) {
        equipo = "Aficionados";
      } else if (edad >= 12 && edad <= 17) {
        equipo = "Novatos";
      } else {
        equipo =
          "No puede ser asignado a ningún equipo por tener menos de 12 años.";
      }
      document.getElementById("resultado").innerHTML =
        "Nombre: " +
        nombre +
        "<br>Cedula de ciudadania: " +
        cedula +
        "<br>Edad: " +
        edad +
        "<br>Equipo Asignado: " +
        equipo;
    }
  });
});
