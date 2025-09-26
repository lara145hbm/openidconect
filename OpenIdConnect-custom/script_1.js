
import { signInWithEmail, signInWithGoogle } from './OpenIdConnect-custom/firebaseauth.js';

const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const googleBtn = document.getElementById('google-login-btn');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  try {
    await signInWithEmail(email, password);
    window.location.href = 'homepage.html';
  } catch (err) {
    alert('Erro ao fazer login: ' + err.message);
    console.error(err);
  }
});

googleBtn.addEventListener('click', async () => {
  try {
    await signInWithGoogle();
    window.location.href = 'homepage.html';
  } catch (err) {
    alert('Erro no login com Google: ' + err.message);
    console.error(err);
  }
});
