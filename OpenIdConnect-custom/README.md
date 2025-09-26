# OpenIdConnect - Customized with Google Sign-In
Este pacote é baseado no repositório original (`profjacques/OpenIdConnect`) e adiciona o botão **Entrar com Google** usando Firebase Authentication.

## Instruções
1. Crie um projeto no Firebase Console.
2. Habilite Authentication -> Sign-in method -> Google e E-mail/Password.
3. No `firebaseauth.js`, substitua o objeto `firebaseConfig` pelas credenciais do seu projeto.
4. Abra `index.html` no navegador (ou faça deploy).
5. Teste login por e-mail/senha e login com Google. Após autenticar, o usuário será redirecionado para `homepage.html`.

## Observações
- Este pacote não inclui as suas chaves do Firebase por segurança.
- Se preferir `signInWithRedirect` (em vez de popup), altere `signInWithPopup` para `signInWithRedirect` em `firebaseauth.js`.
