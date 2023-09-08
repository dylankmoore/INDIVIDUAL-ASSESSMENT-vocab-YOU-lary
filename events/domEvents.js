import {
  singleVocabCard, deleteVocabCard, vocabCards, htmlCards, cssCards, jsCards
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabCards } from '../pages/vocab';
import viewVocab from '../pages/viewVocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EVENT TO DELETE CARDS
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('WANT TO DELETE?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabCard(firebaseKey).then(() => {
          vocabCards(user.uid).then(showVocabCards);
        });
      }
    }
    // VIEW SINGLE VOCAB CARD
    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      singleVocabCard(firebaseKey).then(viewVocab);
    }
    // EDIT VOCAB CARD
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      singleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }
    // VIEW CARDS BASED ON LANGUAGE
    if (e.target.id === 'html') {
      htmlCards(user.uid).then(showVocabCards);
    }

    if (e.target.id === 'css') {
      cssCards(user.uid).then(showVocabCards);
    }

    if (e.target.id === 'javascript') {
      jsCards(user.uid).then(showVocabCards);
    }
  });
};

export default domEvents;
