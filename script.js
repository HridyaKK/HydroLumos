document.getElementById('lightButton').addEventListener('click', function() {
    var lightDisplay = document.getElementById('lightDisplay');
    var lightText = document.getElementById('lightText'); // Add a text element for interaction

    // Add a smooth transition effect
    lightDisplay.style.transition = 'background-color 0.5s ease';

    if (lightDisplay.style.backgroundColor === 'yellow') {
        lightDisplay.style.backgroundColor = '#ddd';
        lightText.textContent = 'Light is OFF'; // Update text
    } else {
        lightDisplay.style.backgroundColor = 'yellow';
        lightText.textContent = 'Light is ON'; // Update text
    }
});