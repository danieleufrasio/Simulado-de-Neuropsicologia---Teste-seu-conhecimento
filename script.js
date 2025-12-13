// =========================
// FUNÇÃO PARA EMBARALHAR QUESTÕES (Fisher–Yates)
// =========================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralha TODAS as questões e seleciona só 10
shuffleArray(questions);
const MAX_QUESTIONS = 15;
const selectedQuestions = questions.slice(0, MAX_QUESTIONS);

// A partir daqui o quiz usa selectedQuestions em vez de questions

// =========================
// ESTADO DO QUIZ
// =========================
let userAnswers = new Array(selectedQuestions.length).fill(null);
let currentQuestionIndex = 0;

// =========================
// TIMER 20 MINUTOS
// =========================
let totalSeconds = 20 * 60;
const timerElement = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerElement.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  if (totalSeconds <= 0) {
    clearInterval(timerInterval);
    finishQuiz();
  } else {
    totalSeconds--;
  }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// =========================
// ELEMENTOS DO DOM
// =========================
const questionTitleEl = document.getElementById("questionTitle");
const questionTextEl = document.getElementById("questionText");
const optionsFormEl = document.getElementById("optionsForm");
const questionCounterEl = document.getElementById("questionCounter");
const progressBarEl = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

const resultSection = document.getElementById("resultSection");
const topicSection = document.getElementById("topicSection");
const scoreText = document.getElementById("scoreText");
const correctionsList = document.getElementById("correctionsList");
const correctBar = document.getElementById("correctBar");
const wrongBar = document.getElementById("wrongBar");
const topicContainer = document.getElementById("topicContainer");

// =========================
// RENDERIZAÇÃO DE QUESTÃO
// =========================
function renderQuestion(index) {
  const q = selectedQuestions[index];
  questionTitleEl.textContent = q.title;
  questionTextEl.textContent = q.text;
  questionCounterEl.textContent = `Questão ${index + 1} de ${selectedQuestions.length}`;

  const progress = (index / selectedQuestions.length) * 100;
  progressBarEl.style.width = `${progress}%`;
  progressBarEl.setAttribute("aria-valuenow", progress);

  optionsFormEl.innerHTML = "";
  q.options.forEach((opt, optIndex) => {
    const optionId = `q${index}_opt${optIndex}`;
    const wrapper = document.createElement("div");
    wrapper.className = "form-check mb-2";

    const input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "questionOptions";
    input.id = optionId;
    input.value = optIndex;

    if (userAnswers[index] === optIndex) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      userAnswers[index] = optIndex;
    });

    const label = document.createElement("label");
    label.className = "form-check-label option-label";
    label.htmlFor = optionId;
    label.textContent = opt;

    wrapper.appendChild(input);
    wrapper.appendChild(label);
    optionsFormEl.appendChild(wrapper);
  });

  prevBtn.disabled = index === 0;
  nextBtn.classList.toggle("d-none", index === selectedQuestions.length - 1);
  finishBtn.classList.toggle("d-none", index !== selectedQuestions.length - 1);
}

// =========================
// NAVEGAÇÃO
// =========================
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  }
});

finishBtn.addEventListener("click", finishQuiz);

// =========================
// CÁLCULO DE RESULTADO GERAL
// =========================
function finishQuiz() {
  clearInterval(timerInterval);

  let correctCount = 0;
  const total = selectedQuestions.length;

  correctionsList.innerHTML = "";

  selectedQuestions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === q.correctIndex;
    if (isCorrect) correctCount++;

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <strong>Questão ${index + 1}:</strong> ${q.text}<br>
      Sua resposta: ${
        userAnswer !== null ? q.options[userAnswer] : "<em>Não respondida</em>"
      }<br>
      Correta: <span class="text-success">${q.options[q.correctIndex]}</span><br>
      <small class="text-muted">${q.correction}</small>
    `;
    correctionsList.appendChild(li);
  });

  const correctPercent = Math.round((correctCount / total) * 100);
  const wrongPercent = 100 - correctPercent;

  scoreText.textContent = `Você acertou ${correctCount} de ${total} questões (${correctPercent}%).`;

  correctBar.style.width = `${correctPercent}%`;
  correctBar.textContent = `${correctPercent}% acertos`;
  wrongBar.style.width = `${wrongPercent}%`;
  wrongBar.textContent = `${wrongPercent}% erros`;

  resultSection.classList.remove("d-none");

  progressBarEl.style.width = "100%";
  progressBarEl.setAttribute("aria-valuenow", 100);

  calculateTopicsPerformance();
}

// =========================
// “GRÁFICO” POR TÓPICO
// =========================
function calculateTopicsPerformance() {
  const topicStats = {};

  selectedQuestions.forEach((q, index) => {
    const topic = q.topic;
    if (!topicStats[topic]) {
      topicStats[topic] = { total: 0, correct: 0 };
    }
    topicStats[topic].total += 1;
    if (userAnswers[index] === q.correctIndex) {
      topicStats[topic].correct += 1;
    }
  });

  topicContainer.innerHTML = "";

  const topicEntries = Object.entries(topicStats).map(([topic, data]) => {
    const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    return { topic, total: data.total, correct: data.correct, percent };
  });

  topicEntries.sort((a, b) => a.percent - b.percent);

  const table = document.createElement("table");
  table.className = "table table-sm align-middle";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Tópico</th>
        <th>Acertos</th>
        <th>Questões</th>
        <th>Desempenho</th>
      </tr>
    </thead>
    <tbody>
      ${topicEntries
        .map(entry => {
          const color = entry.percent >= 70
            ? "bg-success"
            : entry.percent >= 40
            ? "bg-warning"
            : "bg-danger";
          return `
          <tr>
            <td>${entry.topic}</td>
            <td>${entry.correct}</td>
            <td>${entry.total}</td>
            <td style="min-width:180px;">
              <div class="progress">
                <div class="progress-bar ${color}" role="progressbar"
                     style="width: ${entry.percent}%;"
                     aria-valuenow="${entry.percent}"
                     aria-valuemin="0" aria-valuemax="100">
                  ${entry.percent}%
                </div>
              </div>
            </td>
          </tr>
        `;
        })
        .join("")}
    </tbody>
  `;

  topicContainer.appendChild(table);
  topicSection.classList.remove("d-none");
}

// inicializa primeira questão
renderQuestion(currentQuestionIndex);
