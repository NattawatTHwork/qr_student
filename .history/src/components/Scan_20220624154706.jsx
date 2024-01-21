import React, { useState } from 'react'
import QrReader from 'react-qr-reader';
import { collection , query , where , onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebase';

const Scan = () => {
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [user, setUser] = useState([])
  const [showModal, setShowModal] = useState(false);

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebCam(result);
      console.log(result);
      readID(result);
      setShowModal(true)
    }
  }

  const readID = (result) => {
    const q = query(collection(db, "students"), where("sid", "==", `${result}`));
      onSnapshot(q, (QuerySnapshot) => {
        setUser(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname })))
    });
  }

  console.log('user : ',user[0])
  console.log(showModal)
  
  return (
    <div>
      <h3>Qr Code Scan by Web Cam</h3>
      <QrReader
      delay={1000}
      style={{width: '60%',}}
      onError={handleErrorWebCam}
      onScan={handleScanWebCam}
      />
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
      {!user.length ?
      null : user.map(user =>
        {showModal ?
          (
            <div key={user.id}>
              <h4>{</h4>
            </div>
          ) :
          <div></div>
        }
      )}
    </div>
  )
}

export default Scan