/**
 * Fonction auto appelante qui boucle pour afficher le nombre d'utilisateur qui grandit de plus en plus
 */

let nbUtilisateur = 1023
let timeoutId;
const textUser = document.querySelector(".text-user")
let compteur = 0;

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
const posEndAnimeUserBox = rectUserBox.top - 200;

function animeUserPosition(tempsCourant) {
    // temps de départ de lanimation (mili seconde tjr)
    if (!startShowFrame) startShowFrame = tempsCourant;

    const tempsEcoule = tempsCourant - startShowFrame;
    const progression = Math.min(tempsEcoule / duration, 1);

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
 * Box quizz qui apparaît quand on atteint un seuil de l'écran
 */

const boxQuizz = document.querySelector(".box-quizz")

function appearQuizzBox() {
    let startTimeurAnim = null;
    let dureeApparition = 1000;

    function animeQuizzBox(tempsCourant) {
        if (!startTimeurAnim) startTimeurAnim = tempsCourant;

        const tempsEcoulee = tempsCourant - startTimeurAnim;
        const progression = Math.min(tempsEcoulee/dureeApparition, 1)

        boxQuizz.style.opacity = progression.toString();
        boxQuizz.style.transform = `scale(${progression})`;

        if (progression < duration) {
            requestAnimationFrame(animeQuizzBox);
        }
    }

    requestAnimationFrame(animeQuizzBox);
}

function scrollQuizzDetection() {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);

    if (scrollPosition >= 60) {
        appearQuizzBox();
        window.removeEventListener('scroll', scrollQuizzDetection);
    }
}

/**
 * Function qui quand on arrive sur la page initialise le scroll et
 * ensuite ajoute les différents événement de la page
 */

function scrollInit() {
    window.scrollTo(0,0);
    window.removeEventListener("scroll", scrollInit);
    initEvent();
}

function initEvent() {
    window.addEventListener('scroll', scrollQuizzDetection);
}

/**
 * MAIN
 */

animationUtilisateur();
// Démarre l'animation
requestAnimationFrame(animeUserPosition);
window.addEventListener('scroll', scrollInit);