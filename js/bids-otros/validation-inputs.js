function validarNumero(input) {
    input.addEventListener('input',function(){
      if (this.value.length > 5) 
         this.value = this.value.slice(0,5); 
    })
};

// Validacion y actualizacion de date

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (month < 10) {
    month = `0${month}`;
}
  
if (day < 10) {
day = `0${day}`;
}
  
const minDate = `${year}-${month}-${day}`;

document.getElementById('validationCustom07').setAttribute('min', minDate);