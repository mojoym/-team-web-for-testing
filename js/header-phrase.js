const phrases = [
    "“Jobs fill your pockets, adventures fill your soul.”",
    "“Remember that happiness is a way of travel, not a destination.”",
    "“The world is a book and those who do not travel read only one page.”",
    "“Travel is the only thing you buy that makes you richer.”",
    "“Travel is my therapy.”",
    "“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin",
    "“A journey is best measured in friends, rather than miles.” – Tim Cahill",
    "“The world is a book, and those who do not travel read only one page.” – Saint Augustine",
    "“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.” – Mark Twain"
  ];
  
const phraseEl = document.getElementById("phrase");
const generateBtn = document.getElementById("generate-btn");


function generatePhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const phrase = phrases[randomIndex];
  phraseEl.innerText = phrase;
}

generateBtn.addEventListener("click", generatePhrase);
generatePhrase();

