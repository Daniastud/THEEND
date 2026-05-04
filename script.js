// Base de datos de las salas
const salas = {
    entrada: {
        titulo: "La Pirámide",
        texto: "Estás bajo la luz de la pirámide de cristal. El eco es profundo."
    },
    monalisa: {
        titulo: "La Gioconda",
        texto: "Una mirada que te sigue en el silencio de la noche."
    },
    escultura: {
        titulo: "Victoria de Samotracia",
        texto: "El mármol parece cobrar vida bajo las sombras."
    }
};

function cambiarSala(nombreSala) {
    const contenedor = document.getElementById('contenido');
    const audio = document.getElementById('bgm');
    

    if (audio.paused) audio.play();

    contenedor.style.opacity = 0;

    setTimeout(() => {
        contenedor.innerHTML = `
            <h2>${salas[nombreSala].titulo}</h2>
            <p>${salas[nombreSala].texto}</p>
        `;
        contenedor.style.opacity = 1;
    }, 500);
}

// EAST
function triggerNadi() {
    console.log("Accediendo a registros antiguos...");
    alert("NaDi se ha quedado en las sombras del Louvre. Gracias por el viaje.");
    document.body.style.filter = "sepia(0.8) contrast(1.2)";
}