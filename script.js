// Sélectionner le bouton "Yes" et "No"
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Ajouter un événement "mouseover" sur le bouton "No" pour qu'il bouge quand on le survole
noButton.addEventListener('mouseover', function() {
    moveButton();
});

// Ajouter un événement "click" sur le bouton "Yes" pour déclencher l'effet confettis
yesButton.addEventListener('click', function() {
    fireworkEffect();
});

// Fonction pour déplacer le bouton "No" à un endroit aléatoire
function moveButton() {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculer une nouvelle position aléatoire pour le bouton "No"
    const newX = Math.floor(Math.random() * (bodyWidth - buttonWidth));
    const newY = Math.floor(Math.random() * (bodyHeight - buttonHeight));

    // Appliquer la nouvelle position au bouton "No"
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

// Fonction pour déclencher l'effet confettis (feu d'artifice) quand on clique sur "Yes"
function fireworkEffect() {
    var duration = 3 * 1000; // Durée de l'effet en millisecondes (3 secondes)
    var end = Date.now() + duration;

    // Cette fonction animera les confettis comme un feu d'artifice
    (function frame() {
        // Lancer des confettis depuis la gauche
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        // Lancer des confettis depuis la droite
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        // Continue à lancer des confettis tant que la durée n'est pas écoulée
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
