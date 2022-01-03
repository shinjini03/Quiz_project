const startButton=document.getElementById('start');
const nextButton=document.getElementById('next');
const questionContainer=document.getElementById('q-container');
const questionElement=document.getElementById('q-part');
const answerElement=document.getElementById('ans-buttons');

let shuffleQues,currentQIndex;
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQIndex++;
    setNextQuestion();
});
function startGame(){
console.log('Started');
startButton.classList.add('questions');
shuffleQues=ques.sort(()=>Math.random()-0.5);
currentQIndex=0;
questionContainer.classList.remove('questions');
setNextQuestion();
}
function setNextQuestion(){
    reset();
  showQ(shuffleQues[currentQIndex]);
}
function showQ(question){
 questionElement.innerText=question.question;
 question.answers.forEach(answers => {
     const button=document.createElement('button');
     button.innerText=answers.text;
     button.classList.add('btn');
     if(answers.correct){
         button.dataset.correct=answers.correct;
     }
     button.addEventListener('click',answerOptions);
     answerElement.appendChild(button);
 });
}
function reset(){
 nextButton.classList.add('questions');
 while(answerElement.firstChild){
     answerElement.removeChild(answerElement.firstChild);
 }
}
function answerOptions(ans){
  const selectedButton=ans.target;
  const correct=selectedButton.dataset.correct;
  setStatus(document.body,correct);
  Array.from(answerElement.children).forEach(button=>{
    setStatus(button,button.dataset.correct);
  });
  if(shuffleQues.length > currentQIndex+1){
  nextButton.classList.remove('questions');
  }else{
      startButton.innerText='Restart';
      startButton.classList.remove('questions');
  }
}
function setStatus(element,correct){
  clearStatus(element);
  if(correct){
      element.classList.add('correct');
  }
  else{
      element.classList.add('wrong');
  }
}
function clearStatus(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const ques=[
    {
        question:'Who invented the first computer?',
        answers:[
            { text:'Martin Cooper',correct:false},
            { text:'Jagadish Chandra Bose',correct:false},
            { text:'Guglielmo Marconi',correct:false},
            { text:'Charles Babbage',correct:true}
        ]
    },
    {
        question:'What is the most demanded javascript framework recently?',
        answers:[
            { text:'Node.js',correct:false},
            { text:'React.js',correct:true},
            { text:'Angular',correct:false},
            { text:'MongoDB',correct:false}
        ]
    },
    {
        question:'What does HTML stand for?',
        answers:[
            { text:'Hyper Tag Markup Language',correct:false},
            { text:'Hyper Text Markup Language',correct:true},
            { text:'Hyperlinks Text Mark Language',correct:false},
            { text:'Hyperlinked Tag Marking Language',correct:false},
        ]
    },
    {
        question:'Who invented CSS?',
        answers:[
            { text:'Hakon Wilum Lie',correct:true},
            { text:'Rasmus Ledorf',correct:false},
            { text:'Brendan Eich',correct:false},
            { text:'Bjarne Stroustrup',correct:false}
        ]
    },
    {
        question:'What is the correct HTML for creating a hyperlink?',
        answers:[
            { text:'<a name="">A</a>',correct:false},
            { text:'<a>B</a>',correct:false},
            { text:'<a href="http://www.example.com">example</a>',correct:true},
            { text:'<a url="http://www.example.com">example</a>',correct:false}
        ]
    },
]