
function redirecionar() {
    window.open(
        "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
        "_blank"
    );
}

function exibirTrailer() {
    const trailer = document.getElementById("trailer");

    // mostra a div
    trailer.style.display = "flex";

    // cria o vídeo só se ainda não existir
    if (trailer.innerHTML === "") {
        trailer.innerHTML = `
            <video autoplay controls>
                <source src="vids/trailerDbd.mp4" type="video/mp4">
                Seu navegador não suporta vídeo.
            </video>
        `;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharVideo();
    }
});

function fecharVideo() {
    const trailer = document.getElementById("trailer");

    trailer.style.display = "none";

    trailer.innerHTML = "";
}

function learnMore() {

    const destino = document.getElementById('homeButtons');

    window.scrollTo({
        top: destino.offsetTop,
        behavior: "smooth"
    });

}

function redirecionarDiscord() {
    window.open(
        "https://discord.com/invite/dbdbrasil",
        "_blank"
    );
}

function redirecionarReddit() {
    window.open(
        "https://www.reddit.com/r/deadbydaylight",
        "_blank"
    );
}



let index = 0;

const texts = document.querySelectorAll(".carousel-text .text");
const images = document.querySelectorAll(".carousel-images img");

function trocarSlide() {
    // remove active
    texts[index].classList.remove("active");
    images[index].classList.remove("active");

    // próximo
    index = (index + 1) % texts.length;

    // adiciona active
    texts[index].classList.add("active");
    images[index].classList.add("active");
}

// troca a cada 3 segundos
setInterval(trocarSlide, 11000);