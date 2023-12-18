// Axios is a standard http library
const axios = require('axios');
// The ILDA Dictionary file, as downloaded from the Admin menu.
const ilda = require('./data/entries.json');

// The ILDA Dictionary Json file is a bag of words. This function shakes up the bag.
function getRandomWord() {
  const keys = Object.keys(ilda);
  return ilda[keys[Math.floor(Math.random() * keys.length)]];
}

// Check for sentences; if they exist, return the first.
function formatFirstSentenceForm(sentenceForms) {
  if (sentenceForms.length > 0) {
    const firstForm = sentenceForms[0];
    return ` - ${firstForm.target}: "${firstForm.english}"`;
  }
  return '';
}

// TODO: Customize this text for yourself!
function sendWordOfTheDay(webhookUrl) {
  const word = getRandomWord();
  let content = `Replace this introductory greeting text, which introduces the word of the day followed by a translation. Here, it's separated by a new line!\n${word.target}\n${word.english}`;
    
  // Check if sentence_forms exists and has entries
  if (word.sentence_forms && word.sentence_forms.length > 0) {
    content += `\nThis text only displays if there is a valid sentence!\n${formatFirstSentenceForm(word.sentence_forms)}`;
  }
  
  axios.post(webhookUrl, {
    content: content
  }).catch(error => console.error('Error sending message', error));
}

// TODO: Fill in your Discord webhook url here!
const webhookUrl = 'WEBHOOK_URL';
sendWordOfTheDay(webhookUrl);
