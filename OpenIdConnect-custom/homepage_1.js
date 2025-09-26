import { onAuthChange, signOutUser } from './OpenIdConnect-custom/firebaseauth.js';

const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const photoEl = document.getElementById('photo');
const logoutBtn = document.getElementById('logout-btn');

onAuthChange((user) => {
  if (user) {
    nameEl.textContent = user.displayName || 'Usuário';
    emailEl.textContent = user.email || '';
    if (user.photoURL) {
      photoEl.src = user.photoURL;
      photoEl.style.display = 'block';
    }
  } else {
    window.location.href = 'index.html';
  }
});

logoutBtn.addEventListener('click', async () => {
  try {
    await signOutUser();
    window.location.href = 'index.html';
  } catch (err) {
    alert('Erro ao deslogar: ' + err.message);
  }
});
