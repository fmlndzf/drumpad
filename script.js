document.addEventListener("DOMContentLoaded", () => {
    const pad = document.getElementById("pad");

    // Mapeo de teclas con sonidos
    const sounds = {
        "7": new Audio("./sounds/Ride-Cymbal.wav"),
        "8": new Audio("./sounds/Pedal-Hi-Hat.wav"),
        "9": new Audio("./sounds/Open-Hi-Hat.wav"),
        "-": new Audio("./sounds/Crash-Cymbal.wav"),
        "4": new Audio("./sounds/Dry-Tom-4.wav"),
        "5": new Audio("./sounds/Snap-Snare.wav"),
        "6": new Audio("./sounds/Power-Tom-2.wav"),
        "+": new Audio("./sounds/Bass-Drum-3.wav"),
        "1": new Audio("./sounds/Side-Stick.wav"),
        "2": new Audio("./sounds/Cross-Sticks.wav"),
        "3": new Audio("./sounds/Cowbell.wav"),
        "0": new Audio("./sounds/Clap.wav")
    };

    // Función para reproducir sonido
    function playSound(key) {
        if (sounds[key]) {
            sounds[key].currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
            sounds[key].play();
        }
    }

    // Asignar eventos de clic/tap a los pads
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("pointerdown", () => {
            let key = box.querySelector("span").textContent.trim();
            playSound(key);
            box.classList.add("active");
        });

        box.addEventListener("pointerup", () => {
            box.classList.remove("active");
        });
    });

    // Evento para presionar teclas
    window.addEventListener("keydown", (e) => {
        let key = e.key;

        if (sounds[key]) {  
            playSound(key);
            
            document.querySelectorAll(".box").forEach(box => {
                let boxKey = box.querySelector("span").textContent.trim();
                if (boxKey === key) {
                    box.classList.add("active");
                }
            });
        }
    });

    // Evento para soltar teclas
    window.addEventListener("keyup", (e) => {
        let key = e.key;
        document.querySelectorAll(".box").forEach(box => {
            let boxKey = box.querySelector("span").textContent.trim();
            if (boxKey === key) {
                box.classList.remove("active");
            }
        });
    });

    function ajustarTamaño() {
        const cuadrado = document.getElementById("pad");
        const tamaño = Math.min(window.innerWidth, window.innerHeight) * 0.9;
        cuadrado.style.width = tamaño + "px";
        cuadrado.style.height = tamaño + "px";
    }
    
    // Ajustar al cargar y al cambiar tamaño de ventana
    window.addEventListener("load", ajustarTamaño);
    window.addEventListener("resize", ajustarTamaño);
});
