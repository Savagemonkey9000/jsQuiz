const questionsArr = [
    { question: "Fråga 1: Himlen är en social konstruktion", answer: "Falskt" },
    { question: "Fråga 2: Jultomten betalar skatt?", answer: "Falskt" },
    { question: "Fråga 3: socker är surt?", answer: "Falskt" },
    { question: "Fråga 4: Det är kallt utomhus?", answer: "Sant" },
    { question: "Fråga 5: Saker blir dyrare?", answer: "Sant" },
    { question: "Fråga 6: Det gör ont att ramla på betong?", answer: "Sant" },
    { question: "Fråga 7: En spade är en spade?", answer: "Sant" },
    { question: "Fråga 8: internet är en serie av tuber?", answer: "Sant" },
    { question: "Fråga 9:  Ramen är objektivt den bästa maträtten", answer: "Sant" },
    { question: "Fråga 10: Är jorden rund?", answer: "Sant" }
  ];

  function createQuestionElement(question, index) {
    const div = document.createElement("div");
    div.innerHTML = `
          <p>${question.question}</p>
          <label><input type="radio" name="question${index}" value="Sant"> Sant</label>
          <label><input type="radio" name="question${index}" value="Falskt"> Falskt</label>
      `;
    return div;
  }
  function calculateResult() {
    let score = 0;
    questionsArr.forEach((question, index) => {
      const selected = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selected && selected.value === question.answer) {
        score++;
      }
    });
    return score;
  }
  function showResult(score) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Du fick ${score} av ${questionsArr.length} rätt.`;
  }
  function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById("toggle-theme");
    if (body.classList.contains("dark-mode")) {
      body.classList.replace("dark-mode", "light-mode");
      themeButton.innerText = "Byt till Dark Mode";
    } else {
      body.classList.replace("light-mode", "dark-mode");
      themeButton.innerText = "Byt till Light Mode";
    }
  }