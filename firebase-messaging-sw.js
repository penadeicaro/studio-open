// ⚠️ Cole aqui a mesma config do index.html
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDSokIjZr-psnD98K8SxArv86xZje1ih10",
  authDomain: "studioopen-a3957.firebaseapp.com",
  projectId: "studioopen-a3957",
  storageBucket: "studioopen-a3957.firebasestorage.app",
  messagingSenderId: "333518249480",
  appId: "1:333518249480:web:29c56bbec557cc18ff3bbd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
