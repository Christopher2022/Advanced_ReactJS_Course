// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging"

const vapidKey = "BDYsBxUI6tV2ks0sq9X-i8ePoUKlGiXmF7FH0fJEMkfTfwK1vBibYpUnHarDhCp9yszwGgSo8bWFl5x6Yx2uGyk";

// currentToken = "fdyyBFa9fG2RM0ICgCNSG-:APA91bG83Kighq6pM6Udr2E1pSUhBLWAfvogENYcv3vLG3rITlUv4mN2scvuRnCakf_33P0yM0pvN-E7xSAC7LM-T2xwRXkCz1oNN97N0zsHWX3A5Odqr3kMSbxV4r-8m9duZZ2DMzHn"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJSS3clNqkRfpegh0qxJfhFNMoIRpX_I",
  authDomain: "fir-shopping-39d7a.firebaseapp.com",
  projectId: "fir-shopping-39d7a",
  storageBucket: "fir-shopping-39d7a.appspot.com",
  messagingSenderId: "687072793132",
  appId: "1:687072793132:web:f5e449b497c94d8cc23789"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BDYsBxUI6tV2ks0sq9X-i8ePoUKlGiXmF7FH0fJEMkfTfwK1vBibYpUnHarDhCp9yszwGgSo8bWFl5x6Yx2uGyk' })
getToken(messaging, { vapidKey })
.then(currentToken => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      // console.log('currentToken:', currentToken);
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

  const sendTokenToServer = token => {
    if (localStorage.getItem('tokenSentToServer')) return;
    // TO-DO: Implementar la lógica de que en el servidor se almacene el token
    localStorage.setItem('tokenSentToServer', '1');
  }