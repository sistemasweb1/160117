<?php
include 'cn.php';

// recibir datos y almacenar variables
$nombre = $_POST["nombre"];
$apellidopaterno = $_POST["apellidopaterno"];
$apellidomaterno = $_POST["apellidomaterno"];
$fecha = $_POST["fecha"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];
$telefono = $_POST["telefono"];

//Consulta para insertar
$insertar = "INSERT INTO registro (nombre, apellidopaterno, apellidomaterno, fecha, correo, usuario, contraseña, telefono)
VALUES ('$nombre', '$apellidopaterno', '$apellidomaterno', '$fecha', '$correo', '$usuario', '$contraseña', '$telefono')";

//Ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);

if (!$resultado){
	echo 'Error al registrarse';

}else {
	echo 'Usuario registrado exitosamente';
}

//Cerrar conexion
mysqli_close($conexion);