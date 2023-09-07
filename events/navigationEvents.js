import { signOut } from '../utils/auth';
import { emptyVocabCards, showVocabCards } from '../pages/vocab';
import {
  vocabCards, htmlCards, cssCards, jsCards
} from '../api/vocabData';
// import addVocabForm from '../components/forms/addVocabForm';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL CARDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    vocabCards(user.uid).then((array) => {
      if (array.length) {
        showVocabCards(array);
      } else {
        emptyVocabCards();
      }
    });
  });

  // CREATE CARDS
  /* document.querySelector('#create-vocab').addEventListener('click', () => {
    console.warn('CLICKED UPDATE VOCAB');
    addVocabForm({}, user);
  }); */

  // HTML CARDS
  document.querySelector('#html').addEventListener('click', () => {
    htmlCards(user.uid).then(showVocabCards);
  });

  // CSS CARDS
  document.querySelector('#css').addEventListener('click', () => {
    cssCards(user.uid).then(showVocabCards);
  });

  // JS CARDS
  document.querySelector('#javascript').addEventListener('click', () => {
    jsCards(user.uid).then(showVocabCards);
  });
};

export default navigationEvents;
