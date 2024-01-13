import { todaysVerbObj } from "./loadVerb.js";
const tenses = ['pres', 'imperf', 'past', 'futur'];

document.getElementById('definition').innerHTML = todaysVerbObj.translation;

for (let i = 0; i < tenses.length; i += 1) {
  const tense = tenses[i];
  const div = document.getElementById(tense);
  const divPs = div.getElementsByTagName('p');
  for (let j = 0; j < divPs.length; j += 1) {
    const input = divPs[j];
    const pId = divPs[j].id;
    const translation = todaysVerbObj[tense][pId];
    input.innerHTML = translation;
  }
}
