    const fonts = ['University Roman Regular', 'University Roman Bold', 'University Regular Italic']; // List of font names
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        const fontContainer = document.getElementById('font-container');
        const selectedLetterDiv = document.getElementById('selected-preview');
        
        fonts.forEach(font => {
            // Create a div for lowercase letters
            const fontLineLowercase = document.createElement('div');
            fontLineLowercase.className = 'font-line';
            fontLineLowercase.style.fontFamily = font; // Apply the font to the line
            fontContainer.appendChild(fontLineLowercase);

            // Add font name above lowercase letters
            const fontName = document.createElement('div');
            fontName.className = 'font-name';
            fontName.textContent = font;
            fontLineLowercase.appendChild(fontName);
            

            // Create a div for uppercase letters
            const fontLineUppercase = document.createElement('div');
            fontLineUppercase.className = 'font-line';
            fontLineUppercase.style.fontFamily = font; // Apply the font to the line
            fontContainer.appendChild(fontLineUppercase);

            // Add event listeners for lowercase letters
            lowercaseLetters.split('').forEach(letter => {
                const letterElement = document.createElement('span');
                letterElement.textContent = letter;
                letterElement.addEventListener('mouseover', () => {
                    selectedLetterDiv.textContent = letter;
                    selectedLetterDiv.style.fontFamily = font;
                    selectedLetterDiv.style.display = 'block';
                });
                letterElement.addEventListener('mouseout', () => {
                    selectedLetterDiv.style.display = 'none';
                });
                fontLineLowercase.appendChild(letterElement);
            });

            // Add event listeners for uppercase letters
            uppercaseLetters.split('').forEach(letter => {
                const letterElement = document.createElement('span');
                letterElement.textContent = letter;
                letterElement.addEventListener('mouseover', () => {
                    selectedLetterDiv.textContent = letter;
                    selectedLetterDiv.style.fontFamily = font;
                    selectedLetterDiv.style.display = 'block';
                });
                letterElement.addEventListener('mouseout', () => {
                    selectedLetterDiv.style.display = 'none';
                });
                fontLineUppercase.appendChild(letterElement);
            });

            const lineBreakElement = document.createElement('br');
            fontContainer.appendChild(lineBreakElement);
        });

         function startTypingAnimation() {
    const textElement = document.querySelector(".quote");
    const textToType = "\“Use full round ovals - condense the vertical elements - and a slightly broken alignment adds to the unique appearance of the entire production.\” Cincinnati, 1918";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 45); // Adjust the typing speed (milliseconds)
        }
    }

    // Start the typing animation when the page loads
    typeText();
}
// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in view, start the typing animation
            startTypingAnimation();
            observer.unobserve(entry.target); // Stop observing once triggered
        }
    });
});
// Target the element you want to observe
const targetElement = document.querySelector(".quote");

// Start observing the element
if (targetElement) {
    observer.observe(targetElement);
}
