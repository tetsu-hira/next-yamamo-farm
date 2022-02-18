// firebaseをimportしています
import firebase, { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAKhA0qkRQurrXkP3tQuAgarrUdlobBjdA',
  authDomain: 'yamamo-farm.firebaseapp.com',
  projectId: 'yamamo-farm',
  storageBucket: 'yamamo-farm.appspot.com',
  messagingSenderId: '822208837852',
  appId: '1:822208837852:web:1456af27fc9a4a795ddc19',
  measurementId: 'G-8261744QYG',
};

const app = initializeApp(firebaseConfig);

// データベースからcitiesというリストを取得する場合の例
async function getCities(db: any) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export default firebase;
