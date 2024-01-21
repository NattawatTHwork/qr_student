import React from 'react'
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
  
  return (
    <div>Scan</div>
  )
}

export default Scan