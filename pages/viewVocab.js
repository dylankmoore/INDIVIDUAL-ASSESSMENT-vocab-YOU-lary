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
  <i class="btn btn-view"
  id="update-vocab--${item.firebaseKey}">View</i>
  <i id="delete-vocab-btn--${item.firebaseKey}"
  class="btn btn-delete">Edit</i>
</div>
</div>
  `;
  renderToDOM('#view', domString);
};

export default viewVocab;
