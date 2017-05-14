
//función onclick llamamamos a todos los id correspondientes a los input type
//otrogamos.value para determinar su valor y así poder imprimir la información abajo de la página
function mostrarData(){

	var nombre = document.getElementById("name").value;
	var nombreCompleto = document.getElementById("lastName").value;
	var email = document.getElementById("correo").value;
	var direccion = document.getElementById("address").value;
	var telefono = document.getElementById("phone").value;
	var select =document.getElementById("selecciona").selectedIndex;
	var checkbox = document.getElementById("caja").value;
	var usuario = document.getElementById("clientes");

//condiciones para que el usuario llene el formulario y no lo deje vacío
//intenté validar formulario con expresiones regulares para que fuera más preciso pero no lo logré
//se llama a cada una de las variables para generar la validación si no retornará un alert

	if (nombre === ""){
		alert("escriba su nombre")
		
	}else if (nombreCompleto === ""){
		alert("escriba su apellido")


	}else if (email === ""){
		alert("escriba su email")
		

	}else if (direccion === ""){
		alert("escriba su dirección")
		

	}else if (telefono === ""){
		alert("ingrese su teléfono")
		

	}else if(select ===  ""){
		alert("seleccione un pack")

	}else if(!document.getElementById("caja").checked){
		alert("Recibe nuestro Newsletter");//checked para validar el checked

	}else{
		usuario.innerHTML += "<h1>Sus datos son: </h1>"+ usuario;            
	}//llamo a la variable usuario cuyo id corresponde a un div vacío para que imprima la información ingresada 
	//al final de la página
	//por el momento no imprime

}










