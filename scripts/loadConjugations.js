// pt# need to import verbs and todaysVerb to satisfy linter
const tenses = ['pres', 'imperf', 'past', 'futur'];

for (let i = 0; i < tenses.length; i += 1) {
  const tense = tenses[i];
  const div = document.getElementById(tense);
  const divPs = div.getElementsByTagName('p');
  for (let j = 0; j < divPs.length; j += 1) {
    const input = divPs[j];
    const pId = divPs[j].id;
    const translation = verbs[todaysVerb][tense][pId];
    input.innerHTML = translation;
  }
}
