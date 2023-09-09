import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h2>No Vocabulary Words Found</h2>';
  renderToDOM('#cards', domString);
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
    <div class="card-header" id="header" style="width: 18.7rem;">
      ${item.title}
    </div>
    <div class="card-body" style="width: 18rem;">
      <blockquote class="blockquote mb-0">
        <p>${item.description}</p>
        <footer class="blockquote-footer">${item.language}</footer>
      </blockquote>
      <a class="btn btn-view" 
      id="view-vocab-btn--${item.firebaseKey}">View</a>
      <a class="btn btn-edit"
      id="update-vocab--${item.firebaseKey}">Edit</a>
      <a id="delete-vocab-btn--${item.firebaseKey}"
      class="btn btn-delete">Delete</a>
    </div>
  </div>`;
    });
  }
  renderToDOM('#cards', domString);
};
export { emptyVocabCards, showVocabCards };
