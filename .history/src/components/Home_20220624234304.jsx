import React, { useEffect, useState } from 'react'
import { collection , query , onSnapshot , orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase';

const Home = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const q = query(collection(db, "list"), orderBy('time', 'desc'));
    onSnapshot(q, (QuerySnapshot) => {
      setStudents(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname, time: doc.data().time })))
    });
  }, [])

  const convertTime = (timestamp) => {
    let date = timestamp.toDate();
    let hour = date.getHours().toString().padStart(2, "0");;
    let minute = date.getMinutes().toString().padStart(2, "0");;
    let second = date.getSeconds();
    let day = date.getDate().toString().padStart(2, "0");
	  let month = (date.getMonth()+1).toString().padStart(2, "0");; // beware: January = 0; February = 1, etc.
	  let year = date.getFullYear();
    // let dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
    // let milliSeconds = date.getMilliseconds();

	  date = `${hour}:${minute}:${second} :: ${day}/${month}/${year}`;
	  return date;
  }

  console.log(students)

  return (
    <div>
      <div className="container py-24 mx-auto">
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2">
              <thead>
                <tr>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>Student ID</p></th>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>ชื่อ-สกุล</p></th>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>เวลา</p></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <th scope='row' className='border-2 ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.sid}</p></th>
                    <td className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.firstname} {student.lastname}</p></td>
                    <td className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>{convertTime(student.time)}</p></td>
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