document.addEventListener('DOMContentLoaded', function () {
    const containerTech = document.querySelector('.container-tech');
    const children = containerTech.querySelectorAll('div');
    let zIndex = 0;
    children.forEach(child => {
        child.style.zIndex = zIndex.toString();
        zIndex++;
    });
})