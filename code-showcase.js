const cycleInterval = 10000; // ms

const programs = document.getElementsByClassName("code-showcase");

var currentProgram = 0;

function nextProgram() {
  programs[currentProgram].style.display = 'none';
  currentProgram += 1;
  if (currentProgram >= programs.length) {
    currentProgram = 0;
  }
  programs[currentProgram].style.display = 'block';
  console.log(programs[currentProgram]);
}

window.setInterval(nextProgram, cycleInterval);
