/**
 * Fonction auto appelante qui boucle pour afficher le nombre d'utilisateur qui grandit de plus en plus
 */

let nbUtilisateur = 1023
let timeoutId;
const textUser = document.querySelector(".text-user")
let compteur = 0

function animationUtilisateur() {
    compteur+=7;

    if (compteur >= nbUtilisateur) {
        // Arrêt de la boucle
        clearTimeout(timeoutId)
        return;
    }

    timeoutId = setTimeout(animationUtilisateur, 1)
    textUser.textContent = compteur;
}

/**
 * transition d'apparition dés l'arrivé sur la page
 */

const boxUser = document.querySelector(".box-user")

let startShowFrame;
let duration = 700;
const rectUserBox = boxUser.getBoundingClientRect()
const posEndAnimeUserBox = rectUserBox.top - 200

function animeUserPosition(tempsCourant) {
    // temps de départ de lanimation (mili seconde tjr)
    if (!startShowFrame) startShowFrame = tempsCourant;

    const tempsEcoule = tempsCourant - startShowFrame;
    const progression = Math.min(tempsEcoule / duration, 0.8);
    // Interpolation
    const positionCourante = Math.round(rectUserBox.top + (posEndAnimeUserBox - rectUserBox.top) * progression);

    // Application de la nouvelle position de l'élément
    boxUser.style.transform = "translateY("+ positionCourante +"px)";
    boxUser.style.opacity = "" + progression;

    if (tempsEcoule < duration) {
        // Animation pas terminer
        requestAnimationFrame(animeUserPosition)
    }
}

/**
 * MAIN
 */

animationUtilisateur()
// Démarre l'animation
requestAnimationFrame(animeUserPosition)