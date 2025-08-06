const questions = [
  {
    question: "Do you use strong and unique passwords?",
    id: "q1"
  },
  {
    question: "Do you update your software regularly?",
    id: "q2"
  },
  {
    question: "Do you use Two-Factor Authentication (2FA)?",
    id: "q3"
  },
  {
    question: "Do you avoid clicking suspicious links?",
    id: "q4"
  },
  {
    question: "Do you use a VPN on public networks?",
    id: "q5"
  },
  {
    question: "Is your antivirus software up-to-date?",
    id: "q6"
  },
  {
    question: "Do you regularly backup your data?",
    id: "q7"
  },
  {
    question: "Do you avoid sharing personal info on unknown sites?",
    id: "q8"
  },
  {
    question: "Do you verify app permissions before installing?",
    id: "q9"
  },
  {
    question: "Do you use a password manager?",
    id: "q10"
  }
];

const container = document.getElementById('questionsContainer');

questions.forEach(q => {
  const div = document.createElement('div');
  div.classList.add('question');
  div.innerHTML = `
    <label>${q.question}</label><br/>
    <input type="radio" name="${q.id}" value="yes" required> Yes
    <input type="radio" name="${q.id}" value="no"> No
  `;
  container.appendChild(div);
});

document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  let score = 0;
  formData.forEach(value => {
    if (value === 'yes') score++;
  });
  document.getElementById('result').innerHTML = `
    <h2>Your Cyber Hygiene Score: ${score}/10</h2>
    <p>${score >= 8 ? '✅ Excellent!' : score >= 5 ? '⚠️ Moderate. Improve security practices!' : '❌ Poor. Immediate action needed!'}</p>
  `;
});
