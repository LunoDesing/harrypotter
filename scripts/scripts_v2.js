const nombreCache = 'pagina-principal-v2';

window.addEventListener('beforeunload', function(event) {
    // Intentar borrar la caché específica
    if ('caches' in window) {
        caches.open(nombreCache).then(function(cache) {
            cache.keys().then(function(keys) {
                keys.forEach(function(key) {
                    cache.delete(key);
                });
            });
        });
    }
});


// --------------------------- music -------------------------------

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");
const progressBar = document.querySelector(".progress-bar");

playPauseBtn.addEventListener("click", togglePlayPause);
rewindBtn.addEventListener("click", rewind10Seconds);
forwardBtn.addEventListener("click", forward10Seconds);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  } else {
    audio.pause();
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  }
}

function rewind10Seconds() {
  audio.currentTime -= 10;
}

function forward10Seconds() {
  audio.currentTime += 10;
}

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
});

// ---------------------- temporizador -------------------------
function updateTimer() {
  const targetDate = new Date("July 19, 2024 22:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});

// --------------------------------fotos---------------------------------


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('mostrarBoton');
  const textoDesplegable = document.getElementById('textoDesplegable');

  boton.addEventListener('click', function () {
    textoDesplegable.classList.toggle('mostrar');
  });
});

// --------------------------------Invitados---------------------------------


 // Función para buscar la mesa por nombre
 function buscarMesa() {
  // Obtener el valor del nombre de la búsqueda
  var nombreBuscado = document.getElementById("nombreBusqueda").value;

  // Validar si se ingresó un nombre
  if (nombreBuscado.trim() !== "") {
    // Simular una búsqueda (puedes ajustar esto según tu situación real)
    var mesaInfo = obtenerInformacionMesa(nombreBuscado);

    // Validar si se encontró la mesa
    if (mesaInfo !== null) {
      // Crear el texto a desplegar
      var texto = "¡Hola, " + nombreBuscado + "! Le informamos que la mesa asignada es la número: " + mesaInfo.mesa + " y tu invitación corresponde para: " + mesaInfo.invitadosPermitidos + " persona/as.";

      // Mostrar el texto en el div de resultado con transición suave
      var resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerText = texto;
      resultadoDiv.style.display = "block"; // Mostrar el div
      resultadoDiv.style.opacity = 1;

      // Limpiar el input de búsqueda
      document.getElementById("nombreBusqueda").value = "";
    } else {
      alert("Lo siento, no se encontró ninguna mesa para el nombre ingresado.");
    }
  } else {
    alert("Por favor, ingrese su nombre.");
  }
}

// Función de ejemplo para obtener la información de la mesa (puedes personalizar según tus necesidades)
function obtenerInformacionMesa(nombre) {
  // Simulamos una búsqueda, aquí deberías implementar la lógica real
  var invitados = [
    { nombre: "Juan", mesa: 3, invitadosPermitidos: 1 },
    { nombre: "Familia Diaz", mesa: 7, invitadosPermitidos: 4 },
    { nombre: "Carlos", mesa: 3, invitadosPermitidos: 4 },
    { nombre: "Noelia Fuenzalida", mesa: 3, invitadosPermitidos: 1 }
    // ... más invitados
  ];

  for (var i = 0; i < invitados.length; i++) {
    if (invitados[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return { mesa: invitados[i].mesa, invitadosPermitidos: invitados[i].invitadosPermitidos };
    }
  }

  return null; // Retornar null si no se encuentra el nombre
}


AOS.init();



