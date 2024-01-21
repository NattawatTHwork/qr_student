import React, { useEffect, useState } from 'react'
import { collection , query , onSnapshot , orderBy , limit } from 'firebase/firestore'
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase/firebase';

const Home = () => {
  const [students, setStudents] = useState([])
  const [laststudent, setLaststudent] = useState([])
  const [showalert, setShowalert] = useState(false)
  const [url, setUrl] = useState()

  useEffect(() => {
    const q = query(collection(db, "list"), orderBy('time', 'desc'), limit(5));
    onSnapshot(q, (QuerySnapshot) => {
      const student = QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time }))
      setStudents(student)
      console.log(student)

      // if (student != students) {
      //   const qq = query(collection(db, "list"), orderBy('time', 'desc'), limit(1));
      //   onSnapshot(qq, (QuerySnapshot) => {
      //     const laststudent = QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time }))
      //     setLaststudents(laststudent)
      //     // console.log(laststudent[0].sid)
      //     const pathReference = ref(storage, `images/${laststudent[0].sid}.jpg`);
      //     getDownloadURL(pathReference).then(url => {
      //       console.log(url)
      //       setUrl(url)
      //     })

      //     setShowalert(true)
      //   });
      // }

      if (student != students) {
        const laststudent = {id: student[0].id, sid: student[0].sid, firstname: student[0].firstname, lastname: student[0].lastname  }
        // const laststudent = student.map(doc => ({ id: doc[0].id, sid: doc[0].data().sid, firstname: doc[0].data().firstname, lastname: doc[0].data().lastname, time: doc[0].data().time }))
        // setLaststudent(laststudent)
        // console.log(laststudent)
        const pathReference = ref(storage, `images/${student[0].sid}.jpg`);
        getDownloadURL(pathReference).then(url => {
          console.log(url)
          setUrl(url)
        })

        setShowalert(true)
      }
    });
  }, [])

  const convertTime = (timestamp) => {
    let date = timestamp.toDate();
    let hour = date.getHours().toString().padStart(2, "0");;
    let minute = date.getMinutes().toString().padStart(2, "0");;
    // let second = date.getSeconds().toString().padStart(2, "0");;
    let day = date.getDate().toString().padStart(2, "0");
	  let month = (date.getMonth()+1).toString().padStart(2, "0");; // beware: January = 0; February = 1, etc.
	  let year = date.getFullYear();
    // let dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
    // let milliSeconds = date.getMilliseconds();

	  date = `${hour}:${minute} ${day}/${month}/${year}`;
	  return date;
  }

  return (
    <div>
      <div className="container py-24 mx-auto">
        {/* <h1 className='text-2xl font-bold py-2 text-center'>LAST</h1>
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2">
              <thead>
                <tr>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>Student ID</p></th>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>ชื่อ-สกุล</p></th>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>เวลา</p></th>
                </tr>
              </thead>
              <tbody>
                {laststudent.map((student) => (
                  <tr key={student.id}>
                    <th scope='row' className='border-2 ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.sid}</p></th>
                    <td className='border-2 text-center'><p className='ml-2 mt-2 mr-2 mb-2'>{student.firstname} {student.lastname}</p></td>
                    <td className='border-2 text-center'><p className='ml-2 mt-2 mr-2 mb-2'>{convertTime(student.time)}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
        
        <h1 className='text-2xl font-bold py-2 text-center mt-10'>TOP 5 LAST</h1>
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2">
              <thead>
                <tr>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>Student ID</p></th>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>ชื่อ-สกุล</p></th>
                  <th scope='col' className='border-2 w-48'><p className='ml-2 mt-2 mr-2 mb-2'>เวลา</p></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <th scope='row' className='border-2 ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.sid}</p></th>
                    <td className='border-2 text-center'><p className='ml-2 mt-2 mr-2 mb-2'>{student.firstname} {student.lastname}</p></td>
                    <td className='border-2 text-center'><p className='ml-2 mt-2 mr-2 mb-2'>{convertTime(student.time)}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {!showalert ?
        null : laststudent.map(student =>
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
                    Last Student
                  </h3>
                </div>
                {/*body*/}
                <div key={student.id} className="relative p-6 flex-auto">
                  <h3>Student ID : {student.sid}</h3>
                  <h3>Name : {student.firstname} {student.lastname}</h3>
                  <h3>Time : {convertTime(student.time)}</h3>
                  <img src={url} className='w-40 mx-auto' />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-600 text-white hover:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowalert(false)}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )}      
      </div>
    </div>
  )
}

export default Home