//////////////////// ELEMENT RECUPERER //////////////////////
const easterEgg = document.getElementById("easter-egg");


/////////////////// Définition de la couleur random //////////////////////

document.documentElement.style.setProperty('--random-color', '#' + Math.floor(Math.random() * 9999999).toString(16));

console.log(document.documentElement.style.getPropertyValue('--random-color'));

///////////////// Fonction ////////////////////////

/**
 * Prends un élément html et lui ajoute la classe randomColor
 * @param {*} element 
 */

function randomColor(element) {
    element.classList.add('randomColor');
}

////////////////////// MAIN /////////////////////////////////

randomColor(easterEgg);