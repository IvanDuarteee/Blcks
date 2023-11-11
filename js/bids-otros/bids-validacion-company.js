const formulario = document.getElementById('formulario_company');
const inputs = document.querySelectorAll('#formulario_company .datos-precisos input');

  const expresiones = {

    'sq-foot-1-company': /^\d{0,15}$/,
    'sq-foot-2-company': /^\d{0,15}$/,
    'sq-foot-3-company': /^\d{0,15}$/,
    'garage-company': /^\d{0,15}$/,
    'front-porch-company': /^\d{0,15}$/,
    'extra-garage-company': /^\d{0,15}$/,
    'club-house-company': /^\d{0,15}$/,
    'pool-house-company': /^\d{0,15}$/,
    'maintenance-building-company': /^\d{0,15}$/,
    'pavilion-company': /^\d{0,15}$/,
    'dog-run-company': /^\d{0,15}$/,
    'smoking-pavilion-company': /^\d{0,15}$/,
    'trash-compactor-company': /^\d{0,15}$/,
    'kayak-company': /^\d{0,15}$/

  }

  const campos = {

    'sq-foot-1-company': false,
    'sq-foot-2-company': false,
    'sq-foot-3-company': false,
    'garage-company': false,
    'front-porch-company': false,
    'extra-garage-company': false,
    'club-house-company': false,
    'pool-house-company': false,
    'maintenance-building-company': false,
    'pavilion-company': false,
    'dog-run-company': false,
    'smoking-pavilion-company': false,
    'trash-compactor-company': false,
    'kayak-company': false
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "sq-foot-1-company":
        if (expresiones["sq-foot-1-company"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-first-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-first-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-first-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-first-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-first-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["sq-foot-1-company"] = true;
        } else {
          
          document.getElementById('grupo__sq-foot-first-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-first-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-first-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-first-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-first-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["sq-foot-1-company"] = false;
        }

      break;
      case "sq-foot-2-company":
        if (expresiones["sq-foot-2-company"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-second-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-second-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-second-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-second-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-second-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["sq-foot-2-company"] = true;

        } else {
          
          document.getElementById('grupo__sq-foot-second-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-second-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-second-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-second-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-second-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["sq-foot-2-company"] = false;
        }
      break;
      case "sq-foot-3-company":
        if (expresiones["sq-foot-3-company"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-third-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-third-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-third-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-third-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-third-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["sq-foot-3-company"] = true;

        } else {
          
          document.getElementById('grupo__sq-foot-third-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-third-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-third-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-third-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-third-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["sq-foot-3-company"] = false;

        }

      break;
      case "garage-company":
        if (expresiones["garage-company"].test(e.target.value)){
            
          document.getElementById('grupo__garage-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__garage-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__garage-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__garage-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__garage-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["garage-company"] = true;

        } else {
          
          document.getElementById('grupo__garage-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__garage-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__garage-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__garage-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__garage-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["garage-company"] = false;
          
        }
      break;
      case "front-porch-company":
        if (expresiones["front-porch-company"].test(e.target.value)){
            
          document.getElementById('grupo__front-porch-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__front-porch-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__front-porch-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__front-porch-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__front-porch-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["front-porch-company"] = true;

        } else {
          
          document.getElementById('grupo__front-porch-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__front-porch-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__front-porch-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__front-porch-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__front-porch-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["front-porch-company"] = false;
          
        }
      break;
      case "extra-garage-company":
        if (expresiones["extra-garage-company"].test(e.target.value)){
            
          document.getElementById('grupo__extra-garage-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__extra-garage-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__extra-garage-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__extra-garage-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__extra-garage-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["extra-garage-company"] = true;

        } else {
          
          document.getElementById('grupo__extra-garage-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__extra-garage-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__extra-garage-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__extra-garage-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__extra-garage-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["extra-garage-company"] = false;
          
        }
      break;
      case "club-house-company":
        if (expresiones["club-house-company"].test(e.target.value)){
            
          document.getElementById('grupo__club-house-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__club-house-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__club-house-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__club-house-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__club-house-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["club-house-company"] = true;

        } else {
          
          document.getElementById('grupo__club-house-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__club-house-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__club-house-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__club-house-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__club-house-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["club-house-company"] = false;
          
        }
      break;
      case "pool-house-company":
        if (expresiones["pool-house-company"].test(e.target.value)){
            
          document.getElementById('grupo__pool-house-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__pool-house-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__pool-house-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__pool-house-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__pool-house-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["pool-house-company"] = true;

        } else {
          
          document.getElementById('grupo__pool-house-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__pool-house-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__pool-house-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__pool-house-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__pool-house-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["pool-house-company"] = false;
          
        }
      break;
      case "maintenance-building-company":
        if (expresiones["maintenance-building-company"].test(e.target.value)){
            
          document.getElementById('grupo__maintenance-building-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__maintenance-building-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__maintenance-building-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__maintenance-building-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__maintenance-building-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["maintenance-building-company"] = true;

        } else {
          
          document.getElementById('grupo__maintenance-building-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__maintenance-building-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__maintenance-building-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__maintenance-building-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__maintenance-building-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["maintenance-building-company"] = false;
          
        }
      break;
      case "pavilion-company":
        if (expresiones["pavilion-company"].test(e.target.value)){
            
          document.getElementById('grupo__pavilion-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__pavilion-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__pavilion-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__pavilion-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__pavilion-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["pavilion-company"] = true;

        } else {
          
          document.getElementById('grupo__pavilion-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__pavilion-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__pavilion-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__pavilion-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__pavilion-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["pavilion-company"] = false;
          
        }
      break;
      case "dog-run-company":
        if (expresiones["dog-run-company"].test(e.target.value)){
            
          document.getElementById('grupo__dog-run-pavilion-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__dog-run-pavilion-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__dog-run-pavilion-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__dog-run-pavilion-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__dog-run-pavilion-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["grupo__dog-run-pavilion-company"] = true;

        } else {
          
          document.getElementById('grupo__dog-run-pavilion-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__dog-run-pavilion-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__dog-run-pavilion-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__dog-run-pavilion-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__dog-run-pavilion-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["dog-run-company"] = false;
          
        }
      break;
      case "smoking-pavilion-company":
        if (expresiones["smoking-pavilion-company"].test(e.target.value)){
            
          document.getElementById('grupo__smoking-pavilion-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__smoking-pavilion-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__smoking-pavilion-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__smoking-pavilion-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__smoking-pavilion-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["smoking-pavilion-company"] = true;

        } else {
          
          document.getElementById('grupo__smoking-pavilion-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__smoking-pavilion-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__smoking-pavilion-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__smoking-pavilion-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__smoking-pavilion-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["smoking-pavilion-company"] = false;
          
        }
      break;
      case "trash-compactor-company":
        if (expresiones["trash-compactor-company"].test(e.target.value)){
            
          document.getElementById('grupo__trash-compactor-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__trash-compactor-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__trash-compactor-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__trash-compactor-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__trash-compactor-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["trash-compactor-company"] = true;

        } else {
          
          document.getElementById('grupo__trash-compactor-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__trash-compactor-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__trash-compactor-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__trash-compactor-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__trash-compactor-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["trash-compactor-company"] = false;
          
        }
      break;
      case "kayak-company":
        if (expresiones["kayak-company"].test(e.target.value)){
            
          document.getElementById('grupo__kayak-pavilion-company').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__kayak-pavilion-company').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__kayak-pavilion-company i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__kayak-pavilion-company i').classList.add('fa-check-circle');
          document.querySelector('#grupo__kayak-pavilion-company .formulario__input-error').classList.remove('formulario__input-error-activo');
          campos["kayak-company"] = true;

        } else {
          
          document.getElementById('grupo__kayak-pavilion-company').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__kayak-pavilion-company').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__kayak-pavilion-company i').classList.add('fa-times-circle');
          document.querySelector('#grupo__kayak-pavilion-company i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__kayak-pavilion-company .formulario__input-error').classList.add('formulario__input-error-activo');
          campos["kayak-company"] = false;
          
        }
      break;

    }

  }

  // const validarFormulario = (e) => {

  //   switch (e.target.name) {
  //     case "sq-foot-1-company":
  //       validarCampos(expresiones.sq-foot-1-company, e.target, 'sq-foot-1-company');
  //     break;
  //     case "sq-foot-2-company":
  //       validarCampos(expresiones.sq-foot-2-company, e.target, 'sq-foot-2-company');
  //     break;
  //     case "sq-foot-3-company":
  //       validarCampos(expresiones.sq-foot-3-company, e.target, 'sq-foot-3-company');
  //     break;
  //     case "garage-company":
  //       validarCampos(expresiones.garage-company, e.target, 'garage-company');
  //     break;
  //     case "front-porch-company":
  //       validarCampos(expresiones.front-porch-company, e.target, 'front-porch-company');
  //     break;
  //     case "extra-garage-company":
  //       validarCampos(expresiones.extra-garage-company, e.target, 'extra-garage-company');
  //     break;
  //     case "club-house-company":
  //       validarCampos(expresiones.club-house-company, e.target, 'club-house-company');
  //     break;
  //     case "pool-house-company":
  //       validarCampos(expresiones.pool-house-company, e.target, 'pool-house-company');
  //     break;
  //     case "maintenance-building-company":
  //       validarCampos(expresiones.maintenance-building-company, e.target, 'maintenance-building-company');
  //     break;
  //     case "pavilion-company":
  //       validarCampos(expresiones.pavilion-company, e.target, 'pavilion-company');
  //     break;
  //     case "dog-run-company":
  //       validarCampos(expresiones.dog-run-company, e.target, 'dog-run-company');
  //     break;
  //     case "smoking-pavilion-company":
  //       validarCampos(expresiones.smoking-pavilion-company, e.target, 'smoking-pavilion-company');
  //     break;
  //     case "trash-compactor-company":
  //       validarCampos(expresiones.trash-compactor-company, e.target, 'trash-compactor-company');
  //     break;
  //     case "kayak-company":
  //       validarCampos(expresiones.kayak-company, e.target, 'kayak-company');
  //     break;
  
  //   }

  // }


  // const validarCampos = (expresion, input, campo) => {

  //   if (expresion.test(input.value)) {
            
  //     document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
  //     document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
  //     document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
  //     document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
  //     document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

  //   } else {
      
  //     document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
  //     document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
  //     document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
  //     document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
  //     document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      
  //   }



  // }


  inputs.forEach((input) => {

    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);

  })

  formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if ((campos["sq-foot-1-company"])) {

      formulario.reset();

      document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
      
      setTimeout(() => {
        document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
      }, 5000);

      document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
          icono.classList.remove("formulario__grupo-correcto");
      });

    } else {

      formulario.reset();

      document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
      setTimeout(() => {
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
      }, 3000);

    } 


  });