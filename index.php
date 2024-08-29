
<?php

if (isset($_POST["enviar1"])) {
    $name1 = $_POST['name1'];
    $musica = $_POST['musica'];
    
    

    $destinatario1 = "genovevab2009@gmail.com"; #aqui insertar el correo al que deseas que llegue el mensaje que envies en el formulario
    $asunto1 = "nuevo mensaje de $name1 \n \n \n";

    $contenido1 = "Nombre: $name1 \n \n";
    $contenido1 .= "Recomienda: $musica \n \n";

    $header1 = "From: Geno_mis15@net.com"; #aqui insertas el correo del remitente en el encabezado del correo.

    $mail = mail($destinatario1, $asunto1, $contenido1, $header1);

    if ($mail) {
        echo "<script>alert('El correo se envio correctamente :)')</script>";
        echo "<script> setTimeout(\"location.href='index.html#playlist'\", 1000)</script>";


    } else {
        echo "<script>alert('El correo no se pudo enviar, intente nuevamente :(')</script>";
    }
}







if (isset($_POST["enviar"])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $acepto = $_POST['acepto'];
    $mensaje = $_POST['mensaje'];
    
    

    $destinatario = "lunocoorp@gmail.com"; #aqui insertar el correo al que deseas que llegue el mensaje que envies en el formulario
    $asunto = "nuevo mensaje de $nombre \n \n \n";

    $contenido = "Nombre: $nombre \n";
    $contenido .= "Email: $email \n \n \n";
    $contenido .= "$nombre: \n $acepto \n \n \n";
    $contenido .= "mensaje: $mensaje";

    $header = "From: ABBY_15_AÑOS@net.com"; #aqui insertas el correo del remitente en el encabezado del correo.

    $mail = mail($destinatario, $asunto, $contenido, $header);

    if ($mail) {
        echo "<script>alert('El correo se envio correctamente :)')</script>";
        echo "<script> setTimeout(\"location.href='index.html#correo'\", 1000)</script>";


    } else {
        echo "<script>alert('El correo no se pudo enviar, intente nuevamente :(')</script>";
    }
}
?>
     