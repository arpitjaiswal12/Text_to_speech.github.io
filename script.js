let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // retuen all the available voice on current device 
  speech.voice = voices[0];// by default voice
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("#Play_btn").addEventListener("click", () => {
  if (speechSynthesis.pause) { // if speech is pause the resume it 
    speechSynthesis.resume(); 
  }
  speech.text = document.querySelector("textarea").value;//the text which need to be speak must be selected from textarea ==> targeting the value of text box
  window.speechSynthesis.speak(speech);// this method will speak the content in speech object 
});

document.querySelector("#Pause_btn").addEventListener("click", () => {
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});
