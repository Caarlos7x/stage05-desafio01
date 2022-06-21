import {
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  pauseButton
} from "./elements.js";

export default function Controls({ sounds }) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function stop() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function addSoundOn(button) {
    if (button.classList.contains("soundOn")) {
      sounds.stopSound(button);
      button.classList.toggle("soundOn");
      return;
    }
    sounds.playSound(button);
    button.classList.toggle("soundOn");
  }

  return {
    play,
    pause,stop,
    addSoundOn
  };
}
