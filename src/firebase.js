import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { uid } from 'uid'
import { set, ref, push, onValue } from 'firebase/database'


const firebaseConfig = { 
    apiKey: "AIzaSyCXG2zxPBN-YHhjyj4sd7hCVJ8F0wzidDQ", 
    authDomain: "educate2-7ea32.firebaseapp.com", 
    projectId: "educate2-7ea32", 
    storageBucket: "educate2-7ea32.appspot.com", 
    messagingSenderId: "366243856641", 
    appId: "1:366243856641:web:1e5ed7b1ac5825f0f25b00", 
    measurementId: "G-VY9JSVL8Z9" 
  }; 

const writeComent = (coment) => {
    push(ref(db, "/coments"), {
        name: coment['name'],
        text: coment['text'],
    })
}
const readComents =()=>{
    onValue(ref(db), (snapshot) => {
        var data = snapshot.val();
        global.coments   = Object.values(data['coments'])
    })
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const wComents = writeComent
export const rComents = readComents