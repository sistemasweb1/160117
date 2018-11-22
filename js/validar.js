function validar() {
	var nombre, apellidopaterno, apellidomaterno, correo, usuario, contraseña, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidopaterno = document.getElementById("apellidopaterno").value;
    apellidomaterno = document.getElementById("apellidomaterno").value;
    fecha = document.getElementById("fecha").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    telefono = document.getElementById("telefono").value;
  
  expresion =  /\w+@\w+\.+[a-z]/;

if(nombre === ""|| apellido paterno === "" || apellido materno === "" 
|| fecha === "" || correo === "" || usuario === "" || contraseña ==="" || telefono === "") {
	alert("Los campos son obligatorios");
	return false;
}

else if(nombre.lenght>30) {
	alert("El nombre es muy largo");
	return false;
}

else if(apellidopaterno.lenght>30 || apellidomaterno.lenght>30) {
	alert("El apellido es muy largo");
	return false;
}


else if(correo.lenght>50 || usuario.lenght>50) {
	alert("Demasiado largo"); 
	return false; 
} 
else if(!expresion.test(correo)){
	alert("El correo no es valido");
	return false;
}

else if(contraseña.lenght>30) {
	alert("La contraseña es muy larga"); 
	return false; 
}

else if(telefono.lenght>10) {
	alert("Ingrese numero de 10 digitos"); 
	return false; 
}

else if(isNaN(telefono)) {
	alert("El telefono ingresado no es un número"); 
	return false; 
}

}