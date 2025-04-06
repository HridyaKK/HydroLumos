document.addEventListener('DOMContentLoaded', function () {
    const productName = document.getElementById("productName");
    const lightButton = document.getElementById("lightButton");
    const lightDisplay = document.getElementById("lightDisplay");
    const lightText = document.getElementById("lightText");
    const brightnessControl = document.getElementById("brightnessControl");
    const modeToggle = document.getElementById("modeToggle");

    let lightOn = false;
    let darkMode = false;

    function toggleLight() {
        lightOn = !lightOn;
        lightDisplay.style.backgroundColor = lightOn ? 'yellow' : '#ddd';
        lightButton.textContent = lightOn ? 'Turn Off Light' : 'Turn On Light';
        lightText.textContent = lightOn ? 'Light is ON' : 'Light is OFF';
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode", darkMode);
        modeToggle.textContent = darkMode ? '☀️  Light Mode' : '🌙  Dark Mode';
    }

    lightButton.addEventListener('click', toggleLight);

    document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === 'l') {
            toggleLight();
        }
    });

    brightnessControl.addEventListener('input', function () {
        lightDisplay.style.opacity = brightnessControl.value / 100;
    });

    lightDisplay.addEventListener('dblclick', function () {
        if (lightDisplay.style.backgroundColor === 'yellow') {
            lightDisplay.style.backgroundColor = 'lightblue';
        } else if (lightOn) {
            lightDisplay.style.backgroundColor = 'yellow';
        }
    });

    productName.addEventListener("click", () => {
        productName.style.animation = "none";
        productName.offsetHeight; // Trigger reflow
        productName.style.animation = "glow 2s infinite ease-in-out";
    });

    modeToggle.addEventListener("click", Theme);
});
