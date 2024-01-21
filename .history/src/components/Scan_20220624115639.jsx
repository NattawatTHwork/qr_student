import React, { useState } from 'react'
import QrReader from 'react-qr-reader';

const Scan = () => {
  const [scanResultWebCam, setScanResultWebCam] =  useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebCam(result);
      console.log(result);
    }
  }

  const readID = () => {
    const q = query(collection(db, "user"), where("address", "==", `${address}`));
      onSnapshot(q, (QuerySnapshot) => {
          setUser(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, name: doc.data().name, bio: doc.data().bio, email: doc.data().email })))
        });
  }
  
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
    </div>
  )
}

export default Scan