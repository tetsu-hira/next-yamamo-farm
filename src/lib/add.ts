import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite';
import { Book } from './books';

import './init'; // Initialize FirebaseApp

export async function add(book: Book): Promise<void> {
  const db = getFirestore();
  const docRef = doc(db, 'books', book.id);
  await setDoc(
    docRef,
    { title: book.title, author: book.author, price: book.price },
    { merge: true /* ドキュメントが存在する場合はフィールドを追記 */ },
  );
}
