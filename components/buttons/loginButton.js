import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<div id="splash" class="card-body"><p class="card-text">Click below to enter Vocab-YOU-Lary Study Sesh!</div></p> <button id="google-auth" class="btn btn-outline">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
