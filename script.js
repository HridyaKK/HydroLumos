document.addEventListener('DOMContentLoaded', function () {
    const productName = document.getElementById("productName");
    const lightButton = document.getElementById("lightButton");
    const lightDisplay = document.getElementById("lightDisplay");
    const lightText = document.getElementById("lightText");
    const brightnessControl = document.getElementById("brightnessControl");
    const modeToggle = document.getElementById("modeToggle");

    // Add sound elements for turning the light on and off
    const soundOn = document.getElementById('soundOn'); // Assuming the 'soundOn' sound is in the HTML
    const soundOff = document.getElementById('soundOff'); // Assuming the 'soundOff' sound is in the HTML

    let lightOn = false;
    let darkMode = false;

    function toggleLight() {
        lightOn = !lightOn;
        if (lightOn) {
            lightDisplay.style.backgroundColor = 'yellow';
            lightText.textContent = 'Light is ON';
            lightButton.textContent = 'Turn Off Light';
            soundOn.play();  // Play the sound when turning the light on
        } else {
            lightDisplay.style.backgroundColor = '#ddd';
            lightText.textContent = 'Light is OFF';
            lightButton.textContent = 'Turn On Light';
            soundOff.play();  // Play the sound when turning the light off
        }
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

    modeToggle.addEventListener("click", toggleDarkMode);
});
