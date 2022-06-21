import {
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  pauseButton,
  forestSoundButton,
  rainSoundButton,
  coffeeSoundButton,
  fireSoundButton
} from "./elements.js";

export default function Events({ controls, timer, sounds }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countDown();
  });

  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.pause();
  });

  stopButton.addEventListener("click", () => {
    timer.stop();
    controls.stop();
  });

  increaseButton.addEventListener("click", () => {
    timer.increaseFiveMinutes();
  });

  decreaseButton.addEventListener("click", () => {
    timer.decreaseFiveMinutes();
  });

  forestSoundButton.addEventListener("click", () => {
    controls.addSoundOn(forestSoundButton);
  });

  rainSoundButton.addEventListener("click", () => {
    controls.addSoundOn(rainSoundButton);
  });

  coffeeSoundButton.addEventListener("click", () => {
    controls.addSoundOn(coffeeSoundButton);
  });

  fireSoundButton.addEventListener("click", () => {
    controls.addSoundOn(fireSoundButton);
  });
}