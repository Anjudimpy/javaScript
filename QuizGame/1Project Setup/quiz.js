const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

    let score = 0;

const {correctAnswer, options, question} = questionObj;
const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');

questionEl.textContent = question;

//Populating the Option div with the buttons
let shuffledOption = shuffleOption(options)
shuffledOption.forEach((opt) =>{
  const btn = document.createElement('button');
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //Event handling on the button
  btn.addEventListener('click',()=>{
    if(opt === correctAnswer){
      score++;
    }else{
      score = score - 0.25;
    }
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = 'Quiz Completed!!';
    optionEl.textContent = '';
  });
});

//Shuffling the Option
function shuffleOption(options){
  for(let i= options.length-1; i>=0; i--){
    const j = Math.floor(Math.random()*i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}



