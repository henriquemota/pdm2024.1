import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyDkGnpdQfna7nDaSNjrb5H2jjvN8sJ2SS0',
  authDomain: 'estaciomobile-2024.firebaseapp.com',
  projectId: 'estaciomobile-2024',
  storageBucket: 'estaciomobile-2024.appspot.com',
  messagingSenderId: '1039396053211',
  appId: '1:1039396053211:web:ac943058ff44acbfc0acfe'
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)

export { db }

