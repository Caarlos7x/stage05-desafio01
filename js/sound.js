import {
  forestSoundButton,
  rainSoundButton,
  coffeeSoundButton,
  fireSoundButton,
} from "./elements.js";

export default function Sounds() {
  const forest = new Audio(
    "./sounds/forest.wav"
  );
  const rain = new Audio(
    "./sounds/rain.wav"
  );
  const coffee = new Audio(
    "./sounds/coffee.wav"
  );
  const fire = new Audio(
    "./sounds/fire.wav"
  );
  forest.loop = true;
  rain.loop = true;
  coffee.loop = true;
  fire.loop = true;

  function playSound(sound) {
    if (sound.classList[0] == "forest") {
      forest.play();
      return;
    }
    if (sound.classList[0] == "rain") {
      rain.play();
      return;
    }
    if (sound.classList[0] == "coffee") {
      coffee.play();
      return;
    }
    if (sound.classList[0] == "fire") {
      fire.play();
      return;
    }
  }

  function stopSound(sound) {
    if (sound.classList[0] == "forest") {
      forest.pause();
      return;
    }
    if (sound.classList[0] == "rain") {
      rain.pause();
      return;
    }
    if (sound.classList[0] == "coffee") {
      coffee.pause();
      return;
    }
    if (sound.classList[0] == "fire") {
      fire.pause();
      return;
    }
  }

  return {
    playSound,
    forest,
    rain,
    coffee,
    fire,
    stopSound
  };
}