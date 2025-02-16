$(document).ready(function() {
    // Mapeo de teclas con sonidos
    //https://freewavesamples.com/source/roland-r-8

    var sounds = {
        "R": "./sounds/Ride-Cymbal.wav",
        "T": "./sounds/Pedal-Hi-Hat.wav",
        "Y": "./sounds/Open-Hi-Hat.wav",
        "U": "./sounds/Crash-Cymbal.wav",
        "F": "./sounds/Dry-Tom-4.wav",
        "G": "./sounds/Snap-Snare.wav",
        "H": "./sounds/Power-Tom-2.wav",
        "J": "./sounds/Bass-Drum-3.wav",
        "V": "./sounds/Side-Stick.wav",
        "B": "./sounds/Cross-Sticks.wav",
        "N": "./sounds/Cowbell.wav",
        "M": "./sounds/Clap.wav"
    };

    // Asignar eventos de clic a los pads
    $(".box").mousedown(function() {
        let key = $(this).text().trim().toUpperCase();
        if (sounds[key]) {
            let audio = new Audio(sounds[key]);
            audio.play();
        }
    });

    // Evento para presionar teclas
    $(window).keydown(function(e) {
        let key = e.key.toUpperCase();
        let pad = $("div[data-code='" + e.keyCode + "']");

        if (sounds[key]) {
            let audio = new Audio(sounds[key]);
            audio.play();
            pad.addClass("active");
        }
    });

    // Evento para soltar teclas
    $(window).keyup(function(e) {
        $("div[data-code='" + e.keyCode + "']").removeClass("active");
    });
});
