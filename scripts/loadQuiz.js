import { todaysVerbObj } from "./loadVerb.js";
const tenses = ['pres', 'imperf', 'past', 'futur'];
// const persons = ['yo', 'tu', 'el', 'nosotros', 'ustedes'];

for (let i = 0; i < tenses.length; i += 1) {
  const tense = tenses[i];
  const div = document.getElementById(tense);
  const divInputs = div.getElementsByTagName('input');
  for (let j = 0; j < divInputs.length; j += 1) {
    const input = divInputs[j];
    const inputId = divInputs[j].id;
    const translation = todaysVerbObj[tense][inputId];
    input.onchange = function () {
      if (input.value.toLowerCase() === translation) {
        input.className = 'correct';
      } else {
        input.className = 'false';
      }
    };
  }
}
