/**
 * Fonction auto appelante qui boucle pour afficher le nombre d'utilisateur qui grandit de plus en plus
 */

let nbUtilisateur = 1023
let timeoutId;
const textUser = document.querySelector(".text-user")
let compteur = 0

function animationUtilisateur() {
    compteur++;

    if (compteur >= nbUtilisateur) {
        // Arrêt de la boucle
        clearTimeout(timeoutId)
        return;
    }

    timeoutId = setTimeout(animationUtilisateur, 1)
    textUser.textContent = compteur;
}

/**
 *
 */

const boxUser = document.querySelector(".box-user")

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        boxUser.style.opacity = "1"
    }, 100)
})

/**
 * MAIN
 */

animationUtilisateur()