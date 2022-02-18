import { getDatabase } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import firebase from '../lib/firebase';
import './firebase';
import './init'; // Initialize FirebaseApp

const db = getDatabase();

function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [studentID, setSudentID] = useState(0);

  useEffect(() => {
    db.collection('sampledata')
      .get()
      .then((snapshot: any) => {
        snapshot.forEach((doc: any) => {
          const data = doc.data();
          setName(data.name);
          setRole(data.role);
          setSudentID(data.studentID);
        });
      });
  }, []);

  return (
    <div className='App'>
      <p>名前 : {name}</p>
      <br />
      <p>役割 : {role}</p>
      <br />
      <p>生徒ID : {studentID}</p>
    </div>
  );
}

export default App;
