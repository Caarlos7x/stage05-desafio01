import {
  forestSoundButton,
  rainSoundButton,
  coffeeSoundButton,
  fireSoundButton,
} from "./elements.js";

const button = document.querySelectorAll('#btn');

button.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

export default function Sounds() {
  const forest = new Audio("../sounds/forest.wav");
  const rain = new Audio("../sounds/rain.wav");
  const coffee = new Audio("../sounds/coffee.wav");
  const fire = new Audio("../sounds/fire.wav");

  forest.loop = true;
  rain.loop = true;
  coffee.loop = true;
  fire.loop = true;

  const sounds = { forest, rain, coffee, fire };
  let currentSound = null;

  function toggleSound(id) {
    const sound = sounds[id];
    if (currentSound && currentSound !== sound) {
      currentSound.pause();
      currentSound.currentTime = 0;  // Reinicia o som atual
    }

    if (currentSound === sound && !sound.paused) {
      sound.pause();
      currentSound = null;
    } else {
      sound.play();
      currentSound = sound;
    }
  }

  return { toggleSound };
}

const sounds = Sounds();

document.getElementById('forest').addEventListener('click', () => sounds.toggleSound('forest'));
document.getElementById('rain').addEventListener('click', () => sounds.toggleSound('rain'));
document.getElementById('coffee').addEventListener('click', () => sounds.toggleSound('coffee'));
document.getElementById('fire').addEventListener('click', () => sounds.toggleSound('fire'));

