import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { uid } from 'uid'
import { set, ref, push, onValue } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCC6awNj6ArxyaXruq-wF3ohSSd6ONkwPE",
    authDomain: "coments-651b3.firebaseapp.com",
    projectId: "coments-651b3",
    storageBucket: "coments-651b3.appspot.com",
    messagingSenderId: "563137735345",
    appId: "1:563137735345:web:a8c53373143387f2b69090",
    measurementId: "G-KEZHCWB07D"
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