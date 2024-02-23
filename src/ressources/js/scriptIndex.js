//////////////////// ELEMENT RECUPERER //////////////////////
const easterEgg = document.getElementById("easter-egg");
const imgFr = document.getElementById("vf");
const imgEng = document.getElementById("ve");

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

/**
 * Fonction associer à un event listener de click sur les deux images (imgFr et imgEng)
 */

function changementDeLangue() {
    console.log("Changement de langue");
    if (imgFr.classList.contains('visible')) {
        imgFr.classList.remove('visible');
        imgFr.classList.add('cachee');
        imgEng.classList.remove('inexistant');
        imgEng.classList.remove('cachee');
        imgEng.classList.add('visible');
    } else {
        imgEng.classList.remove('visible');
        imgEng.classList.add('cachee');
        imgEng.classList.add('inexistant');
        imgFr.classList.remove('inexistant');
        imgFr.classList.remove('cachee');
        imgFr.classList.add('visible');
    }
}

////////////////////// MAIN /////////////////////////////////

randomColor(easterEgg);
imgFr.addEventListener('click', changementDeLangue);
imgEng.addEventListener('click', changementDeLangue);