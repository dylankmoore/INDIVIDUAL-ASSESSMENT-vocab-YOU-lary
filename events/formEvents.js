import { createVocabCard, vocabCards, updateVocabCard } from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';
import timeStamp from './timeStamp';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    // CLICK EVENT FOR ADDING A VOCAB
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked SUBMIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        timestamp: timeStamp,
        language: document.querySelector('#language').value,
        uid: user.uid
      };

      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabCard(patchPayload).then(() => {
          vocabCards(user.uid).then(showVocabCards);
        });
      });
    }

    // EDIT CARDS
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('clicked UPDATE BOOK', e.target.id);

      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        timestamp: timeStamp,
        language: document.querySelector('#language').value,
        uid: user.uid,
        firebaseKey,
      };

      updateVocabCard(payload).then(() => {
        vocabCards(user.uid).then(showVocabCards);
      });
    }
  });
};

export default formEvents;
