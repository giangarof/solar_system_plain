
function toggle(planet){
    // Find the text element associated with the clicked planet
    const textElement = planet.nextElementSibling;

    // Check if the text element is already visible
    const isVisible = textElement.classList.contains('show');

    // Hide all text elements
    const allTextElements = document.querySelectorAll('.text');
    allTextElements.forEach(text => text.classList.remove('show'));

    // If the text element was not visible, show it
    if (!isVisible) {
        textElement.classList.add('show');
    }
}

document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.this')) {
        const allTextElements = document.querySelectorAll('.text');
        allTextElements.forEach(text => text.classList.remove('show'));
    }
});

