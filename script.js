console.log("test")



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"; // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
            
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDXFgES6yTgASChbDOYmu49vlgFwGSbXxY",
    authDomain: "ads-page-8fde2.firebaseapp.com",
    projectId: "ads-page-8fde2",
    storageBucket: "ads-page-8fde2.appspot.com",
    messagingSenderId: "25884378377",
    appId: "1:25884378377:web:67119a564badc769cb7fd8"
    };

const app = initializeApp(firebaseConfig); // Initialize Firebase

import { getDatabase, ref, ge, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"

    const db = getDatabase();

    