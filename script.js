
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

    const destino = document.getElementById('learnMore');

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

const btnSurv = document.getElementById("btnSurv");
const btnKiller = document.getElementById("btnKiller");

const modalSurv = document.getElementById("modalSurvivor");
const modalKiller = document.getElementById("modalKiller");

// abrir modais
btnSurv.addEventListener("click", () => {
    modalSurv.showModal();
    descerPagina();
});

btnKiller.addEventListener("click", () => {
    modalKiller.showModal();
    descerPagina();
});

// fechar modal
function fecharModal(id) {
    document.getElementById(id).close();
}

// scroll automático
function descerPagina() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// links das DLCs
function abrirDLC(personagem) {
    const links = {
        Dustin: "https://store.steampowered.com/bundle/67029/Dead_by_Daylight_Stranger_Things_Complete_Edition/",
        Rick: "https://store.steampowered.com/app/3884020/Dead_by_Daylight_The_Walking_Dead/?curator_clanid=11814497",
        Leon: "https://store.steampowered.com/app/1634040/Dead_by_Daylight__Resident_Evil_Chapter/?curator_clanid=11814497",
        Nicolas: "https://store.steampowered.com/app/2469400/Dead_by_Daylight__Nicolas_Cage_Chapter_Pack/?curator_clanid=11814497",

        Vecna: "https://store.steampowered.com/bundle/67029/Dead_by_Daylight_Stranger_Things_Complete_Edition/",
        Springtrap: "https://store.steampowered.com/bundle/60298/Dead_by_Daylight_Five_Nights_at_Freddys_Edition/",
        Leatherface: "https://store.steampowered.com/app/700280/Dead_by_Daylight__Leatherface/?curator_clanid=11814497",
        Krasue: "https://store.steampowered.com/app/4019590/Dead_by_Daylight__Sinister_Grace/?curator_clanid=11814497"
    };

    window.open(links[personagem], "_blank");
}