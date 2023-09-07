import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// FORM TO ADD A VOCABULARY WORD
const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  
  <div class="form-group">
    <label for="title">New Vocabulary Word:</label>
    <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Word" value="${obj.title || ''}" required>
  </div>
  
  <div class="form-group">
    <label for="description">Description:</label>
    <textarea class="form-control" placeholder="Enter Definition" id="description" style="height: 100px">${obj.description || ''}</textarea>
  </div><BR>
  
  <div class="form-group">
  <label for="language">Programming Language:</label>
  <select id="language" value="${obj.language || ''}" required>
    <option value="HTML"}>HTML</option>
    <option value="CSS"}>CSS</option>
    <option value="JavaScript">JavaScript</option>
  </select>
</div><BR>
  <button type="submit" class="btn btn-primary" id="submit-btn">Submit Vocabulary Word
  </button>
</form>
  `;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
