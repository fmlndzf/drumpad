document.addEventListener("DOMContentLoaded", () => {
    const pad = document.getElementById("pad");

    // Mapeo de teclas con sonidos
    const sounds = {
        "R": new Audio("./sounds/Ride-Cymbal.wav"),
        "T": new Audio("./sounds/Pedal-Hi-Hat.wav"),
        "Y": new Audio("./sounds/Open-Hi-Hat.wav"),
        "U": new Audio("./sounds/Crash-Cymbal.wav"),
        "F": new Audio("./sounds/Dry-Tom-4.wav"),
        "G": new Audio("./sounds/Snap-Snare.wav"),
        "H": new Audio("./sounds/Power-Tom-2.wav"),
        "J": new Audio("./sounds/Bass-Drum-3.wav"),
        "V": new Audio("./sounds/Side-Stick.wav"),
        "B": new Audio("./sounds/Cross-Sticks.wav"),
        "N": new Audio("./sounds/Cowbell.wav"),
        "M": new Audio("./sounds/Clap.wav")
    };

    // Función para reproducir el sonido correspondiente
    function playSound(key) {
        if (sounds[key]) {
            sounds[key].currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
            sounds[key].play();
        }
    }

    // Asignar eventos de clic/tap a los pads
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("pointerdown", () => {
            let key = box.textContent.trim().toUpperCase();
            playSound(key);
            box.classList.add("active");
        });

        box.addEventListener("pointerup", () => {
            box.classList.remove("active");
        });
    });

    // Evento para presionar teclas
    window.addEventListener("keydown", (e) => {
        let key = e.key.toUpperCase();
        let pad = document.querySelector(`div[data-code='${e.keyCode}']`);
        
        if (pad && !pad.classList.contains("active")) {
            playSound(key);
            pad.classList.add("active");
        }
    });

    // Evento para soltar teclas
    window.addEventListener("keyup", (e) => {
        let pad = document.querySelector(`div[data-code='${e.keyCode}']`);
        if (pad) pad.classList.remove("active");
    });

    function ajustarTamaño() {
        const cuadrado = document.getElementById("pad");
        const tamaño = Math.min(window.innerWidth, window.innerHeight) * 0.9; // 80% del menor lado
        cuadrado.style.width = tamaño + "px";
        cuadrado.style.height = tamaño + "px";
    }
    
    // Ajustar al cargar y al cambiar tamaño de ventana
    window.addEventListener("load", ajustarTamaño);
    window.addEventListener("resize", ajustarTamaño);
   
});
