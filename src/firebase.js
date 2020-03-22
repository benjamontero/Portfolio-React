import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCxA1l-frK7wOzcLuiyq2C2hsm2UhEJtak",
  authDomain: "portfolio-benja.firebaseapp.com",
  databaseURL: "https://portfolio-benja.firebaseio.com",
  projectId: "portfolio-benja",
  storageBucket: "portfolio-benja.appspot.com",
  messagingSenderId: "492622642039",
  appId: "1:492622642039:web:794a67e48c465666147f72"
};

firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase;

export {
	firebaseApp,
};