import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCb9EZyW1-QcZIJznTfYear1NZUmO08lQ", 
    authDomain: "a3mmedia-b4abb.firebaseapp.com",
    projectId: "a3mmedia-b4abb",
    storageBucket: "a3mmedia-b4abb.firebasestorage.app",
    messagingSenderId: "963128106205",
    appId: "1:963128106205:web:4449c5172cc97b1b6c0f34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير المتغيرات للنافذة العالمية لكي تراها الملفات الأخرى (مثل auth.js و app.js)
window.auth = auth;
window.db = db;

export { auth, db };