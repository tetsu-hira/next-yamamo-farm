// firebaseをimportしています
import firebase, { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAWnPhwX0_nJmKzGnJf8nS4w0_hr6mv59A',
  authDomain: 'next-yamamo-farm.firebaseapp.com',
  projectId: 'next-yamamo-farm',
  storageBucket: 'next-yamamo-farm.appspot.com',
  messagingSenderId: '438980695718',
  appId: '1:438980695718:web:61ee281ed1e9fe671b4667',
  measurementId: 'G-XRLPYS1FY0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  /* check status */
});

// データベースからcitiesというリストを取得する場合の例
async function getCities(db: any) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
