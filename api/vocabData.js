import client from '../utils/client';

const endpoint = client.databaseURL;

// GET VOCAB CARDS
const vocabCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET SINGLE VOCAB CARD
const singleVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE NEW VOCAB CARD
const createVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// EDIT/UPDATE VOCAB CARD
const updateVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE VOCAB CARD
const deleteVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER HTML CARDS
const htmlCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((item) => item.language === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

// FILTER CSS CARDS
const cssCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((item) => item.language === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

// FILTER JS CARDS
const jsCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_data.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const javascript = Object.values(data).filter((item) => item.language === 'Javascript');
      resolve(javascript);
    })
    .catch(reject);
});

// SEARCH VOCAB
const searchVocabCards = (searchValue, uid) => new Promise((resolve, reject) => {
  vocabCards(uid).then((vocabArray) => {
    const searchResults = vocabArray.filter((item) => (
      item.title.toLowerCase().includes(searchValue) || item.description.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  vocabCards,
  singleVocabCard,
  createVocabCard,
  updateVocabCard,
  deleteVocabCard,
  htmlCards,
  cssCards,
  jsCards,
  searchVocabCards,
};
