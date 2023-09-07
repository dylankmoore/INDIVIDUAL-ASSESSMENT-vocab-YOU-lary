import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h2>No Vocabulary Words Found</h2>';
  renderToDOM('#store', domString);
};

const showVocabCards = (array) => {
  clearDom();

  let domString = '';
  if (array.length < 1) {
    domString += '<h2>No Vocabulary Words Found</h2>';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card">
    <div class="card-header">
    <div class="card-header" id="header" style="width: 18rem;">
      ${item.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${item.description}</p>
        <footer class="blockquote-footer">${item.language} <cite title="Source Title">${item.time}</cite></footer>
      </blockquote>
      <i class="btn btn-success fas fa-eye"
      id="edit-vocab-btn--${item.firebaseKey}"></i>
      <i id="delete-vocab-btn--${item.firebaseKey}"
      class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
    });
  }
  renderToDOM('#store', domString);
};
export { emptyVocabCards, showVocabCards };
