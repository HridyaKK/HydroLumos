document.addEventListener('DOMContentLoaded', function() {
    var lightButton = document.getElementById('lightButton');
    var lightDisplay = document.getElementById('lightDisplay');
    var lightText = document.getElementById('lightText');
    var brightnessControl = document.getElementById('brightnessControl');

    // Function to toggle light on/off
    function toggleLight() {
        if (lightDisplay.style.backgroundColor === 'yellow') {
            lightDisplay.style.backgroundColor = '#ddd';
            lightText.textContent = 'Light is OFF';
        } else {
            lightDisplay.style.backgroundColor = 'yellow';
            lightText.textContent = 'Light is ON';
        }
    }

    // Button click event
    lightButton.addEventListener('click', toggleLight);

    // Keyboard event for 'L' key to toggle light
    document.addEventListener('keydown', function(event) {
        if (event.key === 'l' || event.key === 'L') {
            toggleLight();
        }
    });

    // Brightness control slider event
    brightnessControl.addEventListener('input', function() {
        var brightness = brightnessControl.value;
        lightDisplay.style.opacity = brightness / 100;
    });

    // Double-click event to change light color
    lightDisplay.addEventListener('dblclick', function() {
        if (lightDisplay.style.backgroundColor === 'yellow') {
            lightDisplay.style.backgroundColor = 'lightblue';
        } else {
            lightDisplay.style.backgroundColor = 'yellow';
        }
    });
});
