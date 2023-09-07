import {
  singleVocabCard, deleteVocabCard, vocabCards, htmlCards, cssCards, jsCards
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabCards } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('WANT TO DELETE?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          vocabCards(user.uid).then(showVocabCards);
        });
      }
    }
    if (e.target.id.includes('create-vocab')) {
      addVocabForm(user.uid);
    }
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      singleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user));
    }

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
