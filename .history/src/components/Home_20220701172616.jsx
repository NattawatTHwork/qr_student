import React, { useEffect, useState } from 'react'
import { collection , query , onSnapshot , orderBy , limit } from 'firebase/firestore'
import { db } from '../firebase/firebase';

const Home = () => {
  const [students, setStudents] = useState([])
  const [laststudent, setLaststudents] = useState([])
  const [showal]

  useEffect(() => {
    const q = query(collection(db, "list"), orderBy('time', 'desc'), limit(5));
    onSnapshot(q, (QuerySnapshot) => {
      const student = QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time }))
      setStudents(student)

      if (student != students) {
        const qq = query(collection(db, "list"), orderBy('time', 'desc'), limit(1));
        onSnapshot(qq, (QuerySnapshot) => {
        setLaststudents(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time })))
        });
      }
    });

    // const qq = query(collection(db, "list"), orderBy('time', 'desc'), limit(1));
    // onSnapshot(qq, (QuerySnapshot) => {
    //   setLaststudents(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time })))
    // });
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
      </div>
    </div>
  )
}

export default Home