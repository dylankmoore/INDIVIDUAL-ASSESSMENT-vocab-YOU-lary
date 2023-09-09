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
  <div class="text-secondary">• ${item.language}</div><BR>
    <p>${item.description}</p>
    <div class="time-submit">time submitted:</div>
        <cite title="time stamp!">${item.timestamp}</cite>
  </blockquote><BR>
  <a class="btn btn-edit"
  id="update-vocab--${item.firebaseKey}">Edit</a>
  <a id="delete-vocab-btn--${item.firebaseKey}"
  class="btn btn-delete">Delete</a>
</div>
</div>
  `;
  renderToDOM('#view', domString);
};

export default viewVocab;
