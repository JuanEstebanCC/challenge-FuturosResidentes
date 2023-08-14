<?php


// Recibir peticion
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Crear el array
    $totalScores = array();


    // Recorrer el array en cada posicion
    for ($i = 1; $i <= 4; $i++) {
        // Verificamos si hay valor para concatenar
        if (isset($_POST['form' . $i . '_option'])) {
            // Convertimos a Integer y asignamos
            $form_option = intval($_POST['form' . $i . '_option']);

            // Almacenar el valor de cada opcion en el array
            $totalScores['form' . $i] = $form_option;

        }
    }

    // Calcular la puntuacion final sumando las puntuaciones (scores)
    $finalScore = array_sum($totalScores);

    // Mandamos al client la puntuacion
    echo $finalScore;


}
?>