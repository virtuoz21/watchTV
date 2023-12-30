import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQfNNaWNjLtFutQrTFVNfPcdtN1DxGIGg",
    authDomain: "watchit-e1c02.firebaseapp.com",
    projectId: "watchit-e1c02",
    storageBucket: "watchit-e1c02.appspot.com",
    messagingSenderId: "98394134099",
    appId: "1:98394134099:web:f716b91b11ed9f067598a6",
    measurementId: "G-FH83L8LL76"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default app;