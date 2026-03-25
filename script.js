
function redirecionar() {
    window.open(
        "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
        "_blank"
    );
}

function levarAssassino() {

    const destino = document.getElementById('assassino_button');

    window.scrollTo({
        top: destino.offsetTop,
        behavior: "smooth"
    });

}