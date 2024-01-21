import React, { useState } from 'react'
import QrReader from 'react-qr-reader';
import { collection , query , where , onSnapshot , addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';

const Scan = () => {
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [user, setUser] = useState([])

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebCam(result);
      console.log(result);
      readID(result);
    }
  }

  const readID = (result) => {
    const q = query(collection(db, "students"), where("sid", "==", `${result}`));
      onSnapshot(q, (QuerySnapshot) => {
        setUser(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname })))
    });
  }

  const writeList = async (user) => {
    await addDoc(collection(db, 'list'), { sid: user.sid, firstname: user.firstname, lastname: user.lastname })
    setUser(false)
  }

  console.log('user : ',user[0])
  
  return (
    <div>
      <div className='justify-center items-end flex'>
        <div>
          <h3 className='text-2xl font-bold py-2'>Qr Code Scan by Web Cam</h3>
          <div className='border-2 border-black mt-2'>
            <QrReader
              delay={300}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
          </div>
        </div>
      </div>
      {!user.length ?
        null : user.map(user =>
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
                    Data Student
                  </h3>
                </div>
                {/*body*/}
                <div key={user.id} className="relative p-6 flex-auto">
                  <h3>Student ID : {user.sid}</h3>
                  <h3>ชื่อ-สกุล : {user.firstname} {user.lastname}</h3>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setUser(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => writeList(user)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )}
      
    </div>
  )
}

export default Scan