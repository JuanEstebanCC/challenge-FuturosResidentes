// Variables
let tiempo = document.getElementById('tiempo');

// Función de la alerta
function fireSweetAlert() {
  swal
    .fire({
      title: '¡Se acabo el tiempo!',
      text: 'Ya pasaron los 30 segundos, intentalo de nuevo!',
      icon: 'error',
      defau: true,
    })
    .then((value) => {
      location.href = 'index.html';
    });
}

// Función del timer
window.onload = timerFunc;
function timerFunc() {
  let sec = 30;
  timer = setInterval(() => {
    tiempo.innerHTML = 'Tienes ' + sec + ' segundos para terminar';
    sec--;
    if (sec == 0) {
      fireSweetAlert();
      clearInterval(timer);
    }
  }, 800);
}
