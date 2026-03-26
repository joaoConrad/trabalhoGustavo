
function redirecionar() {
    window.open(
        "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
        "_blank"
    );
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
