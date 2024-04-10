/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup


// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

// importScripts('https://gstatic.com/firebase/9.2.0/firebase-app-compat.js');
// importScripts('https://gstatic.com/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('https://gstatic.com/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyBAJSS3clNqkRfpegh0qxJfhFNMoIRpX_I",
  authDomain: "fir-shopping-39d7a.firebaseapp.com",
  projectId: "fir-shopping-39d7a",
  storageBucket: "fir-shopping-39d7a.appspot.com",
  messagingSenderId: "687072793132",
  appId: "1:687072793132:web:f5e449b497c94d8cc23789"
});

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options


/*
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Titulo de la notificacion';
  const notificationOptions = {
    body: 'Este es el body.',
    icon: 'https://e7.pngegg.com/pngimages/331/583/png-clipart-firebase-computer-icons-mobile-backend-as-a-service-mobile-app-google-cloud-angle-cloud-thumbnail.png'
    
  };
  // firebase-logo.png
  // https://www.iconarchive.com/download/i18371/iconshock/dragonball/dragonball-4.ico
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

*/




