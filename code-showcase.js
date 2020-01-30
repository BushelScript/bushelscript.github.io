const cycleInterval = 1000; // ms
const animatedGIFTime = 45;
const codeTime = 10;

const programs = document.getElementsByClassName("code-showcase");

var currentProgram = 0;
var subcounter = 0;

function nextProgram() {
  if (subcounter != ((currentProgram == 0) ? animatedGIFTime : codeTime)) {
    // Give more time.
    subcounter += 1;
    return;            
  }
  subcounter = 0;
  
  programs[currentProgram].style.display = 'none';
  currentProgram += 1;
  if (currentProgram >= programs.length) {
    currentProgram = 0;
  }
  programs[currentProgram].style.display = 'block';
}

window.setInterval(nextProgram, cycleInterval);
