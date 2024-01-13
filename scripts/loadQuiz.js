// pt# need to import verbs and todaysVerb to satisfy linter
const tenses = ['pres', 'imperf', 'past', 'futur'];
// const persons = ['yo', 'tu', 'el', 'nosotros', 'ustedes'];

for (let i = 0; i < tenses.length; i += 1) {
  const tense = tenses[i];
  const div = document.getElementById(tense);
  const divInputs = div.getElementsByTagName('input');
  for (let j = 0; j < divInputs.length; j += 1) {
    const input = divInputs[j];
    const inputId = divInputs[j].id;
    const translation = verbs[todaysVerb][tense][inputId];
    input.onchange = function () {
      if (input.value === translation) {
        input.className = 'correct';
      } else {
        input.className = 'false';
      }
    };
  }
}
