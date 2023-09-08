import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (item) => {
  clearDom();
  const domString = `
  <div class="card">
  <div class="card-header" id="header" style="width: 18/7rem;">
  ${item.title}
</div>
<div class="card-body" style="width:18rem;">
  <blockquote class="blockquote mb-0">
    <p>${item.description}</p>
    <footer class="blockquote-footer">${item.language} <cite title="Source Title">${item.time}</cite></footer>
  </blockquote>
  <i class="fas fa-edit btn btn-info"
  id="update-vocab--${item.firebaseKey}"></i>
  <i id="delete-vocab-btn--${item.firebaseKey}"
  class="btn btn-danger fas fa-trash-alt"></i>
</div>
</div>
  `;
  renderToDOM('#view', domString);
};

export default viewVocab;
