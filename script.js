const questions = [
  {
    question: "Planet terbesar di tata surya adalah...",
    options: ["Mars", "Bumi", "Jupiter", "Saturnus"],
    answer: "Jupiter"
  },
  {
    question: "Benda langit yang mengelilingi planet disebut...",
    options: ["Bintang", "Satelit", "Asteroid", "Meteor"],
    answer: "Satelit"
  },
  {
    question: "Matahari termasuk dalam jenis bintang...",
    options: ["Supernova", "Katai putih", "Katai kuning", "Raksasa merah"],
    answer: "Katai kuning"
  },
  {
    question: "Planet terdekat dengan Matahari adalah...",
    options: ["Venus", "Merkurius", "Mars", "Bumi"],
    answer: "Merkurius"
  },
  {
    question: "Planet yang memiliki cincin paling mencolok adalah...",
    options: ["Uranus", "Neptunus", "Jupiter", "Saturnus"],
    answer: "Saturnus"
  },
  {
    question: "Bulan adalah satelit alami dari...",
    options: ["Mars", "Venus", "Bumi", "Jupiter"],
    answer: "Bumi"
  },
  {
    question: "Alam semesta berawal dari peristiwa...",
    options: ["Big Crunch", "Big Bang", "Nebula", "Black Hole"],
    answer: "Big Bang"
  },
  {
    question: "Benda luar angkasa yang masuk atmosfer bumi disebut...",
    options: ["Kometa", "Meteor", "Asteroid", "Satelit"],
    answer: "Meteor"
  },
  {
    question: "Planet yang dikenal sebagai planet merah adalah...",
    options: ["Mars", "Venus", "Uranus", "Neptunus"],
    answer: "Mars"
  },
  {
    question: "Nama galaksi tempat Bumi berada adalah...",
    options: ["Andromeda", "Milky Way", "Orion", "Sirius"],
    answer: "Milky Way"
  },
  {
    question: "Planet yang memiliki hari terpanjang adalah...",
    options: ["Venus", "Merkurius", "Neptunus", "Mars"],
    answer: "Venus"
  },
  {
    question: "Bintang paling terang di langit malam adalah...",
    options: ["Polaris", "Betelgeuse", "Sirius", "Rigel"],
    answer: "Sirius"
  },
  {
    question: "Lapisan pelindung Bumi dari radiasi matahari adalah...",
    options: ["Troposfer", "Stratosfer", "Ozon", "Mesosfer"],
    answer: "Ozon"
  },
  {
    question: "NASA adalah badan antariksa milik negara...",
    options: ["Rusia", "India", "Amerika Serikat", "Cina"],
    answer: "Amerika Serikat"
  },
  {
    question: "Planet terkecil di tata surya adalah...",
    options: ["Venus", "Pluto", "Merkurius", "Mars"],
    answer: "Merkurius"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `(${currentQuestion + 1}/15) ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length) {
    showQuestion();
  }
});

showQuestion();
