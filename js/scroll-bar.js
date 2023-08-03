document.addEventListener('DOMContentLoaded', function () {
    const barProgress = document.querySelector('#scroll-progression');

    /**
     * Renvoie la hauteur en pourcentage qu'a parcouru l'utilisateur
     * @returns {number}
     */
    function calcHauteurScroll() {
        const hauteurPage = document.documentElement.scrollHeight;
        const hauteurEcran = window.innerHeight;
        const hauteurScroll = window.scrollY;
        /* On vérifie la que l'on a pas une division par zéro */
        if (hauteurPage - hauteurEcran === 0) {
            return 100;
        } else {
            return Math.round((hauteurScroll / (hauteurPage - hauteurEcran)) * 100);
        }
    }

    console.log("coucou")
    console.log(calcHauteurScroll())

    barProgress.style.setProperty('--largeur-before', calcHauteurScroll()+'%');

    document.addEventListener('scroll', function () {
        barProgress.style.setProperty('--largeur-before', calcHauteurScroll()+'%');
    });
})