import React, { useEffect, useState } from 'react'
import { collection , query , onSnapshot , orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase';

const Home = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    // const q = query(collection(db, "list"));
    // onSnapshot(q, (QuerySnapshot) => {
    //   setStudents(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname })))
    // });
    const colRef = collection(db, 'list')
    const q =query(colRef)
  }, [])

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
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <th scope='row' className='border ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.sid}</p></th>
                    <td className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>{student.firstname} {student.lastname}</p></td>
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