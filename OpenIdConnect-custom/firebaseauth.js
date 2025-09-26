import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_PROJECT>.firebaseapp.com",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_PROJECT>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
  appId: "<APP_ID>"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function signInWithEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  return await signOut(auth);
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// Google Sign-In
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  // Você pode configurar scopes adicionais: provider.addScope('profile');
  try {
    const result = await signInWithPopup(auth, provider);
    // result.user contém as informações do usuário
    return result;
  } catch (err) {
    throw err;
  }
}
