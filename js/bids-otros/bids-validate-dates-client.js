// const formulariouser = document.getElementById('formulario_user');
// const inputsuser = document.querySelectorAll('#formulario_user .datos-precisos input');

// const expresionesuser = {
// 	address: /^[a-zA-Z]{0,30}$/, // Letras
//   	city: /^[a-zA-Z]{0,30}$/, // Letras
// 	state: /^[a-zA-Z]{0,30}$/, // Letras
// 	zipcode: /^\d{0,5}$/, // Numeros hasta 5 digitos
// 	projectnameuser: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y numeros
// }

// const camposuser = {
// 	address: false,
// 	city: false,
// 	state: false,
// 	zipcode: false,
//     projectnameuser: false
// }

// const validarFormulariouser = (e) => {
// 	switch (e.target.name) {
// 	    case "address":
// 			validarCampouser(expresionesuser.address, e.target, 'address');
// 		    break;
// 		case "city":
// 			validarCampouser(expresionesuser.city, e.target, 'city');
// 		    break;
// 		case "state":
// 			validarCampouser(expresionesuser.state, e.target, 'state');
// 		    break;
//         case "zipcode":
// 			validarCampouser(expresionesuser.zipcode, e.target, 'zipcode');
// 		    break;
//         case "projectnameuser":
// 			validarCampouser(expresionesuser.projectnameuser, e.target, 'projectnameuser');
// 		    break;
// 	}
// }

// const validarCampouser = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		camposuser[camposuser] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		camposuser[camposuser] = false;
// 	}
// }

// inputsuser.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulariouser);
// 	input.addEventListener('blur', validarFormulariouser);
// });

// formulariouser.addEventListener('submit', (e) => {
	
//   e.preventDefault();

// 	const terminos = document.getElementById('terminos');
//     const selector = document.getElementById('typeproject');
	
//   if (camposuser.address && camposuser.city && camposuser.state && camposuser.zipcode && camposuser.projectnameuser && terminos.checked && selector.checked){
		
//     formulariouser.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});

// 	} else {

// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

// 	}


// });