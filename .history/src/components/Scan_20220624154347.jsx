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
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Title
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                        won’t do anything. I was taught I could do everything.
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) :
          <div></div>
        }
      )}
    </div>
  )
}

export default Scan