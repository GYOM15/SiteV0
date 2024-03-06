
// Récupérer les éléments HTML
const playBtn = document.getElementById("playBtn");
const videoPopup = document.getElementById("videoPopup");
const closeBtn = document.getElementById("closeBtn");
const videoPlayer = document.getElementById("videoPlayer");
const openPopupBtn = document.getElementById("openPopupBtn");


// Ajouter un gestionnaire d'événement pour ouvrir le popup
playBtn.addEventListener("click", () => {
    setTimeout(() => {
        videoPopup.style.display = "block";
        videoPlayer.play(); 
        videoPlayer.currentTime = 0.1;
    }, 1000);
});

// Ajouter un gestionnaire d'événement pour fermer le popup et réinitialiser la vidéo
closeBtn.addEventListener("click", () => {
    videoPopup.style.display = "none";
    videoPlayer.currentTime = 0; // Réinitialiser la vidéo à zéro
    videoPlayer.pause(); // Arrêter la lecture
});


