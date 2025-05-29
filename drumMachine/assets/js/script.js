// Keep track of the currently playing audio
let currentAudio = null;

function play(str) {
  let displayField = document.getElementById("display");
  
  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  
  // Set the display text based on key pressed
  if (str === "q" || str === "Q") {
    displayField.innerText = "Attack on Titan - Erwin Smith";
  } else if (str === "w" || str === "W") {
    displayField.innerText = "Art of Winning";
  } else if (str === "e" || str === "E") {
    displayField.innerText = "The Dark Knight - Bane";
  } else if (str === "a" || str === "A") {
    displayField.innerText = "Game of Thrones - Cersei Lannister";
  } else if (str === "s" || str === "S") {
    displayField.innerText = "Fullmetal Alchemist Brotherhood - Alphonse Elric";
  } else if (str === "d" || str === "D") {
    displayField.innerText = "Naruto - Itachi Uchiha";
  } else if (str === "z" || str === "Z") {
    displayField.innerText = "Monster - Johan Liebert";
  } else if (str === "x" || str === "X") {
    displayField.innerText = "Vinland Saga - Thorfinn";
  } else if (str === "c" || str === "C") {
    displayField.innerText = "Naruto - Madara Uchiha";
  }
  
  // Play the new audio
  const audio = document.getElementById(str);
  audio.currentTime = 0;
  audio.play();
  
  // Update the current audio reference
  currentAudio = audio;
}

window.document.onkeyup = function(e) {
  let keystroke = e.key.toUpperCase();
  if ("QWEASDZXC".includes(keystroke)) {
    play(keystroke);
  }
}