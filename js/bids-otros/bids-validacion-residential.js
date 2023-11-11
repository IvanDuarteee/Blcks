const formulario_residential = document.getElementById('formulario_residential');
const inputs_residential = document.querySelectorAll('#formulario_residential .datos-precisos input');

  const expresionesres = {

    'finished-basament-residential': /^\d{0,15}$/,
    'unfinished-basament-residential': /^\d{0,15}$/,
    'garage-residential': /^\d{0,15}$/,
    'sq-foot-first-residential': /^\d{0,15}$/,
    'sq-foot-second-residential': /^\d{0,15}$/,
    'sq-foot-third-residential': /^\d{0,15}$/,
    'front-porch-residential': /^\d{0,15}$/,
    'rear-porch-residential': /^\d{0,15}$/,
    'third-garage-residential': /^\d{0,15}$/,
    'bonus-room-residential': /^\d{0,15}$/,
    'carpet-stairs-residential': /^\d{0,15}$/,
    'oak-stairs-residential': /^\d{0,15}$/,
    'tji-joist-residential': /^\d{0,15}$/,
    'floor-trusses-residential': /^\d{0,15}$/,
    'roof-trusses-residential': /^\d{0,15}$/

  }

  const camposres = {

    'finished-basament-residential': false,
    'unfinished-basament-residential': false,
    'garage-residential': false,
    'sq-foot-first-residential': false,
    'sq-foot-second-residential': false,
    'sq-foot-third-residential': false,
    'front-porch-residential': false,
    'rear-porch-residential': false,
    'third-garage-residential': false,
    'bonus-room-residential': false,
    'carpet-stairs-residential': false,
    'oak-stairs-residential': false,
    'tji-joist-residential': false,
    'floor-trusses-residential': false,
    'roof-trusses-residential': false
  }

  const validarFormulariores = (e) => {
    switch (e.target.name) {
      case "finished-basament-residential":
        if (expresionesres["finished-basament-residential"].test(e.target.value)){
            
          document.getElementById('grupo__finished-basament-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__finished-basament-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__finished-basament-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__finished-basament-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__finished-basament-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["finished-basament-residential"] = true;
        } else {
          
          document.getElementById('grupo__finished-basament-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__finished-basament-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__finished-basament-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__finished-basament-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__finished-basament-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["finished-basament-residential"] = false;
        }

      break;
      case "unfinished-basament-residential":
        if (expresionesres["unfinished-basament-residential"].test(e.target.value)){
            
          document.getElementById('grupo__unfinished-basament-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__unfinished-basament-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__unfinished-basament-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__unfinished-basament-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__unfinished-basament-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["unfinished-basament-residential"] = true;

        } else {
          
          document.getElementById('grupo__unfinished-basament-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__unfinished-basament-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__unfinished-basament-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__unfinished-basament-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__unfinished-basament-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["unfinished-basament-residential"] = false;
        }
      break;
      case "garage-residential":
        if (expresionesres["garage-residential"].test(e.target.value)){
            
          document.getElementById('grupo__garage-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__garage-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__garage-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__garage-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__garage-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["garage-residential"] = true;

        } else {
          
          document.getElementById('grupo__garage-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__garage-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__garage-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__garage-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__garage-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["garage-residential"] = false;

        }

      break;
      case "sq-foot-first-residential":
        if (expresionesres["sq-foot-first-residential"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-first-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-first-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-first-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-first-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-first-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["sq-foot-first-residential"] = true;

        } else {
          
          document.getElementById('grupo__sq-foot-first-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-first-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-first-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-first-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-first-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["sq-foot-first-residential"] = false;
          
        }
      break;
      case "sq-foot-second-residential":
        if (expresionesres["sq-foot-second-residential"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-second-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-second-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-second-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-second-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-second-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["sq-foot-second-residential"] = true;

        } else {
          
          document.getElementById('grupo__sq-foot-second-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-second-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-second-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-second-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-second-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["sq-foot-second-residential"] = false;
          
        }
      break;
      case "sq-foot-third-residential":
        if (expresionesres["sq-foot-third-residential"].test(e.target.value)){
            
          document.getElementById('grupo__sq-foot-third-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-third-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-third-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__sq-foot-third-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__sq-foot-third-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["sq-foot-third-residential"] = true;

        } else {
          
          document.getElementById('grupo__sq-foot-third-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__sq-foot-third-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__sq-foot-third-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__sq-foot-third-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__sq-foot-third-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["sq-foot-third-residential"] = false;
          
        }
      break;
      case "front-porch-residential":
        if (expresionesres["front-porch-residential"].test(e.target.value)){
            
          document.getElementById('grupo__front-porch-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__front-porch-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__front-porch-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__front-porch-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__front-porch-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["front-porch-residential"] = true;

        } else {
          
          document.getElementById('grupo__front-porch-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__front-porch-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__front-porch-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__front-porch-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__front-porch-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["front-porch-residential"] = false;
          
        }
      break;
      case "rear-porch-residential":
        if (expresionesres["rear-porch-residential"].test(e.target.value)){
            
          document.getElementById('grupo__rear-porch-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__rear-porch-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__rear-porch-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__rear-porch-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__rear-porch-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["rear-porch-residential"] = true;

        } else {
          
          document.getElementById('grupo__rear-porch-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__rear-porch-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__rear-porch-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__rear-porch-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__rear-porch-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["rear-porch-residential"] = false;
          
        }
      break;
      case "third-garage-residential":
        if (expresionesres["third-garage-residential"].test(e.target.value)){
            
          document.getElementById('grupo__third-garage-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__third-garage-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__third-garage-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__third-garage-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__third-garage-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["third-garage-residential"] = true;

        } else {
          
          document.getElementById('grupo__third-garage-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__third-garage-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__third-garage-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__third-garage-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__third-garage-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["third-garage-residential"] = false;
          
        }
      break;
      case "bonus-room-residential":
        if (expresionesres["bonus-room-residential"].test(e.target.value)){
            
          document.getElementById('grupo__bonus-room-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__bonus-room-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__bonus-room-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__bonus-room-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__bonus-room-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["bonus-room-residential"] = true;

        } else {
          
          document.getElementById('grupo__bonus-room-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__bonus-room-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__bonus-room-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__bonus-room-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__bonus-room-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["bonus-room-residential"] = false;
          
        }
      break;
      case "carpet-stairs-residential":
        if (expresionesres["carpet-stairs-residential"].test(e.target.value)){
            
          document.getElementById('grupo__carpet-stairs-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__carpet-stairs-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__carpet-stairs-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__carpet-stairs-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__carpet-stairs-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["grupo__carpet-stairs-residential"] = true;

        } else {
          
          document.getElementById('grupo__carpet-stairs-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__carpet-stairs-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__carpet-stairs-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__carpet-stairs-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__carpet-stairs-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["carpet-stairs-residential"] = false;
          
        }
      break;
      case "oak-stairs-residential":
        if (expresionesres["oak-stairs-residential"].test(e.target.value)){
            
          document.getElementById('grupo__oak-stairs-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__oak-stairs-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__oak-stairs-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__oak-stairs-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__oak-stairs-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["oak-stairs-residential"] = true;

        } else {
          
          document.getElementById('grupo__oak-stairs-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__oak-stairs-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__oak-stairs-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__oak-stairs-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__oak-stairs-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["oak-stairs-residential"] = false;
          
        }
      break;
      case "tji-joist-residential":
        if (expresionesres["tji-joist-residential"].test(e.target.value)){
            
          document.getElementById('grupo__tji-joist-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__tji-joist-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__tji-joist-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__tji-joist-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__tji-joist-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["tji-joist-residential"] = true;

        } else {
          
          document.getElementById('grupo__tji-joist-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__tji-joist-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__tji-joist-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__tji-joist-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__tji-joist-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["tji-joist-residential"] = false;
          
        }
      break;
      case "floor-trusses-residential":
        if (expresionesres["floor-trusses-residential"].test(e.target.value)){
            
          document.getElementById('grupo__floor-trusses-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__floor-trusses-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__floor-trusses-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__floor-trusses-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__floor-trusses-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["floor-trusses-residential"] = true;

        } else {
          
          document.getElementById('grupo__floor-trusses-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__floor-trusses-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__floor-trusses-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__floor-trusses-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__floor-trusses-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["floor-trusses-residential"] = false;
          
        }
      break;
      case "roof-trusses-residential":
        if (expresionesres["roof-trusses-residential"].test(e.target.value)){
            
          document.getElementById('grupo__roof-trusses-residential').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__roof-trusses-residential').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__roof-trusses-residential i').classList.remove('fa-times-circle');
          document.querySelector('#grupo__roof-trusses-residential i').classList.add('fa-check-circle');
          document.querySelector('#grupo__roof-trusses-residential .formulario__input-error').classList.remove('formulario__input-error-activo');
          camposres["roof-trusses-residential"] = true;

        } else {
          
          document.getElementById('grupo__roof-trusses-residential').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__roof-trusses-residential').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__roof-trusses-residential i').classList.add('fa-times-circle');
          document.querySelector('#grupo__roof-trusses-residential i').classList.remove('fa-check-circle');
          document.querySelector('#grupo__roof-trusses-residential .formulario__input-error').classList.add('formulario__input-error-activo');
          camposres["roof-trusses-residential"] = false;
          
        }
      break;

    }

  }

  inputs_residential.forEach((input) => {

    input.addEventListener("keyup", validarFormulariores);
    input.addEventListener("blur", validarFormulariores);

  })

  formulario_residential.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if ((camposres["unfinished-basament-residential"]) )   {

      formulario_residential.reset();

      document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
      
      setTimeout(() => {
        document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
      }, 5000);

      document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
          icono.classList.remove("formulario__grupo-correcto");
      });

    } else {

      formulario_residential.reset();

      document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
      setTimeout(() => {
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
      }, 3000);

    } 


  });