const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate");

const quotes = [
  "I'm not lazy, I'm on energy-saving mode.",
  "I told my computer I needed a break. Now it's calculating how much time I should take off.",
  "I used to be a banker, but I lost interest.",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I started a band called 999 Megabytes — we still haven't gotten a gig.",
];

const handleGenerate = () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[random];
};

generateButton.addEventListener("click", handleGenerate);
handleGenerate();
