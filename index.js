// ButtonsHere
// Force SillyTavern message buttons to remain visible.

const extensionName = "buttonshere";

function forceButtonsVisible() {
    document.querySelectorAll(".mes_buttons").forEach(buttons => {
        buttons.classList.add("buttonshere-visible");

        buttons.style.setProperty("opacity", "1", "important");
        buttons.style.setProperty("visibility", "visible", "important");
        buttons.style.setProperty("display", "flex", "important");
        buttons.style.setProperty("pointer-events", "auto", "important");
    });

    document.querySelectorAll(".mes_buttons button, .mes_buttons .mes_button").forEach(button => {
        button.style.setProperty("opacity", "1", "important");
        button.style.setProperty("visibility", "visible", "important");
        button.style.setProperty("pointer-events", "auto", "important");
    });
}


// Initialisation
function initButtonsHere() {
    forceButtonsVisible();

    // Observe les nouveaux messages / boutons ajoutés au chat
    const observer = new MutationObserver(() => {
        forceButtonsVisible();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}


// Attendre que SillyTavern ait chargé son interface
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtonsHere);
} else {
    initButtonsHere();
}