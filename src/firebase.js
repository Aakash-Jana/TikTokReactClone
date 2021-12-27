import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUSTl06fpVDS2fCePwPv5A_8rOI8Z_6HI",
    authDomain: "aakash-159a2.firebaseapp.com",
    databaseURL: "https://aakash-159a2.firebaseio.com",
    projectId: "aakash-159a2",
    storageBucket: "aakash-159a2.appspot.com",
    messagingSenderId: "447529889751",
    appId: "1:447529889751:web:6ad80f4172dff990d5a592"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;