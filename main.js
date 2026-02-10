document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const lottoNumbersDiv = document.getElementById('lottoNumbers');
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    const MIN_NUMBER = 1;
    const MAX_NUMBER = 45;
    const NUM_COUNT = 6;

    // Function to generate unique random lotto numbers
    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < NUM_COUNT) {
            numbers.add(Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // Function to display numbers
    function displayNumbers(numbers) {
        lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
        numbers.forEach(num => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = num;
            lottoNumbersDiv.appendChild(circle);
        });
    }

    // Function to set theme
    function setTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false); // Default to light mode if no preference or 'light'
    }

    // Event listener for generate button
    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        setTheme(!body.classList.contains('dark-mode'));
    });

    // Initial display for placeholders
    displayNumbers(Array(NUM_COUNT).fill('?'));
});
