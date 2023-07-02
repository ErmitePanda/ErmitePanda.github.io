const eventButton = document.querySelector(".click-event")
const textEvent = document.querySelector(".textEvent")

eventButton.addEventListener("click", () => {
    textEvent.textContent = "Bouton cliqué"
})