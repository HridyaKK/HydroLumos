document.getElementById('lightButton').addEventListener('click', function() {
    var lightDisplay = document.getElementById('lightDisplay');
    if (lightDisplay.style.backgroundColor === 'yellow') {
        lightDisplay.style.backgroundColor = '#ddd';
    } else {
        lightDisplay.style.backgroundColor = 'yellow';
    }
});