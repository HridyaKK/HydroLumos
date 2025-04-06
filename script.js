<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light Control</title>
    <style>
        #lightDisplay {
            width: 100px;
            height: 100px;
            transition: background-color 0.3s, opacity 0.3s;  */
        }
    </style>
</head>
<body>

    <div>
        <button id="lightButton">Turn ON light</button>
        <p id="lightText">Light is OFF</p>
        <div id="lightDisplay" style="background-color: #ddd;"></div>
        <input id="brightnessControl" type="range" min="0" max="100" value="100">
    </div>
    <script>
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
                    lightButton.textContent = 'Turn On Light'; // Change button text to 'Turn On Light'
                } else {
                    lightDisplay.style.backgroundColor = 'yellow'; // Light on (yellow)
                    lightButton.textContent = 'Turn Off Light'; // Change button text to 'Turn Off Light'
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
    </script>

</body>
</html>
