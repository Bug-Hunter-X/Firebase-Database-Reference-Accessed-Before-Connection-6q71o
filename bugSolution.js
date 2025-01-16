import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from './firebaseConfig'; //Import your firebase config

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const starCountRef = ref(db, 'posts/post1/starCount');

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Star count:', data);
});
