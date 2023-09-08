import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { vocabCards } from '../api/vocabData';
import { emptyVocabCards, showVocabCards } from '../pages/vocab';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);

  vocabCards(user.uid).then((array) => {
    if (array.length) {
      showVocabCards(array);
    } else {
      emptyVocabCards();
    }
  });
  // vocabCards(user.uid).then((vocab) => showVocabCards(vocab));
};

export default startApp;
