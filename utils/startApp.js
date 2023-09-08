import { vocabCards } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyVocabCards, showVocabCards } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);
  logoutButton();

  vocabCards(user.uid).then((array) => {
    if (array.length) {
      showVocabCards(array);
    } else {
      emptyVocabCards();
    }
  });
};

export default startApp;
