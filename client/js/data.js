document.addEventListener('DOMContentLoaded', function () {
  // Crear boton de submit para todos los forms

  const submitButton = document.getElementById('submitForms');
  submitButton.addEventListener('click', function () {
    // Declarar variables de los forms
    // Creamos los objetos
    const formInfo = [
      { formId: 'form1', optionName: 'form1_option' },
      { formId: 'form2', optionName: 'form2_option' },
      { formId: 'form3', optionName: 'form3_option' },
      { formId: 'form4', optionName: 'form4_option' },
    ];

    // Creamos el combinado de objetos
    const combinedData = new FormData();

    // Iteramos el array y lo añadimos al FormData
    for (const info of formInfo) {
      const formData = new FormData(document.getElementById(info.formId));
      combinedData.append(info.optionName, formData.get(info.optionName));
    }

    // Peticion al server
    fetch('../../server/resultados.php', {
      method: 'POST',
      body: combinedData,
    })
      .then((response) => response.text())
      .then((result) => {
        // Mostrar el resultado en la pantalla dependiendo del score
        if (result > 2) {
          swal
            .fire({
              title: '¡Buen trabajo!',
              text: 'Tu puntuación final fue de ' + result + '/4 puntos',
              icon: 'success',
            })
            .then((value) => {
              location.href = 'index.html';
            });
        } else {
          swal
            .fire({
              title: '¡Que mal!',
              text: 'Tu puntuación final fue solo de ' + result + '/4 puntos',
              icon: 'error',
            })
            .then((value) => {
              location.href = 'index.html';
            });
        }

        // Cambiar color dependiend de la respuesta
      })

      // Error msg
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  });
});

// Variables
let tiempo = document.getElementById('tiempo');

// Función de la alerta
function fireSweetAlert() {
  swal
    .fire({
      title: '¡Se acabo el tiempo!',
      text: 'Ya pasaron los 60 segundos, intentalo de nuevo!',
      icon: 'error',
    })
    .then((value) => {
      location.href = 'index.html';
    });
}

// Función del timer
window.onload = timerFunc;
function timerFunc() {
  let sec = 60;
  timer = setInterval(() => {
    tiempo.innerHTML =
      '<h4>Tienes <b>' + sec + '</b> segundos para terminar. </h4>';
    sec--;
    if (sec == 0) {
      fireSweetAlert();
      clearInterval(timer);
    }
  }, 800);
}
