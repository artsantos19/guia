const quizQuestions = [
    {
      question: "Qual linguagem é conhecida como 'a linguagem da web'?",
      options: ["Python", "JavaScript", "Ruby", "C++"],
      answer: "JavaScript"
    },
    {
      question: "Qual framework é mantido pelo Google?",
      options: ["React", "Vue.js", "Angular", "Svelte"],
      answer: "Angular"
    },
    {
      question: "Qual linguagem é comumente usada para inteligência artificial?",
      options: ["Java", "Python", "PHP", "Swift"],
      answer: "Python"
    }
  ];
  
  function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizQuestions.forEach((q, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      questionElement.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        ${q.options
          .map(
            (option) =>
              `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`
          )
          .join("<br>")}
      `;
  
      quizContainer.appendChild(questionElement);
    });
  }
  

  function checkAnswers() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === q.answer) {
        score++;
      }
    });
  
    document.getElementById("result").innerText = `Você acertou ${score} de ${quizQuestions.length} perguntas!`;
  }
  
 
  window.onload = loadQuiz;
  