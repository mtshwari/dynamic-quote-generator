// DOM elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteButton');

// Function to fetch a new quote
async function fetchQuote() {
    try {
        const response = await fetch('/quote');
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        // Update the DOM with the fetched quote
        quoteText.textContent = `"${data.text}"`;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error(error);
        quoteText.textContent = 'Could not fetch quote. Please try again later.';
        quoteAuthor.textContent = '';
    }
}

// Event listener for the button
newQuoteButton.addEventListener('click', fetchQuote);

// Fetch an initial quote when the page loads
window.onload = fetchQuote;
