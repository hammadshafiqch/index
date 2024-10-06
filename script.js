// Dark Mode Toggle
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = '☀️'; // Change to sun icon for light mode
    } else {
        toggleButton.textContent = '🌙'; // Change back to moon icon for dark mode
    }
});
