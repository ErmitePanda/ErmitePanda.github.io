document.addEventListener('DOMContentLoaded', function () {
    const listOfSkillText = document.querySelectorAll('.skill-text');
    const listOfTech = document.querySelectorAll('.container-tech > div');

    listOfTech.forEach(function(child, index){
        child.style.transition = 'all ease 0.2s';
        child.addEventListener('click', () => {
            // RESET
            listOfTech.forEach((child) => {
                child.style.transform = "translateY(0)";
            });

            listOfSkillText.forEach((child) => {
                child.style.opacity = '0';
            });

            // Application à l'élément cliqué
            listOfTech[index].style.transform = "translateY(-20px)"
            listOfSkillText[index].style.opacity = '1';
        });
    });
});