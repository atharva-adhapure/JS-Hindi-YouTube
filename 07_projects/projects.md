# Solution Code (Projects related to DOM)
## Project Link
[Project Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
## Project 1

```javascript
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
       if(e.target.id == "grey"){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id == "White"){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id == "yellow"){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id == "blue"){
        body.style.backgroundColor = e.target.id; 
       }
    })
});
```

## Project 2 

``` javascript
const form = document.querySelector('form')
//this usecase will be give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === "" ||height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}` ;
  }
  else if(weight === ""||weight < 0 || isNaN(weight)){
    results.innerHTML= `Please enter a valid weight ${weight}`;
  }else {
    const bmi = (weight /(height*height/10000)).toFixed(2);
    
  

  if(bmi < 18.6){
    results.innerHTML = `<span>${bmi}<span> <br> You are under weight`
  }
  else if(bmi > 24.9){
    results.innerHTML = `<span>${bmi}</span> <br>You are Overweight`
  }else{
    results.innerHTML = `<span>${bmi}</span> <br> Your weight lies in Normal range`
  }
  
}
})
```

## Project 3 

```javascript
  const clock  = document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```


## Project 4
```javascript
let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert("Please enter a valid Number!");
    }
    
    else if(guess < 1 || guess > 100){
      alert("Please enter a valid Number!");
    }
    else{
      prevGuess.push(guess);
      
      if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was ${randomNumber}`);
        endGame();
      }
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right!`)
    endGame();
  }

  else if(guess < randomNumber){
    displayMessage(`Your guess is too low `)
  }

  else if(guess > randomNumber ){
    displayMessage(`Your guess is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value ='';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGamebutton = document.querySelector("#newGame");
  newGamebutton.addEventListener("click", function(e){
  randomNumber = Math.floor(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML =""; 
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);

  playGame = true;
  })

}
```
## Project 6

```javascript 
const randomColor = function (){
  const hex = "012356789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++ ){
    color += hex[Math.floor(Math.random()* 16)]
  }
  return color;
}
let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000);
  }
  
  function changeBgColor(){
   document.querySelector('body').style.backgroundColor = randomColor();}
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);


document.querySelector("#stop").
addEventListener('click', stopChangingColor);


```