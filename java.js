
const button= document.querySelector("button");

button.onclick= function(){
	
	let name= prompt ("Indica tu predicción para el partido de esta noche");
	alert ("Tu predicción es: " +name+ ". ¡Muchas gracias y suerte!");
};