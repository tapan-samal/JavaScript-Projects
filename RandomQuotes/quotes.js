// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  ];

  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteText").textContent = quote;
  }

  // Attach click event listener to the button
  document.getElementById("quoteButton").addEventListener("click", generateQuote);