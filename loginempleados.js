 // Importa Firebase
 import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
 import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

 // TODO: Replace the following with your app's Firebase project configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBusGEqd-vLPlsWlcxs42DTE5VixtGkiv8",
  authDomain: "blackstone-2471f.firebaseapp.com",
  projectId: "blackstone-2471f",
  storageBucket: "blackstone-2471f.appspot.com",
  messagingSenderId: "633531987054",
  appId: "1:633531987054:web:4b3f3f25843a41f7bee27f",
  measurementId: "G-442ZGBLDTX"
};
 
 const app = initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);

  // ...

 
// Manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
  
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    // Inicia sesión con Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // El inicio de sesión fue exitoso
        var user = userCredential.user;
        console.log('Inicio de sesión exitoso:', user);
  
        // Redirige a la página inicial de los empleados
        window.location.href = 'pagina_inicial_empleados.html';
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error al iniciar sesión:', errorMessage);
  
        // Muestra el mensaje de error al usuario (puedes personalizar esto según tus necesidades)
        alert(errorMessage);
      });
  });
  