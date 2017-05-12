

function mostrarData(){

var nombre = document.getElementById("name").value;
var nombreCompleto = document.getElementById("lastName").value;
var email = document.getElementById("correo").value;
var direccion = document.getElementById("address").value;
var telefono = document.getElementById("phone").value;
var select =document.getElementById("selecciona").value;
var checkbox = document.getElementById("caja").value;
var usuario = document.getElementById("clientes");

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
        alert("Recibe nuestro Newsletter");
        
    }else{
 		usuario.innerHTML = "<h1>Sus datos son: </h1
}

}










