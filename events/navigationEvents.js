import { signOut } from '../utils/auth';
import { emptyVocabCards, showVocabCards } from '../pages/vocab';
import {
  vocabCards, htmlCards, cssCards, jsCards, searchVocabCards
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // CLICK EVENTS
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
  document.querySelector('#create-vocab').addEventListener('click', () => {
    addVocabForm({}, user);
  });

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

  // SEARCH VOCAB CARDS
  document.querySelector('#search-vocab').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-vocab').value.toLowerCase();
    if (e.keyCode === 13) {
      searchVocabCards(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showVocabCards(search);
          } else {
            emptyVocabCards();
          }
        });
      document.querySelector('#search-vocab').value = '';
    }
  });
};

export default navigationEvents;
