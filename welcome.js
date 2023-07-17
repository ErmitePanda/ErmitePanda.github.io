const welcomeText = document.querySelector(".text-welcome");
const welcomeContainer = document.querySelector(".container-welcome");

function startWelcome() {
    let duree = 2000;
    let tempsDep;
    function textAppearance(tempsCourant) {
        if (!tempsDep) tempsDep = tempsCourant;

        let tempsEcoule = tempsCourant - tempsDep;

        let progression = Math.min(tempsEcoule/duree, 1);

        if (tempsEcoule < duree) {
            welcomeText.style.opacity = progression.toString()
            requestAnimationFrame(textAppearance);
        }
    }
    requestAnimationFrame(textAppearance);
}

function endOfWelcome() {
    let duree = 500;
    let tempsDep;

    function animeDisappearance(tempsCourant) {
        if (!tempsDep) tempsDep = tempsCourant;

        let tempsEcoule = tempsCourant - tempsDep;

        let progression = Math.min(tempsEcoule/duree, 1);

        if (tempsEcoule < duree) {
            welcomeContainer.style.opacity = (1 - progression).toString();
            requestAnimationFrame(animeDisappearance);
        } else {

        }
    }
    requestAnimationFrame(animeDisappearance);
}

activeWelcome = true;

if (activeWelcome) {
    startWelcome();
    setTimeout(endOfWelcome, 3000);
} else {
    welcomeContainer.style.opacity = 0;
}
