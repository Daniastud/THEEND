const salas = {
    entrada: {
        titulo: "LA PIRÁMIDE",
        texto: "Luz natural sobre el gran vestíbulo.",
        imagen: "assets/Louvreday.png"
    },
    monalisa: {
        titulo: "MONA LISA",
        texto: "La obra maestra de Da Vinci.",
        imagen: "assets/monalisa.jpg"
    },
    escultura: {
        titulo: "SAMOTRACIA",
        texto: "La victoria alada en mármol.",
        imagen: "assets/victoria.jpg"
    }
};

function cambiarSala(id) {
    const audio = document.getElementById('bgm');
    const bgContainer = document.querySelector('.background-container');
    const bgImage = document.getElementById('bg-image');
    const titulo = document.getElementById('sala-titulo');
    const desc = document.getElementById('sala-descripcion');

    if (audio.paused) audio.play();

    bgImage.style.opacity = 0;

    setTimeout(() => {
        bgContainer.style.backgroundImage = `url('${salas[id].imagen}')`;
        bgImage.src = salas[id].imagen;
        titulo.innerText = salas[id].titulo;
        desc.innerText = salas[id].texto;
        bgImage.style.opacity = 1;
    }, 400);
}

document.addEventListener('mousemove', (e) => {
    const bgImage = document.getElementById(imagen/assets/Louvreday.png
    );
    if (bgImage) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        bgImage.style.setProperty('--x', `${x}%`);
        bgImage.style.setProperty('--y', `${y}%`);
    }
});

function triggerNadi() {
    alert("NaDi se ha quedado en las sombras del Louvre.");
    document.body.style.filter = "grayscale(1) brightness(0.8)";
}