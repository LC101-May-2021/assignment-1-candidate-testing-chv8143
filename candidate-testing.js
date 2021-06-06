const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=(input.question('What is your name?'))
}
correctAnswers= ['Sally Ride',
'true',
'40',
'Trajectory',
'3']

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// question='Who was the first American woman in space?'
// candidateAnswer =input.question (question);
// correctAnswer= "Sally Ride";

questions=['1. Who was the first American woman in space?',
'2. True or false: 5 kilometer == 5000 meters?',
'3. (5 + 3)/2 * 10 = ?',
"4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
'5. What is the minimum crew size for the ISS?'
];



for (let i=0; i<questions.length; i++){


candidateAnswer= (input.question (questions[i]))
candidateAnswers.push(candidateAnswer)


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  
{ console.log (`Your answer: ${candidateAnswer}\nCorrect answer: ${correctAnswers[i]}\n`);
}   
}
return candidateAnswers
}
console.log(candidateAnswers)

function gradeQuiz(candidateAnswers) {
 let rightAnswers=0;
for (let i=0;i < candidateAnswers.length; i++)
{
if (candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()){
  rightAnswers++;
} 
}
  let grade=((rightAnswers/5)*100)
  console.log (`>>>Overall Grade: ${grade} (${rightAnswers} of 5 responses correct) <<<`)
if (grade>=80){
  console.log ('>>> Status: PASSED <<<');
}else 
{
  console.log ('>>> Status: Failed <<<')
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log ('Candidate Name: '+candidateName)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};