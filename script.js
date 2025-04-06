document.addEventListener('DOMContentLoaded', function() {
    var lightButton = document.getElementById('lightButton');
    var lightDisplay = document.getElementById('lightDisplay');
    var lightText = document.getElementById('lightText');
    var brightnessControl = document.getElementById('brightnessControl');

    // Initialize state
    lightDisplay.style.backgroundColor = '#ddd'; // light is off by default
    lightText.textContent = 'Light is OFF';
    lightButton.textContent = 'Turn ON light'; // set initial button text

    // Function to toggle light on/off
    function toggleLight() {
        if (lightDisplay.style.backgroundColor === 'yellow') {
            lightDisplay.style.backgroundColor = '#ddd'; // Light off (light gray)
            lightText.textContent = 'Light is OFF'; // Update text
            lightButton.textContent = 'Turn ON light'; // Change button text
        } else {
            lightDisplay.style.backgroundColor = 'yellow'; // Light on (yellow)
            lightText.textContent = 'Light is ON'; // Update text
            lightButton.textContent = 'Turn OFF light'; // Change button text
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
            lightDisplay.style.backgroundColor = 'lightblue'; // Change to light blue
        } else {
            lightDisplay.style.backgroundColor = 'yellow'; // Change back to yellow
        }
    });
});
