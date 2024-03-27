//////////////////// ELEMENT RECUPERER //////////////////////
const easterEgg = document.getElementById("easter-egg");
const imgFr = document.getElementById("vf");
const imgEng = document.getElementById("ve");
const accueil = document.getElementById('accueil-content')
let projets = document.getElementById('projet-content')
let contact = document.getElementById('contact-content')

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

randomColor(easterEgg)

absoluteAccueil = new Diapositive(accueil, false);
absoluteProjet = new Diapositive(projets, true);
absoluteContact = new Diapositive(contact, false);

setTimeout(() => {
    absoluteProjet.cacher();
    absoluteAccueil.afficher();
}, 2000)