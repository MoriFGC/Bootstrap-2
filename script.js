let button = document.getElementById("bottone");

button.addEventListener("click", function() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.remove();
    });
});
