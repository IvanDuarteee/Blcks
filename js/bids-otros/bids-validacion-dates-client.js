const formulariouser = document.getElementById('formulario_user');
const inputsuser = document.querySelectorAll('#formulario_user .datos-precisos input');

const expresionesuser = {
	nameuser: /^[a-zA-Z]{0,30}$/, // Letras
  	lastnameuser: /^[a-zA-Z]{0,30}$/, // Letras
	phoneuser: /^\d{0,10}$/, // Numeros hasta 10 digitos
	emailuser: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 	projectnameuser: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y numeros
  	nicknameuser: /^[a-zA-Z0-9\_\-]{6,15}$/, //letras, numeros, guion y guion bajo
  	password: /^.{8,15}$/ // 8 a 15 digitos.
}

const camposuser = {
	nameuser: false,
	lastnameuser: false,
	phoneuser: false,
	emailuser: false,
  	projectnameuser: false,
	nicknameuser: false,
	password: false
}

const validarFormulariouser = (e) => {
	switch (e.target.name) {
		case "nameuser":
			validarCampouser(expresionesuser.nameuser, e.target, 'nameuser');
		break;
		case "lastnameuser":
			validarCampouser(expresionesuser.lastnameuser, e.target, 'lastnameuser');
		break;
		case "phoneuser":
			validarCampouser(expresionesuser.phoneuser, e.target, 'phoneuser');
		break;
    	case "emailuser":
			validarCampouser(expresionesuser.emailuser, e.target, 'emailuser');
		break;
    	case "projectnameuser":
			validarCampouser(expresionesuser.projectnameuser, e.target, 'projectnameuser');
		break;
    	case "nicknameuser":
			validarCampouser(expresionesuser.nicknameuser, e.target, 'nicknameuser');
		break;
		case "password":
			validarCampouser(expresionesuser.password, e.target, 'password');
			validarPassword2();
		break;
		case "repetpassword":
			validarPassword2();
		break;
		
	}
}

const validarCampouser = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		camposuser[camposuser] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		camposuser[camposuser] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('repetpassword');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById('grupo__repetpassword').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__repetpassword').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__repetpassword i').classList.add('fa-times-circle');
		document.querySelector('#grupo__repetpassword i').classList.remove('fa-check-circle');
		document.querySelector('#grupo__repetpassword .formulario__input-error').classList.add('formulario__input-error-activo');
		camposuser['password'] = false;
	} else {
		document.getElementById('grupo__repetpassword').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__repetpassword').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__repetpassword i').classList.remove('fa-times-circle');
		document.querySelector('#grupo__repetpassword i').classList.add('fa-check-circle');
		document.querySelector('#grupo__repetpassword .formulario__input-error').classList.remove('formulario__input-error-activo');
		camposuser['password'] = true;
	}
}

inputsuser.forEach((input) => {
	input.addEventListener('keyup', validarFormulariouser);
	input.addEventListener('blur', validarFormulariouser);
});

formulariouser.addEventListener('submit', (e) => {
	
  e.preventDefault();

	const terminos = document.getElementById('terminos');
  const selector = document.getElementById('typeproject');
	
  if (camposuser.nameuser && camposuser.lastnameuser && camposuser.phoneuser && camposuser.emailuser && camposuser.nicknameuser && camposuser.password && terminos.checked && selector.checked){
		
    formulariouser.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

	} else {

		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

	}


});