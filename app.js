const quizData = [
  {
    title: "1. When did the first ever FIFA World Cup held?",
    answers: [
      { text: "July, 1930", correct: true },
      { text: "June, 1940", correct: false },
      { text: "Dec, 1930", correct: false },
      { text: "Nov, 1940", correct: false },
    ],
  },
  {
    title: "2. Who won the first ever FIFA World Cup?",
    answers: [
      { text: "Argentina", correct: false },
      { text: "West Germany", correct: false },
      { text: "Brasil", correct: false },
      { text: "Uruguay", correct: true },
    ],
  },
  {
    title: "3. Which team have won the most amount of FIFA World Cups?",
    answers: [
      { text: "Uruguay", correct: false },
      { text: "Argentina", correct: false },
      { text: "Brasil", correct: true },
      { text: "Portugal", correct: false },
    ],
  },
  {
    title: "4. Who has won the most amount of Ballon d'Ors after Messi?",
    answers: [
      { text: "Neymar", correct: false },
      { text: "Van Basten", correct: false },
      { text: "C. Ronaldo", correct: true },
      { text: "Pele", correct: false },
    ],
  },
  {
    title: "5. Who has won the most number of Grand Slams in tennis?",
    answers: [
      { text: "Nadal", correct: false },
      { text: "Federer", correct: false },
      { text: "None", correct: false },
      { text: "Djokovic", correct: true },
    ],
  },
  {
    title:
      "6. Who is regarded as the greatest player of all times in football?",
    answers: [
      { text: "Messi", correct: true },
      { text: "Sushant Pokhrel", correct: false },
      { text: "Maradona", correct: false },
      { text: "Pele", correct: false },
    ],
  },
  {
    title: "7. When did Argentina win their most recent FIFA World Cup?",
    answers: [
      { text: "1986", correct: false },
      { text: "2002", correct: false },
      { text: "2022", correct: true },
      { text: "2010", correct: false },
    ],
  },
  {
    title: "8. Which team has won the most number of UCL titles?",
    answers: [
      { text: "Real Madrid", correct: true },
      { text: "Milan", correct: false },
      { text: "Liverpool", correct: false },
      { text: "Arsenal", correct: false },
    ],
  },
  {
    title:
      "9. Which of the following player is considered one of the greatest dribblers of all time?",
    answers: [
      { text: "Messi", correct: true },
      { text: "Ronaldo", correct: false },
      { text: "Harry Kane", correct: false },
      { text: "Robben", correct: false },
    ],
  },
  {
    title: "10. Which of the following nation has four World Cups to its name?",
    answers: [
      { text: "Germany", correct: true },
      { text: "Argentina", correct: false },
      { text: "Brasil", correct: false },
      { text: "Italy", correct: true },
    ],
  },
  {
    title:
      "11. Which of the following cricketer has the most number of centuries to his name?",
    answers: [
      { text: "Kohli", correct: false },
      { text: "Sachin", correct: true },
      { text: "Ponting", correct: false },
      { text: "Bumrah", correct: false },
    ],
  },
  {
    title: "12. Which player has the most number of trophies in football?",
    answers: [
      { text: "Messi", correct: true },
      { text: "C. Ronaldo", correct: false },
      { text: "Dani Alves", correct: false },
      { text: "Pele", correct: false },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  let score = 0;
  const question = document.createElement("h3");
  question.textContent = quizData[count].title;

  const container = document.querySelector("#quiz-container");
  container.appendChild(question);

  const ul = document.createElement("ul");
  container.appendChild(ul);
  const tracker = document.createElement("span");
  tracker.className = "tracker";
  tracker.innerHTML = "0/12";
  container.appendChild(tracker);
  // ****************************** //
  const a1 = document.createElement("li");
  a1.textContent = quizData[count].answers[0].text;
  const a2 = document.createElement("li");
  a2.textContent = quizData[count].answers[1].text;
  const a3 = document.createElement("li");
  a3.textContent = quizData[count].answers[2].text;
  const a4 = document.createElement("li");
  a4.textContent = quizData[count].answers[3].text;

  const lis = [a1, a2, a3, a4];
  lis.forEach((li) => {
    ul.appendChild(li);
    li.className = "options";
  });
  console.log(a1.className);
  document.querySelectorAll(".options").forEach((item, indx) => {
    item.addEventListener("click", () => {
      const result = quizData[count].answers[indx].correct ? 1 : 0;
      // console.log(result)
      if (result) {
        score++;
      }
      count++;
      tracker.innerHTML = `${count}/12`;

      if (count < quizData.length) {
        question.textContent = quizData[count].title;
        a1.textContent = quizData[count].answers[0].text;
        a2.textContent = quizData[count].answers[1].text;
        a3.textContent = quizData[count].answers[2].text;
        a4.textContent = quizData[count].answers[3].text;
      } else {
        container.innerHTML = `
   <h2> Your score: ${score}</h2>
   <button onClick=location.reload() class="reload"> Restart </button>
    
    `;
      }
    });
  });
});
