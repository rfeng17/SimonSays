// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [];
var rounds = 10;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var triesLeft = 3;//strikes

function startGame() {
  progress = 0;
  gamePlaying = true;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //set random pattern
  for(let i=0; i<rounds; i++){
    pattern.push(Math.floor((Math.random()*8)+1));
  }
  
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  pattern = [];
  triesLeft = 3;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function checkLoseGame(){
  if(triesLeft == 0){
    stopGame();
    alert("Game Over. You lost.");
  }
  else{
    if(triesLeft != 1)
      alert("Oops! You have " + triesLeft + " attempts left");
    else
      alert("Oops! You have " + triesLeft + " more attempt left");
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    //console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    triesLeft--;
    checkLoseGame();
    setTimeout(playClueSequence, 700);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,//C
  2: 293.66,//D
  3: 329.63,//E
  4: 349.23,//F
  5: 392,//G
  6: 440,//A
  7: 493.88,//B
  8: 523.25//C
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

const beat = [750, 500, 250];
var rhythm = [];
var musicSequence = [];
var musicPlaying = false;

function music(){
  document.getElementById("startMusic").classList.add("hidden");
  document.getElementById("stopMusic").classList.remove("hidden");
  
  for(let i=0; i<10; i++){
    rhythm.push(Math.floor((Math.random()*3)+0));
    musicSequence.push(Math.floor((Math.random()*8)+1));
  }
  playMusic();
}

function playMusic(){
  musicPlaying = true;
                     
  let delay = nextClueWaitTime;
  for(let i=0;i<10;i++){
    setTimeout(playNote,delay,musicSequence[i]);
    delay += beat[rhythm[i]];
    delay += cluePauseTime;
    //console.log(beat[rhythm[i]]);
  }
  setTimeout(stopMusic,delay);
}

function stopMusic() {
  musicPlaying = false;
  rhythm = [];
  musicSequence = [];

  document.getElementById("startMusic").classList.remove("hidden");
  document.getElementById("stopMusic").classList.add("hidden");
}

function playNote(btn){
  if(musicPlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    console.log(btn);
  }
}