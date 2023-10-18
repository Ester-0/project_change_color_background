//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// SIN QUE SEA ALEATORIO
// function changeColor() {
//     document.querySelector("body").style.backgroundColor = colors[0];
// }

//AYUDA para que sea aleatorio: https://www.javatpoint.com/how-to-pick-random-elements-from-an-array


function changeColor() {
     
    document.querySelector("body").style.backgroundColor = colors[Math.floor(Math.random() * colors.legth)];
        
           
    }