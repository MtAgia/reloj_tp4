/*
Crear una web con un reloj
*/
function obtenerFecha() {
  let fecha = document.querySelector("#fecha");
  let hora = document.querySelector("#hora");
  let fechaActual = new Date();

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  fecha.innerHTML = `${
    diasSemana[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  // am antes de la mañana pm despues de la mañana
    if (fechaActual.getHours() < 10 || fechaActual.getHours() < 12) {
      hora.innerHTML = `0${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} AM`;
      if (fechaActual.getMinutes() < 10) {
        hora.innerHTML = `${fechaActual.getHours()}:0${fechaActual.getMinutes()}:${fechaActual.getSeconds()}AM`;
      }
      if (fechaActual.getSeconds() < 10) {
        hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:0${fechaActual.getSeconds()}AM`;
      }
    }else if (fechaActual.getHours() < 10 || fechaActual.getHours() > 12) {
       hora.innerHTML = `0${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} PM`;
       if (fechaActual.getMinutes() < 10) {
         hora.innerHTML = `${fechaActual.getHours()}:0${fechaActual.getMinutes()}:${fechaActual.getSeconds()}PM`;
       }
       if (fechaActual.getSeconds() < 10) {
         hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:0${fechaActual.getSeconds()}PM`;
       }
    } else {
      hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
    }
  }
  
  //hora.innerHTML = `0${fechaActual.getHours()}:0${fechaActual.getMinutes()}:0${fechaActual.getSeconds()}`;
setInterval(obtenerFecha, 1000);
