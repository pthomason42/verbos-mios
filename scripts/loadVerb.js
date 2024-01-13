import { verbs } from "./verbs.js";
const infinitives = Object.keys(verbs);

const today = Date.now();
const tmpDate = new Date();
// console.log(typeof(today));
const offset = tmpDate.getTimezoneOffset(); // doesn't respect DST
// console.log('offset: ', tmpDate.getTimezoneOffset());
const oneDay = 1000 * 60 * 60 * 24; // milli, sec, min, hour
const localToday = today + offset;
const todayDay = (localToday / oneDay).toFixed(0);
const todaysIndex = todayDay % infinitives.length;
const todaysVerb = infinitives[todaysIndex];

const todaysVerbSpan = `<a href="https://www.wordreference.com/es/en/translation.asp?spen=${todaysVerb}">${todaysVerb}</a>`;
// console.log('todaysVerbSpan : ', todaysVerbSpan );
document.getElementById('word').innerHTML = todaysVerbSpan || 'oops!';

export const todaysVerbObj = verbs[todaysVerb];
